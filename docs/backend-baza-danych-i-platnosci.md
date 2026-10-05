# Dokumentacja techniczna: backend, baza danych i płatności

Ten dokument jest źródłem prawdy dla integracji **Syllabee Plus**. Przed zmianą logowania, płatności, dostępu do poziomów 5–8, Supabase albo Stripe przeczytaj ten dokument oraz wskazany plik implementacyjny — nie trzeba zaczynać od analizy całego projektu.

## Spis treści

1. [Zakres i architektura](#1-zakres-i-architektura)
2. [Przepływ logowania, płatności i dostępu](#2-przepływ-logowania-płatności-i-dostępu)
3. [Baza danych](#3-baza-danych)
4. [Autoryzacja i bezpieczeństwo](#4-autoryzacja-i-bezpieczeństwo)
5. [Analityka i śledzone eventy](#5-analityka-i-śledzone-eventy)
6. [Konfiguracja środowiska](#6-konfiguracja-środowiska)
7. [Wdrożenie i utrzymanie](#7-wdrożenie-i-utrzymanie)
8. [Testy akceptacyjne](#8-testy-akceptacyjne)
9. [Zasady zmian dla kolejnych agentów](#9-zasady-zmian-dla-kolejnych-agentów)

---

## 1. Zakres i architektura

### Cel systemu

Syllabee jest statyczną aplikacją HTML/CSS/JS. Nie ma własnego serwera aplikacyjnego ani własnego API uruchamianego w repozytorium. Backend zapewniają:

- **Supabase Auth** — konto rodzica i logowanie przez Magic Link e-mail;
- **Supabase Postgres** — trwałe uprawnienie oraz rejestr płatności;
- **Supabase Edge Functions** — zaufane API pomiędzy przeglądarką, Supabase i Stripe;
- **Stripe Checkout** — jednorazowa płatność kartą;
- **Stripe webhook** — jedyne źródło, które po potwierdzonej płatności nadaje płatny dostęp.

Poziomy 1–4 są bezpłatne, a poziomy 5–8 wymagają Syllabee Plus. Cena jest definiowana po stronie Stripe jako jednorazowa cena (`one-time`); obecny komunikat na stronie to 3,99 EUR. Dostęp jest przypisany do konta rodzica, a nie do przeglądarki lub urządzenia.

### Mapa implementacji

| Obszar | Plik | Odpowiedzialność |
| --- | --- | --- |
| UI i stan sesji klienta | `index.html`, `script.js` | okno zakupu, Magic Link, przejście do Checkout, blokada poziomów 5–8 |
| Publiczna konfiguracja | `payment-config.js` | adres projektu Supabase i publiczny `anon/publishable key` |
| Schemat bazy | `supabase/migrations/20261005000000_paid_access.sql` | tabele `entitlements`, `payments`, RLS i odebranie uprawnień klientowi |
| Status konta | `supabase/functions/account-status/index.ts` | weryfikuje token i zwraca tylko status dostępu |
| Utworzenie płatności | `supabase/functions/create-checkout-session/index.ts` | weryfikuje użytkownika i tworzy sesję Stripe Checkout |
| Potwierdzenie płatności | `supabase/functions/stripe-webhook/index.ts` | weryfikuje podpis Stripe, zapisuje płatność i nadaje dostęp |
| CORS funkcji wywoływanych z UI | `supabase/functions/_shared/cors.ts` | dopuszcza dokładnie `ALLOWED_ORIGIN` |
| Konfiguracja funkcji | `supabase/config.toml` | webhook nie wymaga JWT Supabase, bo uwierzytelnia go podpis Stripe |

`README.md` zawiera skróconą instrukcję pierwszego wdrożenia. Ten dokument opisuje decyzje architektoniczne i utrzymanie.

## 2. Przepływ logowania, płatności i dostępu

### Schemat przepływu

```text
Rodzic → strona → Supabase Auth (Magic Link)
       → account-status → status uprawnienia
       → create-checkout-session → Stripe Checkout
Stripe → stripe-webhook (zweryfikowany podpis) → Postgres: payments + entitlements
strona → account-status → odblokowanie poziomów 5–8
```

### Kroki techniczne

1. Rodzic wybiera płatny poziom. Frontend w `script.js` sprawdza `account-status`; bez dostępu pokazuje modal.
2. Rodzic podaje e-mail. Frontend wysyła żądanie do `POST /auth/v1/otp` Supabase z `create_user: true`. Po powrocie z Magic Linka tokeny są odczytywane z fragmentu URL i zachowywane lokalnie pod kluczem `syllabee-parent-session`.
3. Zalogowany rodzic wybiera zakup. Frontend wywołuje `create-checkout-session` z nagłówkiem `Authorization: Bearer <access token>`.
4. Funkcja serwerowa weryfikuje token przez `admin.auth.getUser(token)`, odmawia zakupu właścicielowi oraz kontu z istniejącym wpisem `entitlements`, a następnie tworzy Stripe Checkout w trybie `payment`.
5. Do Checkout przekazywane są: e-mail użytkownika, jego UUID w `client_reference_id` oraz w `metadata.user_id`. Identyfikator ceny zawsze pochodzi z sekretu `STRIPE_FULL_ACCESS_PRICE_ID`, więc klient nie może zmienić kwoty ani produktu.
6. Stripe przekierowuje rodzica na `success_url` albo `cancel_url`. Sam powrót do strony **nie oznacza** nadania dostępu.
7. Stripe wysyła `checkout.session.completed` do `stripe-webhook`. Webhook sprawdza nagłówek `stripe-signature` przy użyciu `STRIPE_WEBHOOK_SECRET`, wymaga `payment_status === "paid"`, zapisuje płatność i dopiero potem tworzy uprawnienie.
8. Frontend ponownie pyta `account-status`. Gdy `hasFullAccess` jest prawdziwe, umożliwia wejście do poziomów 5–8.

### Ważne zachowanie po powrocie z płatności

Webhook może przyjść chwilę po przekierowaniu z Checkout. Jeśli po powrocie dostęp nie jest widoczny od razu, należy ponowić sprawdzenie statusu / odświeżyć stronę; nie należy nadać dostępu po parametrze `payment=success` w URL.

## 3. Baza danych

### `public.entitlements`

Jeden rekord oznacza dożywotni pełny dostęp dla jednego konta rodzica.

| Kolumna | Znaczenie |
| --- | --- |
| `user_id uuid` | klucz główny i FK do `auth.users(id)`; identyfikuje rodzica |
| `access_granted_at timestamptz` | czas nadania dostępu |
| `source text` | `stripe` albo `manual` |

Usunięcie użytkownika z Auth usuwa jego uprawnienie (`on delete cascade`). `source = manual` jest przewidziane dla świadomego ręcznego nadania dostępu przez administrację, nie przez frontend.

### `public.payments`

Rejestr potwierdzonych zdarzeń Stripe, służący do audytu i idempotencji.

| Kolumna | Znaczenie |
| --- | --- |
| `stripe_event_id text` | klucz główny; chroni przed wielokrotnym przetworzeniem tego samego webhooka |
| `stripe_checkout_session_id text` | unikalny identyfikator sesji Checkout |
| `stripe_payment_intent_id text` | identyfikator Payment Intent, jeśli Stripe go zwróci |
| `user_id uuid` | konto, które dostało dostęp; FK do `auth.users(id)` |
| `amount_total integer` | kwota w najmniejszej jednostce waluty, np. centach |
| `currency text` | kod waluty Stripe, np. `eur` |
| `created_at timestamptz` | czas zapisu w bazie |

Usunięcie konta z istniejącą płatnością jest zablokowane (`on delete restrict`), aby nie stracić historii płatności przypadkiem.

## 4. Autoryzacja i bezpieczeństwo

- Tabele mają włączone RLS, a role `anon` i `authenticated` mają odebrane wszystkie uprawnienia. Przeglądarka nie odczytuje ani nie zapisuje `entitlements` i `payments` bezpośrednio.
- Tylko Edge Functions używają `SUPABASE_SERVICE_ROLE_KEY`. Klucz omija RLS, dlatego wolno go trzymać wyłącznie w sekretach Supabase.
- `account-status` i `create-checkout-session` wymagają tokenu użytkownika oraz żądania z dokładnego `ALLOWED_ORIGIN`. Każda funkcja sama weryfikuje token przez Supabase Auth.
- `stripe-webhook` ma `verify_jwt = false`, bo Stripe nie przesyła JWT Supabase. Jego zabezpieczeniem jest weryfikacja surowego body i podpisu `stripe-signature`; tej weryfikacji nie wolno usuwać ani przenosić za parser JSON.
- Webhook jest idempotentny: powtórzone zdarzenie Stripe nie tworzy ponownie płatności dzięki konfliktowi `stripe_event_id`, a `entitlements.user_id` pozwala tylko na jedno uprawnienie na konto.
- `OWNER_EMAILS` może dać właścicielowi pełny dostęp bez wpisu w `entitlements`. Mechanizm działa wyłącznie w odpowiedziach funkcji, bez ujawniania sekretów klientowi.
- Publiczny `supabaseAnonKey` / publishable key w `payment-config.js` jest oczekiwany i może trafić do przeglądarki. Nie jest nim `service_role`, sekret Stripe (`sk_...`) ani sekret webhooka (`whsec_...`).

Nie dodawaj endpointu, który na podstawie e-maila, parametru URL, `payment=success` lub danych przesłanych przez frontend bezpośrednio tworzy `entitlements`.

## 5. Analityka i śledzone eventy

### Zasada zgody i dostawca

Analityka korzysta z **Google Analytics 4** (`G-PR1J7WEW4W`) i jest ładowana dopiero po akceptacji przez użytkownika. Wybór jest zapisywany w `localStorage` jako `syllabee-analytics-consent` (`granted` lub `denied`). Przy kolejnej wizycie skrypt GA jest ładowany wyłącznie dla zapisanej wartości `granted`.

Odmowa nie wysyła własnego eventu analitycznego, ponieważ biblioteka GA w ogóle nie jest wtedy ładowana. Kod nie używa identyfikatora użytkownika GA, a komunikat zgody deklaruje brak danych identyfikacyjnych dziecka.

### Własne eventy GA4

Każdy z poniższych eventów jest wysyłany dopiero po udzieleniu zgody:

| Event | Kiedy jest wysyłany | Parametry |
| --- | --- | --- |
| `analytics_consent_granted` | użytkownik zaakceptuje analitykę | `language` |
| `reading_game_opened` | zostanie otwarta gra „Czytanie sylabowe” | `language` |
| `level_selected` | użytkownik wybierze dowolny poziom | `level_number`, `language` |
| `level_started` | faktycznie uruchomi się rozgrywka poziomu | `level_number`, `task_count`, `language` |
| `level_completed` | ukończone zostaną wszystkie zadania w poziomie | `level_number`, `task_count`, `language` |

`language` przyjmuje wybrany język interfejsu (`pl`, `en` lub `de`). `level_number` to numer poziomu 1–8. `task_count` oznacza liczbę zadań w uruchomionej albo ukończonej sesji poziomu; dla części poziomów jest to wybrana przez użytkownika liczba, a nie stała długość całego poziomu.

Wywołanie `gtag("config", ...)` standardowo pozwala GA4 zarejestrować automatyczny `page_view`; w kodzie nie ma osobnego, ręcznego wywołania `page_view`.

### Dane celowo nieśledzone

Aktualna implementacja nie wysyła własnych eventów dla:

- wpisywanych liter, słów, odpowiedzi ani błędów dziecka;
- treści tworzonych w grze i danych o wymowie;
- e-maila rodzica, tokenów sesji lub identyfikatora użytkownika Supabase;
- logowania przez Magic Link, rozpoczęcia/anulowania/sukcesu płatności ani danych Stripe;
- odblokowania Plus, danych karty i rekordów z tabel `payments` lub `entitlements`.

Źródło implementacji: `GA_MEASUREMENT_ID`, `enableGoogleAnalytics`, `setAnalyticsConsent` i `trackAnalyticsEvent` w `script.js`.

## 6. Konfiguracja środowiska

W Supabase ustaw następujące sekrety (wartości pozostają poza repozytorium):

| Sekret | Używany przez | Znaczenie |
| --- | --- | --- |
| `STRIPE_SECRET_KEY` | Checkout, webhook | tajny klucz Stripe zgodny ze środowiskiem test/live |
| `STRIPE_WEBHOOK_SECRET` | webhook | sekret konkretnego endpointu Stripe |
| `STRIPE_FULL_ACCESS_PRICE_ID` | Checkout | `price_...` dla jednorazowego pełnego dostępu |
| `ALLOWED_ORIGIN` | funkcje wywoływane przez UI | dokładny origin, np. `https://twoj-login.github.io` — bez ścieżki |
| `SITE_URL` | Checkout | publiczny adres aplikacji wraz ze ścieżką, np. `https://twoj-login.github.io/Syllabee` |
| `OWNER_EMAILS` | status, Checkout | opcjonalna lista e-maili rozdzielona przecinkami |

Supabase udostępnia funkcjom także `SUPABASE_URL` i `SUPABASE_SERVICE_ROLE_KEY`. Nie ustawiaj ich w `payment-config.js` i nie wpisuj do dokumentacji z prawdziwą wartością.

Różnica jest ważna: `ALLOWED_ORIGIN` ma zawierać tylko schemat, host i ewentualny port; `SITE_URL` ma zawierać ścieżkę aplikacji, ponieważ buduje adresy powrotu Stripe.

## 7. Wdrożenie i utrzymanie

1. Włącz dostawcę e-mail w Supabase Auth i dodaj adres aplikacji do `Site URL` oraz `Redirect URLs`.
2. Zastosuj migracje z katalogu `supabase/migrations/`.
3. W Stripe utwórz produkt i jednorazową cenę; jej `price_...` wpisz jako sekret.
4. Ustaw sekrety i wdroż funkcje:

```sh
supabase secrets set \
  STRIPE_SECRET_KEY=sk_live_... \
  STRIPE_WEBHOOK_SECRET=whsec_... \
  STRIPE_FULL_ACCESS_PRICE_ID=price_... \
  ALLOWED_ORIGIN=https://twoj-login.github.io \
  SITE_URL=https://twoj-login.github.io/Syllabee \
  OWNER_EMAILS=twoj-email@przyklad.pl

supabase functions deploy account-status
supabase functions deploy create-checkout-session
supabase functions deploy stripe-webhook
```

5. W Stripe utwórz endpoint `https://TWOJ_PROJECT_REF.supabase.co/functions/v1/stripe-webhook`, subskrybując zdarzenie `checkout.session.completed`, i ustaw jego sekret jako `STRIPE_WEBHOOK_SECRET`.
6. Uzupełnij `payment-config.js` publicznym URL projektu i kluczem anon/publishable. Wartości tej konfiguracji muszą wskazywać na to samo środowisko (test albo live) co funkcje i Stripe.

Przy zmianie środowiska zmieniaj razem: klucz tajny Stripe, webhook secret, Price ID, URL/klucz Supabase w froncie oraz endpoint webhooka. Nie mieszaj `sk_test_...` z ceną lub webhookiem live.

## 8. Testy akceptacyjne

W pierwszej kolejności testuj w Stripe Test Mode z `sk_test_...`, testową ceną i kartą `4242 4242 4242 4242`.

- Magic Link tworzy / loguje konto i po powrocie widoczny jest e-mail rodzica.
- Niezalogowany rodzic nie uzyska adresu Checkout.
- Konto właściciela i konto z istniejącym `entitlement` nie mogą stworzyć kolejnej sesji Checkout.
- Po udanym Checkout webhook ma poprawny podpis, rekord pojawia się w `payments`, a potem w `entitlements`.
- Powtórzenie tego samego webhooka nie duplikuje płatności ani dostępu.
- Po zalogowaniu na tym samym koncie w innej przeglądarce poziomy 5–8 są dostępne.
- Bez `entitlement` sam parametr `?payment=success` nie odblokowuje poziomów.
- Żądanie do funkcji z innym `Origin`, bez Bearer tokenu albo z nieprawidłowym tokenem jest odrzucone.

Do diagnostyki używaj logów Edge Functions, historii zdarzeń Stripe i tabel w Supabase. Nie wklejaj tokenów, danych kart ani pełnych adresów e-mail do issue, commitów czy logów klienta.

## 9. Zasady zmian dla kolejnych agentów

1. Najpierw ustal, czy zmiana dotyczy UI, funkcji, schematu lub Stripe — często dotyka więcej niż jednej warstwy.
2. Zmiany bazy wykonuj nową migracją w `supabase/migrations/`; nie przepisuj wykonanej migracji produkcyjnej.
3. Przy dodawaniu produktu lub dostępu powiąż go z kontrolowaną po stronie serwera konfiguracją/Price ID. Nie ufaj cenie, identyfikatorowi produktu ani `user_id` z body klienta.
4. Każda nowa funkcja z `service_role` musi walidować tożsamość oraz minimalny zakres działania przed zapytaniem do bazy.
5. Zachowaj zasadę: tylko poprawnie zweryfikowany webhook Stripe nadaje dostęp po płatności. Sukces w UI jest wyłącznie komunikatem o powrocie z Checkout.
6. Jeśli zmieniasz listę płatnych poziomów, zaktualizuj jednocześnie warunek w `script.js`, komunikat w `index.html`, opis produktu Stripe i ten dokument.
7. Po zmianie API, migracji, sekretów lub wdrożenia zaktualizuj ten dokument i skróconą instrukcję w `README.md`, jeśli kroki instalacyjne się zmieniły.
