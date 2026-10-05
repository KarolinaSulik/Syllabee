# Plan gry Syllabee

> Żywy dokument produktu i UX. Przed zmianą menu, nawigacji, poziomów lub treści dla rodziców należy sprawdzić zgodność z tym planem.

## Cel

Syllabee to spokojna, bezreklamowa gra wspierająca naukę czytania metodą sylabową dla dzieci w wieku 4–6 lat. Każdy ekran ma prowadzić do jednego prostego działania, używać krótkich komunikatów i ograniczać nadmiar bodźców.

Najważniejsze zasady:

- bez reklam, logowania i presji;
- krótkie, zrozumiałe teksty;
- nauka przez zabawę i samodzielne próby;
- czytelna nawigacja dla dziecka oraz rodzica;
- interfejs i treści dla rodziców dostępne po polsku, angielsku i niemiecku.

### Zasada MINI

**MINI** oznacza minimalizm tekstowy. Przy każdej implementacji najpierw sprawdzamy, czy tekst jest potrzebny do wykonania bieżącego działania. Gra jest przeznaczona dla dzieci, które często jeszcze nie czytają, dlatego komunikaty zostawiamy tylko tam, gdzie pomagają dziecku lub rodzicowi. Zamiast objaśniać oczywiste rzeczy tekstem, używamy czytelnych ikon, obrazu, układu i prostych działań.

## Mapa gry

```text
Menu główne
  → karta dostępnej gry: „Czytanie sylabowe”
    → wybór jednego z 8 poziomów
      → ustawienie liczby zadań (gdy dany poziom tego wymaga)
        → rozgrywka
          → kolejne zadanie / wynik / powrót do Menu
```

Użytkownik zawsze powinien rozumieć, gdzie się znajduje, jak zacząć ćwiczenie i jak wrócić do Menu.

## Menu główne: biblioteka gier

Menu główne jest biblioteką, która w przyszłości będzie zawierać więcej gier Syllabee.

- Obecnie pokazywana jest wyłącznie jedna dostępna karta: **Czytanie sylabowe**.
- Nie pokazujemy pustych kart ani kart „Wkrótce”, dopóki kolejna gra nie będzie gotowa.
- Pokazujemy tylko tytuł **Uczymy przez zabawę** — bez dodatkowego hasła „Dla małych odkrywców”. Tytuł ma fioletowy kolor używany wcześniej przez to hasło.
- Opis ograniczamy do najważniejszych informacji: wieku, braku reklam i logowania. Najważniejszym elementem jest przycisk **Graj teraz**.
- Po prawej stronie nagłówka znajdują się odnośniki **Dla rodziców** i **O twórczyni** oraz wybór języka.
- Nową grę dodaje się jako kolejną kartę biblioteki. Może mieć własny wybór poziomów albo własny przebieg, bez przebudowy menu głównego.

## Stałe elementy nawigacji

### Logotyp

- Na stronie głównej oraz na widoku wyboru poziomów używamy pełnego logotypu **Syllabee** w lewym górnym rogu.
- Pozycja i rozmiar logotypu są takie same na stronie głównej oraz na widoku wyboru poziomów, aby budować rozpoznawalność marki i orientację użytkownika.
- Nie używamy osobnej ikonki logo, dopóki nie powstanie dedykowany, czytelny znak graficzny. Obecny zasób jest szerokim logotypem.
- Logotyp jest lekko większy niż pozostałe elementy paska, w ciemnym, pełnym kolorze. Nie stosujemy na nim obniżonej przezroczystości.

### Pasek widoku „Wybierz poziom”

- Logo, przycisk **🏠 Menu** i wybór języka tworzą jeden poziomy pasek na górze widoku.
- Ich środki w pionie muszą znajdować się na jednej linii. Pasek budujemy ze wspólnego układu i wspólnych wartości pozycjonowania, a nie z niezależnie dobranych wartości `top`.
- Logo jest po lewej, przycisk Menu bezpośrednio za nim z czytelną przerwą, a wybór języka przy prawej krawędzi.
- Na szerokich ekranach każdy element ma taki sam odstęp od najbliższej krawędzi: `clamp(1rem, 3vw, 2rem)`. Na telefonie odstęp wynosi `0.75rem`.

### Odstępy od krawędzi

- Każdy widok ma zdefiniowany wspólny poziomy padding; elementy stałe nie mogą dotykać krawędzi ekranu ani mieć przypadkowo różnych marginesów.
- Na komputerze używamy responsywnej wartości `clamp(1rem, 3vw, 2rem)`, a na telefonie `0.75rem` lub większej, jeśli wymaga tego czytelność.
- Przed zmianą widoku należy sprawdzić wyrównanie górnego paska oraz równy odstęp elementów od obu bocznych krawędzi.

### Powrót do menu

- Powrót do Menu jest zawsze dostępny w lewym górnym rogu.
- Na widoku wyboru poziomów używamy przycisku **🏠 Menu**.
- W ustawieniach poziomu i podczas rozgrywki dopuszczalny jest wariant **← Menu**, ale prowadzi on do tego samego miejsca: głównego Menu.
- Ikona domu i podpis razem są standardem, ponieważ są czytelne zarówno dla dzieci, jak i dorosłych.

## Gra „Czytanie sylabowe”

Po otwarciu gry użytkownik widzi osiem wyraźnych kart poziomów. Każda karta ma numer, nazwę, ikonę, własny kolor oraz krótki cel.

| Poziom | Nazwa | Cel |
| --- | --- | --- |
| 1 | Literki | Rozpoznawanie i wpisywanie pojedynczych liter. |
| 2 | Wyrazy | Wpisywanie prostych wyrazów na podstawie obrazka. |
| 3 | Sylaby | Układanie wyrazów z sylab. |
| 4 | Litery pisane | Rozpoznawanie i wpisywanie liter pisanych. |
| 5 | Zdania | Układanie krótkich zdań we właściwej kolejności. |
| 7 | Emoji opowieści | Tworzenie własnych zdań z kart emoji i czytanie ich rodzicowi. |
| 8 | Słowa na literę | Wybór 3–15 liter, a potem 1–3 słów dla każdej z nich; akceptowane są wyłącznie słowa z gotowym podziałem sylabowym w słowniku wybranego języka, a znane obrazkowe słowa pokazują emoji. |
| 6 | Układam wyrazy | Układanie nazwy obrazka z liter, następnie wpisanie i odczytanie wyrazu. |

Poziomy wymagające wyboru liczby zadań pokazują przed rozgrywką prosty ekran ustawienia. Po zakończeniu ćwiczenia dziecko może przejść do kolejnego zadania albo wrócić do Menu.

## Dla rodziców

Sekcja **Dla rodziców** ma informować, nie przytłaczając tekstem. Zaczyna się od największego tekstu w sekcji — nagłówka **Jak wspierać dziecko na każdym poziomie?** Następnie pojawia się krótka wskazówka: „Najlepiej towarzyszyć dziecku przy pierwszych zabawach, chwalić próby i robić krótkie przerwy. 💛”, a pod nią akordeony. Nie powtarzamy wewnątrz sekcji etykiety „Dla rodziców”, ponieważ jest już widoczna w linku nawigacyjnym.

- Zawiera osiem domyślnie zamkniętych akordeonów — po jednym dla każdego poziomu.
- Nagłówek akordeonu zawiera numer i nazwę poziomu.
- Po rozwinięciu każdy akordeon pokazuje tylko trzy informacje:
  1. czego uczy poziom;
  2. co dziecko może umieć po zabawie;
  3. jedną praktyczną wskazówkę dla rodzica.
- Akordeony muszą mieć poprawne oznaczenie dostępności: przycisk nagłówka, stan rozwinięcia oraz możliwość obsługi klawiaturą.
- Pod akordeonami pozostają osobne, krótkie sekcje: **Gotowość dziecka** oraz **Źródła i ważna informacja**.
- Na telefonie akordeony układają się pionowo i nie wymagają przewijania w poziomie.

## O twórczyni

Sekcja **O twórczyni** jest osobną, krótką częścią menu głównego. Zawiera portret, nagłówek **O twórczyni** oraz zwięzłą historię powstania Syllabee. Nie używamy dodatkowego podpisu nad tytułem. Sekcja nie przenosi rozbudowanej treści do górnej części strony ani nie konkuruje z rozpoczęciem gry.

## Responsywność i kontrola jakości

Na telefonie, tablecie i komputerze należy zachować:

- czytelny nagłówek, logotyp i przycisk powrotu;
- wygodne pola klikalne dla dzieci;
- pionowy układ kart poziomów na małych ekranach;
- brak poziomego przewijania w sekcji akordeonów;
- widoczność podstawowej akcji bez konieczności czytania długiego tekstu.

Przed udostępnieniem zmian ręcznie sprawdzamy:

1. Menu główne i przejście do jedynej dostępnej gry.
2. Wszystkie osiem kart poziomów oraz ich cele.
3. Działanie przycisku **🏠 Menu** i wariantu **← Menu**.
4. Rozwijanie i zwijanie każdego z sześciu opisów dla rodziców.
5. Polski, angielski i niemiecki wariant tekstów.
6. Widok mobilny, w tym czytelność nagłówka, kart i akordeonów.

## Granice dokumentu

Ten dokument opisuje docelowy kierunek produktu i interfejsu aktualnej gry. Nie zastępuje technicznej instrukcji uruchamiania ani opisu danych w `README.md`.
