# Syllabee

Prosta webowa gra do nauki czytania metodą sylabową dla małych dzieci.

## Uruchomienie

Nie trzeba nic instalować. Otwórz plik `index.html` w nowoczesnej przeglądarce, np. Chrome, Safari lub Firefox.

1. W prawym górnym rogu wybierz język: polski, angielski albo niemiecki.
2. Wybierz jeden z pięciu poziomów.
3. W Level 1 i 4 wpisuj pojedyncze litery z fizycznej klawiatury.
4. W Level 2 wpisuj całe słowa, litera po literze.
5. W Level 3 klikaj sylaby w odpowiedniej kolejności, a w Level 5 układaj zdania.

Po poprawnie wpisanej literze gra odczytuje jej nazwę głosem ustawionym dla wybranego języka (`pl-PL`, `en-GB` albo `de-DE`) — bez pozytywnego tonu. W Level 2 po domknięciu sylaby odczytuje kolejno ostatnią literę i całą sylabę, a na końcu także całe słowo. Błędny klawisz nie pojawia się na ekranie i wywołuje krótkie, zabawne „tu-dum”. Pozostałe dźwięki zwrotne są tworzone w przeglądarce — bez plików audio. Ustawienie języka jest zapamiętywane w przeglądarce.

## Dodawanie słów

Zestawy dla każdego języka są na początku pliku `script.js`. Każdy wpis słowa zawiera słowo, podział na sylaby, emoji i warianty do wyboru. Emoji można później zastąpić obrazkami z `assets/images`.
