# Syllabee

Prosta webowa gra do nauki czytania metodą sylabową dla małych dzieci.

## Uruchomienie

Nie trzeba nic instalować. Otwórz plik `index.html` w nowoczesnej przeglądarce, np. Chrome, Safari lub Firefox. Strona główna pokazuje bibliotekę gier; obecna gra „Czytanie sylabowe” otwiera się po kliknięciu „Graj teraz”.

1. W prawym górnym rogu wybierz język: polski, angielski albo niemiecki.
2. Wybierz jeden z siedmiu poziomów.
3. W Level 1 i 4 wpisuj pojedyncze litery z fizycznej klawiatury.
4. W Level 2 wpisuj całe słowa, litera po literze.
5. W Level 3 klikaj sylaby w odpowiedniej kolejności, a w Level 5 układaj zdania.
6. W Level 6 najpierw układaj nazwę obrazka z ruchomych liter, potem wpisz ją na klawiaturze i przeczytaj gotowe słowo.
7. W Level 7 wybierz karty emoji, stwórz własne zdanie i przeczytaj je rodzicowi. Gra nie nagrywa ani nie ocenia wymowy.

Po poprawnie wpisanej literze gra odczytuje jej nazwę głosem ustawionym dla wybranego języka (`pl-PL`, `en-GB` albo `de-DE`) — bez pozytywnego tonu. W Level 2 po domknięciu sylaby odczytuje kolejno ostatnią literę i całą sylabę, a na końcu także całe słowo. Błędny klawisz nie pojawia się na ekranie i wywołuje krótkie, zabawne „tu-dum”. Pozostałe dźwięki zwrotne są tworzone w przeglądarce — bez plików audio. Ustawienie języka jest zapamiętywane w przeglądarce.

## Dodawanie słów

Zestawy dla każdego języka są na początku pliku `script.js`. Każdy wpis słowa zawiera słowo, podział na sylaby, emoji i warianty do wyboru. Emoji można później zastąpić obrazkami z `assets/images`.

## Syllabee Plus: Stripe + Supabase

Poziomy 1–4 są bezpłatne. Poziomy 5–8 są częścią **Syllabee Plus** i wymagają jednorazowego zakupu za **3,99 €**. Uprawnienie jest przypisane do konta rodzica i nadawane dopiero przez zweryfikowany webhook Stripe — nie przez kod przeglądarki.

### 1. Załóż projekt Supabase

1. Utwórz projekt na [Supabase](https://supabase.com/).
2. W `Authentication → Providers → Email` włącz logowanie e-mailem (Magic Link).
3. W `Authentication → URL Configuration` wpisz adres opublikowanej gry do **Site URL** oraz **Redirect URLs**, np. `https://twoj-login.github.io/Syllabee`.
4. W SQL Editor uruchom plik [migracji](supabase/migrations/20261005000000_paid_access.sql).

### 2. Utwórz produkt w Stripe

1. W Stripe utwórz produkt „Syllabee — pełny dostęp”.
2. Dodaj jednorazową cenę: **3,99 EUR** (`one-time`, nie subskrypcja).
3. Skopiuj identyfikator ceny zaczynający się od `price_...`.

### 3. Ustaw sekrety i opublikuj funkcje

Zainstaluj Supabase CLI, zaloguj się i połącz repozytorium z projektem. Następnie ustaw wartości po swojej stronie (nie dodawaj ich do GitHuba):

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

`SUPABASE_URL` i `SUPABASE_SERVICE_ROLE_KEY` są dostępne wewnątrz Supabase Edge Functions. **Nigdy** nie kopiuj klucza `service_role` do pliku `payment-config.js` ani do GitHuba.

`OWNER_EMAILS` jest opcjonalne: pozwala właścicielowi gry korzystać z pełnego dostępu bez kupowania własnego produktu. Przy kilku adresach rozdziel je przecinkami.

### 4. Podłącz webhook Stripe

W Stripe: `Developers → Webhooks → Add endpoint` ustaw adres:

```text
https://TWOJ_PROJECT_REF.supabase.co/functions/v1/stripe-webhook
```

Zaznacz wyłącznie zdarzenie `checkout.session.completed`. Skopiuj sekret webhooka (`whsec_...`) do `STRIPE_WEBHOOK_SECRET` z kroku 3.

### 5. Uzupełnij publiczną konfigurację strony

W pliku `payment-config.js` wpisz adres projektu i **anon key** z `Supabase → Project Settings → API`:

```js
window.SYLLABEE_PAYMENTS_CONFIG = {
  supabaseUrl: "https://TWOJ_PROJECT_REF.supabase.co",
  supabaseAnonKey: "eyJ...",
};
```

Ten klucz jest celowo publiczny. Nie daje dostępu do tabel ani nie pozwala nadawać dostępu — bazę odczytują i zapisują wyłącznie funkcje serwerowe.

### 6. Test przed publikacją

Użyj najpierw kluczy `sk_test_...`, testowej ceny Stripe i testowej karty `4242 4242 4242 4242`. Sprawdź kolejno: magiczny link e-mail, płatność, wpis w tabeli `entitlements` oraz ponowne logowanie w innej przeglądarce. Dopiero potem zmień klucze i cenę na wersję live.
