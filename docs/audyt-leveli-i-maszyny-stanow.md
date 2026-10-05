# Audyt leveli i maszyny stanów

**Zakres:** opis aktualnie zaimplementowanej gry „Czytanie sylabowe” oraz docelowy sposób przechodzenia między zadaniami. Dokument rozróżnia stan obecny od rekomendacji. Nie opisuje zmian w kodzie.

## Najważniejszy wniosek

Wynik zadania **nie powoduje przejścia do kolejnego levelu**. Wszystkie osiem leveli można wybrać niezależnie z menu; nie ma blokad ani automatycznego odblokowywania następnego levelu.

W obrębie jednego levelu:

- poprawna odpowiedź prowadzi do następnego zadania automatycznie; w levelu 6 przejście następuje po 2 sekundach;
- zła odpowiedź nie kończy zadania i nie cofa postępu — dziecko może próbować dalej;
- po ostatnim zadaniu wyświetlany jest wspólny ekran końca ćwiczenia z powrotem do menu.

## Wspólny przebieg sesji

```text
Biblioteka gier → „Czytanie sylabowe” → wybór levelu
                                         ↓
                               wybór liczby zadań
                         (we wszystkich levelach)
                                         ↓
                                 zadanie nr 1…N
                         ┌───────────────┴───────────────┐
                         ↓                               ↓
                    odpowiedź dobra                  odpowiedź zła
                         ↓                               ↓
             informacja zwrotna / przejście       sygnał błędu lub
                         ↓                       widoczna pomyłka
                 następne zadanie                 ↓
                         ↓                       ponowna próba tego
               ostatnie zadanie?                  samego zadania
                   ↓        ↓
                 nie       tak
                  ↓         ↓
          kolejne zadanie  ekran końca → Menu
```

Przycisk „← Menu” jest dostępny w trakcie każdego levelu. Podpowiedź pokazuje poprawną odpowiedź, ale nie zalicza zadania i nie wymusza przejścia.

## Level 1 — Literki

### Co robi

Dziecko widzi dużą drukowaną literę oraz pod nią jej powtórzenia. Sesja losuje litery z puli wybranego języka, a dla każdej z nich także liczbę powtórzeń od 1 do 6; przed startem dziecko wybiera liczbę różnych liter.

### Stan obecny: maszyna stanów

```text
[start] → [pokaż literę i 1–6 jej powtórzeń, nasłuchuj klawiatury]
                 ├─ właściwy klawisz → [zaznacz kolejne powtórzenie,
                 │                     odczytaj nazwę/dźwięk litery]
                 │                     → [kolejne powtórzenie lub, po ostatnim, 650 ms → następna litera]
                 └─ niewłaściwy klawisz → [krótki dźwięk błędu] → [pokaż tę samą literę]
```

Po ostatniej poprawnej literze następuje ekran końca i oklaski. Nie ma tekstowego komunikatu po błędzie, jedynie łagodny dźwięk.

### Przejście — rekomendacja

Automatyczne przejście po 650 ms jest tu właściwe: zadanie jest bardzo krótkie, a poprawna litera pozostaje chwilę widoczna. Warto zachować brak kary za błąd.

## Level 2 — Wyrazy

### Co robi

Dziecko widzi obrazek i kreski wyrazu podzielone na sylaby. Wpisuje litery po kolei. Po każdej poprawnej literze słyszy jej nazwę; po zamknięciu sylaby słyszy też sylabę, a po ukończeniu — całe słowo.

### Stan obecny: maszyna stanów

```text
[start] → [obrazek + puste pola, oczekiwanie na literę]
                 ├─ dobra litera, nie koniec sylaby → [wpisz, odczytaj literę] → [oczekiwanie]
                 ├─ dobra litera, koniec sylaby → [wpisz, odczytaj literę]
                 │                                  → pauza 2 s → [odczytaj sylabę] → [oczekiwanie]
                 ├─ dobra ostatnia litera → [odczytaj literę i sylabę]
                 │                          → [odczytaj całe słowo] → [następny wyraz]
                 └─ zła litera → [dźwięk błędu] → [to samo pole]
```

Przejście jest automatyczne dopiero po odsłuchaniu całego słowa. Zła litera niczego nie wpisuje i nie resetuje wyrazu.

### Przejście — rekomendacja

Zachować automatyczne przejście, ale testować jego tempo z dziećmi: obecna pauza po sylabie wynosi 2 sekundy, więc dłuższy wyraz może prowadzić do wyraźnego oczekiwania. Dziecko powinno nadal widzieć wpisane litery podczas całego odsłuchu.

## Level 3 — Sylaby

### Co robi

Dziecko widzi obrazek, a pod nim pomieszane przyciski z sylabami. Klika sylaby w kolejności, aby zbudować wyraz. Przed startem wybiera liczbę wyrazów.

### Stan obecny: maszyna stanów

```text
[start] → [obrazek + wybór sylab]
                 ├─ właściwa sylaba → [dodaj sylabę, pozytywny dźwięk]
                 │                      ├─ wyraz niegotowy → [wybór kolejnej sylaby]
                 │                      └─ wyraz gotowy → [zablokuj przyciski, odczytaj słowo]
                 │                                          → 1 s → [następny wyraz]
                 └─ niewłaściwa sylaba → [dźwięk błędu] → [wybór tej samej pozycji]
```

Zła sylaba nie jest dodawana, nie znika i nie zmienia układu już ułożonych sylab.

### Przejście — rekomendacja

Obecny model jest spójny. Dobrze byłoby dodać krótkie wizualne potwierdzenie błędnie klikniętej sylaby, ponieważ sam dźwięk może zostać przeoczony. Przejście po sekundzie może zostać automatyczne.

## Level 4 — Litery pisane

### Co robi

Dziecko widzi małą literę stylizowaną na pisaną i wpisuje odpowiadającą jej drukowaną literę. Wybór liczby liter odbywa się przed sesją.

### Stan obecny: maszyna stanów

```text
[start] → [pokaż literę pisaną, nasłuchuj klawiatury]
                 ├─ właściwy klawisz → [odczytaj nazwę/dźwięk,
                 │                     zaznacz literę] → 650 ms → [następna litera]
                 └─ niewłaściwy klawisz → [dźwięk błędu] → [ta sama litera]
```

Po ostatniej odpowiedzi pojawia się ekran końca i oklaski.

### Przejście — rekomendacja

Tak jak w levelu 1: automatyczne przejście jest adekwatne, ponieważ jednoznacznie kończy małe zadanie. Dźwięk błędu nie powinien mieć charakteru kary.

## Level 5 — Zdania

### Co robi

Dziecko widzi obrazek lub rebus oraz pomieszane wyrazy. Układa wyrazy w poprawnej kolejności, budując krótkie zdanie. Przed startem wybiera liczbę zdań.

### Zasady prezentacji sylab — do wdrożenia

Każdy wyraz użyty w tym levelu ma być podzielony wizualnie na sylaby i pokazywany zgodnie z naprzemiennym schematem kolorów:

- pierwsza sylaba jest czerwona;
- druga sylaba jest niebieska;
- trzecia sylaba jest ponownie czerwona; kolejne sylaby kontynuują tę naprzemienność.

Litery w obrębie jednej sylaby powinny mieć małe odstępy, a między sąsiednimi sylabami należy zastosować wyraźnie większy odstęp. Dzięki temu podział sylabowy pozostaje czytelny również wtedy, gdy dziecko układa całe zdanie.

### Stan obecny: maszyna stanów

```text
[start] → [obrazek/rebus + wybór wyrazów]
                 ├─ właściwy wyraz → [dodaj wyraz, pozytywny dźwięk]
                 │                     ├─ zdanie niegotowe → [wybór kolejnego wyrazu]
                 │                     └─ zdanie gotowe → [zablokuj wybór, odczytaj zdanie]
                 │                                         → 1,3 s → [następne zdanie]
                 └─ niewłaściwy wyraz → [dźwięk błędu] → [wybór tej samej pozycji]
```

Zły wybór nie zmienia zbudowanej części zdania. Ostatnie słowo jest wyświetlane z kropką.

### Przejście — rekomendacja

Automatyczne przejście po odsłuchaniu zdania zachowuje płynność. Tak jak w levelu 3, przyda się subtelny sygnał wizualny błędu na klikniętym przycisku.

## Level 6 — Słowa z obrazków

### Co robi

To trzyetapowe zadanie dla słów o długości 3–6 liter:

1. dziecko widzi obrazek i układa jego nazwę z ruchomych liter (z literami dodatkowymi jako rozpraszaczami);
2. następnie wpisuje to samo słowo na klawiaturze, na kreskach podzielonych na sylaby;
3. po poprawnym wpisaniu ma przejść do kolejnego obrazka.

Level 6 jest wyjątkiem montessoriańskim: każda litera jest umieszczona nad kreską, nigdy w okienku. Kreska pod samogłoską jest czerwona, a pod spółgłoską niebieska. Litery są pogrupowane w sylaby: w obrębie sylaby mają małe odstępy, a między sylabami — wyraźnie większe. Ten podział jest obecny zarówno przy układaniu ruchomych liter, jak i przy wpisywaniu słowa.

### Stan obecny: maszyna stanów

```text
[start] → [UKŁADANIE: obrazek + bank liter]
                 ├─ poprawny pełny wyraz → [zachowaj wyraz na planszy]
                 │                         → 2 s → [PISANIE: wpisz wyraz]
                 └─ litera w złym miejscu → [pokaż czerwone niedopasowanie]
                                             → [usuń literę / Wyczyść / układaj dalej]

[PISANIE] → [kreski wpisywanego wyrazu, pogrupowane w sylaby]
                 ├─ pełny poprawny wyraz → [zachowaj wyraz na planszy]
                 │                         → 2 s → [następny obrazek]
                 └─ zła litera → [pokaż czerwone niedopasowanie]
                                  → [Backspace] → [popraw wpis]
```

### Co dzieje się przy złym wyniku

Level 6 nie przechodzi dalej po błędzie. W fazie układania błędna litera pozostaje widoczna na czerwono, aby dziecko mogło ją kliknąć i usunąć; dostępny jest też przycisk „Wyczyść”. W fazie pisania błędna litera również zostaje na czerwono, a dziecko może cofnąć ją klawiszem Backspace.

W tej drugiej fazie jest istotny problem użyteczności: po wpisaniu liczby znaków równej długości słowa nie da się dopisać kolejnych znaków, więc naprawa wymaga Backspace. Na urządzeniu bez wygodnej klawiatury fizycznej może to być trudne.

### Przejście po sukcesie

Po sukcesie nie pokazujemy okienka, dodatkowego komunikatu ani przycisku „Dalej”. Dziecko widzi poprawnie złożony albo wpisany wyraz przez 2 sekundy, a następnie ekran sam przechodzi do kolejnego kroku.

```text
[UKŁADANIE] → poprawny wyraz → 2 s → [PISANIE]

[PISANIE] → pełny poprawny wyraz → 2 s → [następny obrazek]

[UKŁADANIE lub PISANIE] → błąd → [błąd widoczny, możliwość poprawy]
                                → [ten sam etap]
```

#### Zasady docelowego przejścia

- Obrazek i poprawnie złożony wyraz pozostają widoczne na planszy.
- Po układaniu i po wpisaniu nie pokazujemy przycisku przejścia; wyraz pozostaje widoczny przez 2 sekundy.
- Przycisk „← Menu” w lewym górnym rogu pozostaje zawsze dostępny.
- Nie ma modalu, karty sukcesu, przyciemnienia ekranu ani dodatkowej animacji.

## Zasady metodyczne prezentacji wyrazów — do uwzględnienia w audycie

- Przy wpisywaniu liter stosujemy kreski pod literami, a nie obramowane okienka.
- Kreski są zgrupowane w sylaby: odstępy w sylabie są małe, a odstępy między sylabami większe.
- Pierwsza sylaba jest czerwona, druga niebieska, trzecia znów czerwona; dalsze sylaby powtarzają ten schemat.
- Między literami jednej sylaby są małe odstępy, a między sylabami — większe.
- Litery pojawiają się początkowo pojedynczo, a dziecko słyszy odpowiadające im głoski.
- Po ukończeniu sylaby dziecko słyszy ją w całości; po ukończeniu wyrazu — całe słowo.
- Po opanowaniu słowa można wyświetlić je jeszcze raz w całości, czarną czcionką, bez kolorystycznej podpowiedzi.

Kolorowanie całych sylab dotyczy zwykłych leveli. Wyłącznie w montessoriańskim levelu 6 kolor kreski wynika z rodzaju litery: samogłoska ma kreskę czerwoną, a spółgłoska niebieską.

## Kryteria akceptacji przyszłej zmiany levelu 6

1. Po sukcesie nie pojawia się okienko, karta, modal ani warstwa blokująca planszę.
2. Po ukończeniu układania ekran sam przechodzi do wpisywania po 2 sekundach, a po ukończeniu wpisywania — do następnego zadania po 2 sekundach; nie ma przycisku „Dalej”.
3. Błędna odpowiedź nie powoduje przejścia dalej ani utraty postępu; dziecko otrzymuje czytelną możliwość poprawy.
4. W fazie pisania istnieje widoczna kontrolka usunięcia ostatniej litery albo klawiatura ekranowa z Backspace, nie tylko obsługa fizycznego klawisza.
5. Przycisk powrotu do menu działa zawsze, również po sukcesie.
6. W levelu 6 zarówno układane, jak i wpisywane litery są nad kreskami podzielonymi na sylaby; samogłoski mają kreski czerwone, a spółgłoski niebieskie.
