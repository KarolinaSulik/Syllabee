// Dane Level 1. Aby dodać ćwiczenie, dopisz kolejną literę.
const polishLetters = [
  { letter: "M", sound: "em" }, { letter: "A", sound: "a" },
  { letter: "T", sound: "te" }, { letter: "O", sound: "o" },
  { letter: "S", sound: "es" }, { letter: "K", sound: "ka" },
  { letter: "L", sound: "el" }, { letter: "D", sound: "de" },
  { letter: "Y", sound: "igrek" }, { letter: "R", sound: "er" },
  { letter: "W", sound: "wu" }, { letter: "E", sound: "e" }, { letter: "N", sound: "en" },
  { letter: "I", sound: "i" },
  { letter: "P", sound: "pe" }, { letter: "B", sound: "be" },
  { letter: "G", sound: "gie" }, { letter: "U", sound: "u" },
  { letter: "Z", sound: "zet" }, { letter: "F", sound: "ef" },
];

// Dane słów dla Level 2 i Level 3. Łatwo dodawać kolejne obiekty.
const polishWords = [
  { word: "MAMA", syllables: ["MA", "MA"], image: "👱🏻‍♀️", imageAlt: "blond mama z prostymi, rozpuszczonymi włosami", choices: ["MA", "TA", "SA"] },
  { word: "TATA", syllables: ["TA", "TA"], image: "🧔🏻‍♂️", imageAlt: "tata z brodą", choices: ["TA", "MA", "LA"] },
  { word: "OSA", syllables: ["O", "SA"], image: "🐝", imageAlt: "osa", choices: ["O", "SA", "MA"] },
  { word: "OKO", syllables: ["O", "KO"], image: "👁️", imageAlt: "oko", choices: ["O", "KO", "TO"] },
  { word: "LODY", syllables: ["LO", "DY"], image: "🍦🍦", imageAlt: "dwa lody", choices: ["LO", "DY", "MA"] },
  { word: "ROWER", syllables: ["RO", "WER"], image: "🚲", imageAlt: "rower", choices: ["RO", "WER", "LA"] },
  { word: "UCHO", syllables: ["U", "CHO"], image: "👂", imageAlt: "ucho", choices: ["U", "CHO", "MA"] },
  { word: "BUZIA", syllables: ["BU", "ZIA"], image: "🙂", imageAlt: "buzia", choices: ["BU", "ZIA", "TA"] },
  { word: "NOGA", syllables: ["NO", "GA"], image: "🦵", imageAlt: "noga", choices: ["NO", "GA", "MA"] },
  { word: "AUTO", syllables: ["AU", "TO"], image: "🚗", imageAlt: "auto", choices: ["AU", "TO", "RO"] },
  { word: "MOTOR", syllables: ["MO", "TOR"], image: "🏍️", imageAlt: "motor", choices: ["MO", "TOR", "LO"] },
  { word: "STATEK", syllables: ["STA", "TEK"], image: "🛳️", imageAlt: "pełny statek pasażerski", choices: ["STA", "TEK", "RA"] },
  { word: "RAKIETA", syllables: ["RA", "KIE", "TA"], image: "🚀", imageAlt: "rakieta", choices: ["RA", "KIE", "TA", "MA"] },
  { word: "UFO", syllables: ["U", "FO"], image: "🛸", imageAlt: "UFO", choices: ["U", "FO", "MA"] },
  { word: "ZIEMIA", syllables: ["ZIE", "MIA"], image: "🌍", imageAlt: "ziemia", choices: ["ZIE", "MIA", "MA"] },
  { word: "ROBOT", syllables: ["RO", "BOT"], image: "🤖", imageAlt: "robot", choices: ["RO", "BOT", "MA"] },
  { word: "TRAKTOR", syllables: ["TRAK", "TOR"], image: "🚜", imageAlt: "traktor", choices: ["TRAK", "TOR", "RO"] },
  { word: "SAMOLOT", syllables: ["SA", "MO", "LOT"], image: "✈️", imageAlt: "samolot", choices: ["SA", "MO", "LOT", "MA"] },
  { word: "PLANETA", syllables: ["PLA", "NE", "TA"], image: "🪐", imageAlt: "planeta", choices: ["PLA", "NE", "TA", "MA"] },
  { word: "KOSMOS", syllables: ["KOS", "MOS"], image: "🌌", imageAlt: "kosmos", choices: ["KOS", "MOS", "LO"] },
  { word: "KOMETA", syllables: ["KO", "ME", "TA"], image: "☄️", imageAlt: "kometa", choices: ["KO", "ME", "TA", "MA"] },
  { word: "WULKAN", syllables: ["WUL", "KAN"], image: "🌋", imageAlt: "wulkan", choices: ["WUL", "KAN", "LA"] },
  { word: "PIRAT", syllables: ["PI", "RAT"], image: "🏴‍☠️", imageAlt: "pirat", choices: ["PI", "RAT", "MA"] },
  { word: "TORNADO", syllables: ["TOR", "NA", "DO"], image: "🌪️", imageAlt: "tornado", choices: ["TOR", "NA", "DO", "MA"] },
  { word: "ZAMEK", syllables: ["ZA", "MEK"], image: "🏰", imageAlt: "zamek", choices: ["ZA", "MEK", "RA"] },
  { word: "SKUTER", syllables: ["SKU", "TER"], image: "🛵", imageAlt: "skuter", choices: ["SKU", "TER", "LO"] },
  { word: "KASK", syllables: ["KASK"], image: "⛑️", imageAlt: "kask", choices: [] },
  { word: "BALON", syllables: ["BA", "LON"], image: "🎈", imageAlt: "balon", choices: ["BA", "LON", "MA"] },
  { word: "FLAGA", syllables: ["FLA", "GA"], image: "🚩", imageAlt: "flaga", choices: ["FLA", "GA", "TA"] },
  { word: "ROBAK", syllables: ["RO", "BAK"], image: "🐛", imageAlt: "robak", choices: ["RO", "BAK", "MA"] },
  { word: "PTAK", syllables: ["PTAK"], image: "🐦", imageAlt: "ptak", choices: [] },
  { word: "KURA", syllables: ["KU", "RA"], image: "🐔", imageAlt: "kura", choices: ["KU", "RA", "MA"] },
  { word: "SMOK", syllables: ["SMOK"], image: "🐉", imageAlt: "smok", choices: [] },
  { word: "DINOZAUR", syllables: ["DI", "NO", "ZAUR"], image: "🦖", imageAlt: "dinozaur", choices: ["DI", "NO", "ZAUR", "MA"] },
  { word: "ZEBRA", syllables: ["ZE", "BRA"], image: "🦓", imageAlt: "zebra", choices: ["ZE", "BRA", "MA"] },
  { word: "FOKA", syllables: ["FO", "KA"], image: "🦭", imageAlt: "foka", choices: ["FO", "KA", "MA"] },
  { word: "LAMA", syllables: ["LA", "MA"], image: "🦙", imageAlt: "lama", choices: ["LA", "MA", "TA"] },
  { word: "PIES", syllables: ["PIES"], image: "🐶", imageAlt: "pies", choices: [] },
  { word: "LIS", syllables: ["LIS"], image: "🦊", imageAlt: "lis", choices: [] },
  { word: "RYBA", syllables: ["RY", "BA"], image: "🐟", imageAlt: "ryba", choices: ["RY", "BA", "MA"] },
  { word: "PINGWIN", syllables: ["PING", "WIN"], image: "🐧", imageAlt: "pingwin", choices: ["PING", "WIN", "MA"] },
  { word: "DELFIN", syllables: ["DEL", "FIN"], image: "🐬", imageAlt: "delfin", choices: ["DEL", "FIN", "MA"] },
  { word: "REKIN", syllables: ["RE", "KIN"], image: "🦈", imageAlt: "rekin", choices: ["RE", "KIN", "MA"] },
  { word: "KOŃ", syllables: ["KOŃ"], image: "🐴", imageAlt: "koń", choices: [] },
  { word: "KOT", syllables: ["KOT"], image: "🐱", imageAlt: "kot", choices: [] },
  { word: "LAS", syllables: ["LAS"], image: "🌲🌲🌲", imageAlt: "las z kilkoma drzewami", choices: [] },
  { word: "NOS", syllables: ["NOS"], image: "👃", imageAlt: "nos", choices: [] },
  { word: "DOM", syllables: ["DOM"], image: "🏠", imageAlt: "dom", choices: [] },
  { word: "WILK", syllables: ["WILK"], image: "🐺", imageAlt: "wilk", choices: [] },
];

// Krótkie zdania do Level 5. Każde ma maksymalnie trzy wyrazy.
const polishSentences = [
  { words: ["KOT", "ŚPI"], image: ["🐱", "💤"], imageAlt: "kot śpi" },
  { words: ["WILK", "BIEGNIE"], image: ["🐺", "🏃"], imageAlt: "wilk biegnie" },
  { words: ["MAMA", "MA", "LODY"], image: ["👩", "🍦🍦"], imageAlt: "mama ma dwa lody" },
  { words: ["TATA", "MYJE", "AUTO"], image: ["👨", "🚗🫧"], imageAlt: "tata myje auto" },
  { words: ["ROBOT", "MA", "KASK"], image: ["🤖", "⛑️"], imageAlt: "robot ma kask" },
  { words: ["PIRAT", "ZNAJDUJE", "SKARB"], image: ["🏴‍☠️", "💰"], imageAlt: "pirat znajduje skarb" },
  { words: ["RYBA", "PŁYWA"], image: ["🐟", "🌊"], imageAlt: "ryba pływa" },
  { words: ["ZEBRA", "MA", "NOGI"], image: ["🦓", "🦵🦵🦵🦵"], imageAlt: "zebra ma cztery nogi" },
  { words: ["PTAK", "MA", "SKRZYDŁA"], image: ["🐦", "🪽🪽"], imageAlt: "ptak ma dwa skrzydła" },
  { words: ["SMOK", "ZIEJE", "OGNIEM"], image: ["🐉", "🔥"], imageAlt: "smok zieje ogniem" },
  { words: ["KOT", "MA", "USZY"], image: ["🐱", "👂👂"], imageAlt: "kot ma dwa uszy" },
  { words: ["PIES", "BIEGNIE"], image: ["🐶", "🏃"], imageAlt: "pies biegnie" },
  { words: ["DRZEWO", "MA", "LISTKI"], image: ["🌳", "🍃🍃"], imageAlt: "drzewo ma listki" },
  { words: ["DOM", "MA", "DACH"], image: ["🏠", "🔺"], imageAlt: "dom ma dach" },
  { words: ["RAKIETA", "LECI"], image: ["🚀", "🌌"], imageAlt: "rakieta leci" },
  { words: ["ROBOT", "MA", "NOGI"], image: ["🤖", "🦵🦵"], imageAlt: "robot ma dwie nogi" },
  { words: ["STATEK", "PŁYNIE"], image: ["🚢", "🌊"], imageAlt: "statek płynie" },
  { words: ["KURA", "ZNOSI", "JAJA"], image: ["🐔", "🥚🥚"], imageAlt: "kura znosi jajka" },
  { words: ["FOKA", "MA", "PŁETWY"], image: ["🦭", "🌊"], imageAlt: "foka ma płetwy" },
  { words: ["DZIECKO", "CZYTA", "KSIĄŻKĘ"], image: ["🧒", "📖"], imageAlt: "dziecko czyta książkę" },
  { words: ["ŻABA", "SKACZE"], image: ["🐸", "⬆️"], imageAlt: "żaba skacze" },
  { words: ["KACZKA", "PŁYWA"], image: ["🦆", "🌊"], imageAlt: "kaczka pływa" },
  { words: ["KOŃ", "BIEGNIE"], image: ["🐴", "🏃"], imageAlt: "koń biegnie" },
  { words: ["KRÓLIK", "JE", "MARCHEWKĘ"], image: ["🐰", "🥕"], imageAlt: "królik je marchewkę" },
  { words: ["MAŁPA", "JE", "BANANA"], image: ["🐒", "🍌"], imageAlt: "małpa je banana" },
  { words: ["MYSZ", "JE", "SER"], image: ["🐭", "🧀"], imageAlt: "mysz je ser" },
  { words: ["KOT", "GONI", "MYSZ"], image: ["🐱", "🐭"], imageAlt: "kot goni mysz" },
  { words: ["KROWA", "JE", "TRAWĘ"], image: ["🐄", "🌿"], imageAlt: "krowa je trawę" },
  { words: ["OWCA", "MA", "WEŁNĘ"], image: ["🐑", "🧶"], imageAlt: "owca ma wełnę" },
  { words: ["SŁOŃ", "PIJE", "WODĘ"], image: ["🐘", "💧"], imageAlt: "słoń pije wodę" },
  { words: ["MOTYL", "LATA"], image: ["🦋", "🌸"], imageAlt: "motyl lata" },
  { words: ["BIEDRONKA", "MA", "KROPKI"], image: ["🐞", "⚫⚫"], imageAlt: "biedronka ma kropki" },
  { words: ["ŚLIMAK", "MA", "MUSZLĘ"], image: ["🐌", "🐚"], imageAlt: "ślimak ma muszlę" },
  { words: ["ŻÓŁW", "IDZIE"], image: ["🐢", "➡️"], imageAlt: "żółw idzie" },
  { words: ["DELFIN", "SKACZE"], image: ["🐬", "⬆️"], imageAlt: "delfin skacze" },
  { words: ["WIELORYB", "PŁYWA"], image: ["🐳", "🌊"], imageAlt: "wieloryb pływa" },
  { words: ["SAMOLOT", "LECI"], image: ["✈️", "☁️"], imageAlt: "samolot leci" },
  { words: ["TRAKTOR", "JEDZIE"], image: ["🚜", "🌾"], imageAlt: "traktor jedzie" },
  { words: ["POCIĄG", "JEDZIE"], image: ["🚆", "🛤️"], imageAlt: "pociąg jedzie" },
  { words: ["ROWER", "MA", "KOŁA"], image: ["🚲", "⚫⚫"], imageAlt: "rower ma dwa koła" },
  { words: ["DOM", "MA", "OKNA"], image: ["🏠", "🪟🪟"], imageAlt: "dom ma okna" },
  { words: ["KWIAT", "MA", "PŁATKI"], image: ["🌼", "🌸"], imageAlt: "kwiat ma płatki" },
  { words: ["DZIECKO", "RYSUJE", "SŁOŃCE"], image: ["🧒", "☀️"], imageAlt: "dziecko rysuje słońce" },
  { words: ["MAMA", "CZYTA", "BAJKĘ"], image: ["👩", "📖"], imageAlt: "mama czyta bajkę" },
  { words: ["TATA", "GOTUJE", "ZUPĘ"], image: ["👨", "🍲"], imageAlt: "tata gotuje zupę" },
  { words: ["DZIECI", "BAWIĄ", "SIĘ"], image: ["🧒🧒", "🧸"], imageAlt: "dzieci bawią się" },
  { words: ["KOTY", "ŚPIĄ"], image: ["🐱🐱", "💤"], imageAlt: "koty śpią" },
  { words: ["PTAKI", "LATAJĄ"], image: ["🐦🐦", "☁️"], imageAlt: "ptaki latają" },
  { words: ["PSZCZOŁY", "ROBIĄ", "MIÓD"], image: ["🐝🐝", "🍯"], imageAlt: "pszczoły robią miód" },
  { words: ["KURY", "ZNOSZĄ", "JAJA"], image: ["🐔🐔", "🥚🥚"], imageAlt: "kury znoszą jajka" },
  { words: ["DRZEWA", "MAJĄ", "LIŚCIE"], image: ["🌳🌳", "🍃🍃"], imageAlt: "drzewa mają liście" },
  { words: ["DZIECI", "CZYTAJĄ", "KSIĄŻKI"], image: ["🧒🧒", "📚"], imageAlt: "dzieci czytają książki" },
];

const createWords = (entries) => entries.map(([word, syllables, image, imageAlt, distractor]) => ({
  word,
  syllables,
  image,
  imageAlt,
  choices: [...new Set([...syllables, distractor])],
}));

const englishLetters = [
  ["A", "ay"], ["B", "bee"], ["C", "see"], ["D", "dee"], ["E", "ee"],
  ["F", "ef"], ["G", "gee"], ["H", "aitch"], ["I", "eye"], ["J", "jay"],
  ["K", "kay"], ["L", "el"], ["M", "em"], ["N", "en"], ["O", "oh"],
  ["P", "pee"], ["Q", "cue"], ["R", "ar"], ["S", "ess"], ["T", "tee"],
].map(([letter, sound]) => ({ letter, sound }));

const englishWords = createWords([
  ["MUMMY", ["MUM", "MY"], "👩", "mummy", "PA"],
  ["DADDY", ["DAD", "DY"], "👨", "daddy", "MA"],
  ["ROBOT", ["RO", "BOT"], "🤖", "robot", "TA"],
  ["TIGER", ["TI", "GER"], "🐯", "tiger", "RO"],
  ["RABBIT", ["RAB", "BIT"], "🐰", "rabbit", "MA"],
  ["BANANA", ["BA", "NA", "NA"], "🍌", "banana", "TO"],
  ["TOMATO", ["TO", "MA", "TO"], "🍅", "tomato", "RA"],
  ["ELEPHANT", ["EL", "E", "PHANT"], "🐘", "elephant", "BA"],
  ["BUTTERFLY", ["BUT", "TER", "FLY"], "🦋", "butterfly", "MA"],
  ["MONKEY", ["MON", "KEY"], "🐒", "monkey", "TA"],
  ["PENGUIN", ["PEN", "GUIN"], "🐧", "penguin", "MA"],
  ["DOLPHIN", ["DOL", "PHIN"], "🐬", "dolphin", "RA"],
  ["CARROT", ["CAR", "ROT"], "🥕", "carrot", "MA"],
  ["WINDOW", ["WIN", "DOW"], "🪟", "window", "TA"],
  ["FLOWER", ["FLOW", "ER"], "🌸", "flower", "MA"],
  ["PIZZA", ["PIZ", "ZA"], "🍕", "pizza", "TO"],
  ["ROCKET", ["ROCK", "ET"], "🚀", "rocket", "MA"],
  ["PLANET", ["PLAN", "ET"], "🪐", "planet", "RO"],
  ["PIRATE", ["PI", "RATE"], "🏴‍☠️", "pirate", "MA"],
  ["TRACTOR", ["TRAC", "TOR"], "🚜", "tractor", "BA"],
  ["SCOOTER", ["SCOOT", "ER"], "🛴", "scooter", "MA"],
  ["RAINBOW", ["RAIN", "BOW"], "🌈", "rainbow", "TA"],
  ["TURTLE", ["TUR", "TLE"], "🐢", "turtle", "MA"],
  ["LADYBUG", ["LA", "DY", "BUG"], "🐞", "ladybug", "TO"],
]);

const englishSentences = [
  { words: ["CAT", "SLEEPS"], image: "🐱💤", imageAlt: "a sleeping cat" },
  { words: ["DOG", "SLEEPS"], image: "🐶💤", imageAlt: "a sleeping dog" },
  { words: ["MUMMY", "HAS", "CAKE"], image: "👩🍰", imageAlt: "mummy with cake" },
  { words: ["DADDY", "HAS", "CAR"], image: "👨🚗", imageAlt: "daddy with a car" },
  { words: ["ROBOT", "HAS", "HELMET"], image: "🤖⛑️", imageAlt: "robot with a helmet" },
  { words: ["PIRATE", "HAS", "TREASURE"], image: "🏴‍☠️💰", imageAlt: "pirate with treasure" },
];

const germanLetters = [
  ["A", "a"], ["B", "be"], ["C", "tse"], ["D", "de"], ["E", "e"],
  ["F", "ef"], ["G", "ge"], ["H", "ha"], ["I", "i"], ["J", "jot"],
  ["K", "ka"], ["L", "el"], ["M", "em"], ["N", "en"], ["O", "o"],
  ["P", "pe"], ["Q", "ku"], ["R", "er"], ["S", "es"], ["T", "te"],
].map(([letter, sound]) => ({ letter, sound }));

const germanWords = createWords([
  ["MAMA", ["MA", "MA"], "👩", "Mama", "PA"],
  ["PAPA", ["PA", "PA"], "👨", "Papa", "MA"],
  ["OMA", ["O", "MA"], "👵", "Oma", "PA"],
  ["AUTO", ["AU", "TO"], "🚗", "Auto", "MA"],
  ["ROBOT", ["RO", "BOT"], "🤖", "Roboter", "MA"],
  ["TIGER", ["TI", "GER"], "🐯", "Tiger", "RO"],
  ["HASE", ["HA", "SE"], "🐰", "Hase", "MA"],
  ["BANANE", ["BA", "NA", "NE"], "🍌", "Banane", "TO"],
  ["TOMATE", ["TO", "MA", "TE"], "🍅", "Tomate", "RA"],
  ["ELEFANT", ["E", "LE", "FANT"], "🐘", "Elefant", "BA"],
  ["SCHMETTERLING", ["SCHMET", "TER", "LING"], "🦋", "Schmetterling", "MA"],
  ["AFFE", ["AF", "FE"], "🐒", "Affe", "TA"],
  ["PINGUIN", ["PIN", "GU", "IN"], "🐧", "Pinguin", "MA"],
  ["DELFIN", ["DEL", "FIN"], "🐬", "Delfin", "RA"],
  ["KAROTTE", ["KA", "ROT", "TE"], "🥕", "Karotte", "MA"],
  ["FENSTER", ["FENS", "TER"], "🪟", "Fenster", "MA"],
  ["BLUME", ["BLU", "ME"], "🌸", "Blume", "TA"],
  ["PIZZA", ["PIZ", "ZA"], "🍕", "Pizza", "TO"],
  ["RAKETE", ["RA", "KE", "TE"], "🚀", "Rakete", "MA"],
  ["PLANET", ["PLA", "NET"], "🪐", "Planet", "RO"],
  ["PIRAT", ["PI", "RAT"], "🏴‍☠️", "Pirat", "MA"],
  ["TRAKTOR", ["TRAK", "TOR"], "🚜", "Traktor", "BA"],
  ["ROLLER", ["ROL", "LER"], "🛴", "Roller", "MA"],
  ["REGENBOGEN", ["RE", "GEN", "BO", "GEN"], "🌈", "Regenbogen", "TA"],
]);

const germanSentences = [
  { words: ["DIE", "KATZE", "SCHLÄFT"], image: "🐱💤", imageAlt: "eine schlafende Katze" },
  { words: ["DER", "HUND", "SCHLÄFT"], image: "🐶💤", imageAlt: "ein schlafender Hund" },
  { words: ["MAMA", "HAT", "EIS"], image: "👩🍦", imageAlt: "Mama mit Eis" },
  { words: ["PAPA", "FÄHRT", "AUTO"], image: "👨🚗", imageAlt: "Papa fährt Auto" },
  { words: ["DER", "ROBOTER", "WINKT"], image: "🤖👋", imageAlt: "Roboter winkt" },
  { words: ["DER", "PIRAT", "LACHT"], image: "🏴‍☠️😄", imageAlt: "Pirat lacht" },
];

const languageData = {
  pl: {
    flag: "🇵🇱", levelName: "Poziom", locale: "pl-PL", voicePrefix: "pl", letters: polishLetters, words: polishWords, sentences: polishSentences,
    ui: { language: "Język", menuTitle: "Wybierz poziom", levels: ["Literki", "Wyrazy", "Sylaby", "Litery pisane", "Zdania"], wordCountTitle: "Ile słów?", wordCountDescription: "Wybierz liczbę słów do przećwiczenia.", wordCountAria: "Liczba słów w Level 2", syllableCountTitle: "Ile wyrazów chcesz trenować?", syllableCountDescription: "Wybierz liczbę wyrazów do ułożenia z sylab.", syllableCountAria: "Liczba wyrazów w Level 3", sentenceCountTitle: "Ile zdań chcesz trenować?", sentenceCountDescription: "Wybierz liczbę zdań do ułożenia.", sentenceCountAria: "Liczba zdań w Level 5", letterCountDescription: "Wybierz liczbę liter do przećwiczenia.", letterCountAria: "Liczba liter do przećwiczenia", letterCountTitle: "Ile liter?", writtenLetterCountTitle: "Ile liter pisanych?", menu: "Menu", complete: "Brawo! 🥳👍", backToMenu: "Wróć do menu", emptyLetter: "Pusta litera", progress: ["Postęp w Level 1", "Postęp w Level 2", "Postęp w Level 3", "Postęp w Level 4", "Postęp w Level 5"] },
  },
  en: {
    flag: "🇬🇧", levelName: "Level", locale: "en-GB", voicePrefix: "en", letters: englishLetters, words: englishWords, sentences: englishSentences,
    ui: { language: "Language", menuTitle: "Choose a level", levels: ["Letters", "Words", "Syllables", "Handwriting", "Sentences"], wordCountTitle: "How many words?", wordCountDescription: "Choose how many words to practise.", wordCountAria: "Number of words in Level 2", syllableCountTitle: "How many words?", syllableCountDescription: "Choose how many words to build from syllables.", syllableCountAria: "Number of words in Level 3", sentenceCountTitle: "How many sentences?", sentenceCountDescription: "Choose how many sentences to build.", sentenceCountAria: "Number of sentences in Level 5", letterCountDescription: "Choose how many letters to practise.", letterCountAria: "Number of letters to practise", letterCountTitle: "How many letters?", writtenLetterCountTitle: "How many handwritten letters?", menu: "Menu", complete: "Great job! 🥳👍", backToMenu: "Back to menu", emptyLetter: "Empty letter", progress: ["Level 1 progress", "Level 2 progress", "Level 3 progress", "Level 4 progress", "Level 5 progress"] },
  },
  de: {
    flag: "🇩🇪", levelName: "Stufe", locale: "de-DE", voicePrefix: "de", letters: germanLetters, words: germanWords, sentences: germanSentences,
    ui: { language: "Sprache", menuTitle: "Wähle ein Level", levels: ["Buchstaben", "Wörter", "Silben", "Schreibschrift", "Sätze"], wordCountTitle: "Wie viele Wörter?", wordCountDescription: "Wähle die Anzahl der Wörter zum Üben.", wordCountAria: "Anzahl der Wörter in Level 2", syllableCountTitle: "Wie viele Wörter?", syllableCountDescription: "Wähle die Anzahl der Wörter, die du aus Silben zusammensetzt.", syllableCountAria: "Anzahl der Wörter in Level 3", sentenceCountTitle: "Wie viele Sätze?", sentenceCountDescription: "Wähle die Anzahl der Sätze zum Üben.", sentenceCountAria: "Anzahl der Sätze in Level 5", letterCountDescription: "Wähle die Anzahl der Buchstaben zum Üben.", letterCountAria: "Anzahl der Buchstaben zum Üben", letterCountTitle: "Wie viele Buchstaben?", writtenLetterCountTitle: "Wie viele Schreibschrift-Buchstaben?", menu: "Menü", complete: "Super gemacht! 🥳👍", backToMenu: "Zurück zum Menü", emptyLetter: "Leerer Buchstabe", progress: ["Fortschritt in Level 1", "Fortschritt in Level 2", "Fortschritt in Level 3", "Fortschritt in Level 4", "Fortschritt in Level 5"] },
  },
};

const screens = {
  gameLibrary: document.querySelector("#game-library-screen"),
  menu: document.querySelector("#menu-screen"),
  levelTwoSetup: document.querySelector("#level-two-setup-screen"),
  levelThreeSetup: document.querySelector("#level-three-setup-screen"),
  levelFiveSetup: document.querySelector("#level-five-setup-screen"),
  letterSetup: document.querySelector("#letter-setup-screen"),
  levelOne: document.querySelector("#level-one-screen"),
  levelTwo: document.querySelector("#level-two-screen"),
  levelThree: document.querySelector("#level-three-screen"),
  levelFour: document.querySelector("#level-four-screen"),
  levelFive: document.querySelector("#level-five-screen"),
  complete: document.querySelector("#complete-screen"),
};

const ui = {
  languageSelect: document.querySelector("#language-select"),
  menuTitle: document.querySelector("#menu-title"),
  levelTitles: ["one", "two", "three", "four", "five"].map((level) => document.querySelector(`#level-${level}-title`)),
  levelLabels: [1, 2, 3, 4, 5].map((level) => document.querySelector(`#level-${["one", "two", "three", "four", "five"][level - 1]}-label`)),
  levelTwoSetupTitle: document.querySelector("#level-two-setup-title"),
  levelTwoSetupDescription: document.querySelector("#level-two-setup-description"),
  levelTwoCountOptions: document.querySelector("#level-two-count-options"),
  levelThreeSetupTitle: document.querySelector("#level-three-setup-title"),
  levelThreeSetupDescription: document.querySelector("#level-three-setup-description"),
  levelThreeCountOptions: document.querySelector("#level-three-count-options"),
  levelFiveSetupTitle: document.querySelector("#level-five-setup-title"),
  levelFiveSetupDescription: document.querySelector("#level-five-setup-description"),
  levelFiveCountOptions: document.querySelector("#level-five-count-options"),
  letterCountOptions: document.querySelector("#letter-count-options"),
  completeTitle: document.querySelector("#complete-title"),
  completeMenuButton: document.querySelector("#complete-menu-button"),
  singleLetter: document.querySelector("#single-letter"),
  levelOneProgress: document.querySelector("#level-one-progress"),
  levelTwoImage: document.querySelector("#level-two-image"),
  levelTwoProgress: document.querySelector("#level-two-progress"),
  letterSlots: document.querySelector("#letter-slots"),
  levelThreeImage: document.querySelector("#level-three-image"),
  levelThreeProgress: document.querySelector("#level-three-progress"),
  builtWord: document.querySelector("#built-word"),
  syllableChoices: document.querySelector("#syllable-choices"),
  levelThreeHint: document.querySelector("#level-three-hint"),
  writtenLetter: document.querySelector("#written-letter"),
  levelFourProgress: document.querySelector("#level-four-progress"),
  letterSetupIcon: document.querySelector("#letter-setup-icon"),
  letterSetupTitle: document.querySelector("#letter-setup-title"),
  letterSetupDescription: document.querySelector("#letter-setup-description"),
  levelFiveImage: document.querySelector("#level-five-image"),
  levelFiveProgress: document.querySelector("#level-five-progress"),
  builtSentence: document.querySelector("#built-sentence"),
  sentenceChoices: document.querySelector("#sentence-choices"),
};

let activeLevel = null;
let taskIndex = 0;
let levelTwoWords = [];
let levelThreeWords = [];
let levelOneLetters = [];
let levelFourLetters = [];
let levelFiveSentences = [];
let letterSetupLevel = null;
let inputIndex = 0;
let builtSyllables = [];
let builtSentenceWords = [];
let acceptsKeyboard = false;
let audioContext;
let levelThreeAdvanceTimer;
let currentLanguage = (() => {
  try {
    return languageData[window.localStorage.getItem("syllabee-language")] ? window.localStorage.getItem("syllabee-language") : "pl";
  } catch {
    return "pl";
  }
})();

function currentData() {
  return languageData[currentLanguage];
}

function translateInterface() {
  const { ui: text, locale, levelName } = currentData();
  document.documentElement.lang = currentLanguage;
  ui.languageSelect.value = currentLanguage;
  ui.languageSelect.setAttribute("aria-label", text.language);
  ui.menuTitle.textContent = text.menuTitle;
  ui.levelTitles.forEach((title, index) => { title.textContent = `${levelName} ${index + 1}`; });
  ui.levelLabels.forEach((label, index) => { label.textContent = text.levels[index]; });
  ui.levelTwoSetupTitle.textContent = text.wordCountTitle;
  ui.levelTwoSetupDescription.textContent = text.wordCountDescription;
  ui.levelTwoCountOptions.setAttribute("aria-label", text.wordCountAria);
  ui.levelThreeSetupTitle.textContent = text.syllableCountTitle;
  ui.levelThreeSetupDescription.textContent = text.syllableCountDescription;
  ui.levelThreeCountOptions.setAttribute("aria-label", text.syllableCountAria);
  ui.levelFiveSetupTitle.textContent = text.sentenceCountTitle;
  ui.levelFiveSetupDescription.textContent = text.sentenceCountDescription;
  ui.levelFiveCountOptions.setAttribute("aria-label", text.sentenceCountAria);
  ui.letterCountOptions.setAttribute("aria-label", text.letterCountAria);
  ui.completeTitle.textContent = text.complete;
  ui.completeMenuButton.textContent = text.backToMenu;
  document.querySelectorAll(".menu-button-text").forEach((element) => { element.textContent = text.menu; });
  [ui.levelOneProgress, ui.levelTwoProgress, ui.levelThreeProgress, ui.levelFourProgress, ui.levelFiveProgress]
    .forEach((element, index) => element.setAttribute("aria-label", text.progress[index]));
  document.title = `Syllabee — ${locale}`;
}

function saveLanguage() {
  try {
    window.localStorage.setItem("syllabee-language", currentLanguage);
  } catch {
    // Aplikacja działa również, gdy przeglądarka blokuje zapis ustawień.
  }
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.add("is-hidden"));
  screens[name].classList.remove("is-hidden");
}

function updateGameUrl(game) {
  const url = new URL(window.location.href);
  if (game) url.searchParams.set("gra", game);
  else url.searchParams.delete("gra");
  window.history.pushState({}, "", url);
}

function openReadingGame({ updateUrl = true } = {}) {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  window.speechSynthesis?.cancel();
  activeLevel = null;
  acceptsKeyboard = false;
  if (updateUrl) updateGameUrl("czytanie");
  document.title = "Syllabee — Czytanie sylabowe";
  showScreen("menu");
}

function goToLibrary({ updateUrl = true } = {}) {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  window.speechSynthesis?.cancel();
  activeLevel = null;
  letterSetupLevel = null;
  acceptsKeyboard = false;
  if (updateUrl) updateGameUrl();
  document.title = "Syllabee — literki i sylaby";
  showScreen("gameLibrary");
}

function goToMenu() {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  window.speechSynthesis?.cancel();
  activeLevel = null;
  letterSetupLevel = null;
  acceptsKeyboard = false;
  showScreen("menu");
}

function updateProgress(element, current, total) {
  element.style.setProperty("--segments", total);
  element.setAttribute("aria-valuemin", "1");
  element.setAttribute("aria-valuemax", String(total));
  element.setAttribute("aria-valuenow", String(current + 1));
  element.replaceChildren(...Array.from({ length: total }, (_, index) => {
    const segment = document.createElement("span");
    segment.className = "progress-segment";
    if (index <= current) segment.classList.add("is-active");
    return segment;
  }));
}

// Krótkie dźwięki zwrotne tworzone w przeglądarce — bez dodatkowych plików audio.
// Pozytywny ton pozostaje przy klikanych poziomach; przy wpisywaniu liter
// zastępuje go głos odczytujący literę.
function playFeedback(type) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  audioContext ||= new AudioContextClass();
  if (audioContext.state === "suspended") audioContext.resume();

  const now = audioContext.currentTime;

  if (type === "error") {
    // Krótkie, opadające "tu-dum" — wyraźne, ale nie nieprzyjemne dla dziecka.
    [[220, 150], [145, 75]].forEach(([from, to], index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = now + index * 0.12;
      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(from, start);
      oscillator.frequency.exponentialRampToValueAtTime(to, start + 0.2);
      gain.gain.setValueAtTime(0.075, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.22);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.23);
    });
    return;
  }

  [660, 880].forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.05, now + index * 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.1 + 0.13);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now + index * 0.1);
    oscillator.stop(now + index * 0.1 + 0.14);
  });
}

// Pięć krótkich, syntetycznych klaśnięć na zakończenie poziomu — bez plików audio.
function playApplause() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  audioContext ||= new AudioContextClass();
  if (audioContext.state === "suspended") audioContext.resume();

  const now = audioContext.currentTime;
  [0, 0.38, 0.76, 1.14, 1.52].forEach((offset) => {
    const length = Math.floor(audioContext.sampleRate * 0.12);
    const buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
    const samples = buffer.getChannelData(0);
    samples.forEach((_, index) => {
      const fade = 1 - index / length;
      samples[index] = (Math.random() * 2 - 1) * fade * fade;
    });

    const source = audioContext.createBufferSource();
    const filter = audioContext.createBiquadFilter();
    const gain = audioContext.createGain();
    source.buffer = buffer;
    filter.type = "bandpass";
    filter.frequency.value = 1500;
    filter.Q.value = 0.7;
    gain.gain.setValueAtTime(0.16, now + offset);
    gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.12);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);
    source.start(now + offset);
  });
}

// Wymowa zawsze używa języka wybranego w menu. Jeśli system nie ma głosu dla
// tego języka, przeglądarka nadal dostaje właściwy kod locale jako wskazówkę.
function createSpeech(text) {
  const { locale, voicePrefix } = currentData();
  const voices = window.speechSynthesis.getVoices().filter((voice) =>
    voice.lang.toLocaleLowerCase().startsWith(voicePrefix),
  );
  const voice = voices.find((item) => item.lang.replace("_", "-").toLowerCase() === locale.toLowerCase()) || voices[0];
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = locale;
  if (voice) speech.voice = voice;
  speech.rate = 0.8;
  return speech;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return false;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(createSpeech(text));
  return true;
}

// Level 1 i Level 4 odczytują nazwę wpisanej litery w wybranym języku.
function speakLetter(letterName) {
  speak(letterName);
}

function queueSpeech(text, onend) {
  if (!("speechSynthesis" in window)) return false;
  const speech = createSpeech(text);
  if (onend) {
    speech.addEventListener("end", onend, { once: true });
    speech.addEventListener("error", onend, { once: true });
  }
  window.speechSynthesis.speak(speech);
  return true;
}

function letterSound(letter) {
  const letterData = currentData().letters.find((item) => item.letter === letter);
  return letterData?.sound || letter.toLocaleLowerCase(currentData().locale);
}

function completedSyllable(syllables, filledLetters) {
  let endIndex = 0;
  return syllables.find((syllable) => {
    endIndex += [...syllable].length;
    return endIndex === filledLetters;
  });
}

// Level 2 kolejkuje głos: zawsze litera, a na końcu sylaby także cała sylaba.
function speakTypedLetter(letter, syllable) {
  queueSpeech(letterSound(letter));
  if (syllable) queueSpeech(syllable.toLocaleLowerCase(currentData().locale));
}

function speakWord(word) {
  speak(word.toLocaleLowerCase(currentData().locale));
}

function syllableClass(index, count) {
  if (count === 1) return "single-syllable";
  return index === 0 ? "syllable-one" : "syllable-two";
}

function setPicture(element, item) {
  // Zamiast emoji można potem dodać tutaj <img src="assets/images/...">.
  element.textContent = item.image;
  element.setAttribute("aria-label", item.imageAlt);
}

function setSentencePicture(item) {
  const element = ui.levelFiveImage;
  if (!Array.isArray(item.image)) {
    element.classList.remove("sentence-picture");
    setPicture(element, item);
    return;
  }

  element.classList.add("sentence-picture");
  element.setAttribute("aria-label", item.imageAlt);
  const [firstEmoji, lastEmoji] = item.image;
  const firstPicture = document.createElement("span");
  firstPicture.className = "sentence-prompt-emoji";
  firstPicture.textContent = firstEmoji;
  const middleWord = document.createElement("span");
  middleWord.className = "sentence-prompt-word";
  middleWord.textContent = item.words[1];
  const lastPicture = document.createElement("span");
  lastPicture.className = "sentence-prompt-emoji";
  lastPicture.textContent = lastEmoji;
  element.replaceChildren(firstPicture, middleWord, lastPicture);
}

// Każda sesja Level 2 ma własną, losowo ułożoną pulę słów. Dzięki temu
// ćwiczenie nie zaczyna się za każdym razem od tych samych wyrazów.
function shuffled(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function openLevelTwoSetup() {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  activeLevel = null;
  acceptsKeyboard = false;
  showScreen("levelTwoSetup");
}

function openLevelThreeSetup() {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  activeLevel = null;
  acceptsKeyboard = false;
  showScreen("levelThreeSetup");
}

function openLevelFiveSetup() {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  activeLevel = null;
  acceptsKeyboard = false;
  showScreen("levelFiveSetup");
}

function openLetterSetup(level) {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  activeLevel = null;
  acceptsKeyboard = false;
  letterSetupLevel = level;
  screens.letterSetup.dataset.level = String(level);
  ui.letterSetupIcon.textContent = level === 1 ? "🅰️" : "✍️";
  ui.letterSetupTitle.textContent = level === 1 ? currentData().ui.letterCountTitle : currentData().ui.writtenLetterCountTitle;
  ui.letterSetupDescription.textContent = currentData().ui.letterCountDescription;
  showScreen("letterSetup");
}

function startLevel(level, wordCount) {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  window.speechSynthesis?.cancel();
  activeLevel = level;
  taskIndex = 0;
  const data = currentData();
  if (level === 1) {
    levelOneLetters = shuffled(data.letters).slice(0, Math.min(wordCount ?? data.letters.length, data.letters.length));
    showScreen("levelOne");
    renderLetters();
  }
  if (level === 2) {
    levelTwoWords = shuffled(data.words).slice(0, Math.min(wordCount, data.words.length));
    showScreen("levelTwo");
    renderWords();
  }
  if (level === 3) {
    const syllableWords = data.words.filter((word) => word.syllables.length >= 2);
    levelThreeWords = shuffled(syllableWords).slice(0, Math.min(wordCount, syllableWords.length));
    showScreen("levelThree");
    renderSyllables();
  }
  if (level === 4) {
    levelFourLetters = shuffled(data.letters).slice(0, Math.min(wordCount ?? data.letters.length, data.letters.length));
    showScreen("levelFour");
    renderWrittenLetters();
  }
  if (level === 5) {
    levelFiveSentences = shuffled(data.sentences).slice(0, Math.min(wordCount ?? data.sentences.length, data.sentences.length));
    showScreen("levelFive");
    renderSentences();
  }
}

// LEVEL 1: wpisywanie pojedynczych liter.
function renderLetters() {
  const item = levelOneLetters[taskIndex];
  acceptsKeyboard = true;
  updateProgress(ui.levelOneProgress, taskIndex, levelOneLetters.length);
  ui.singleLetter.textContent = item.letter;
  ui.singleLetter.classList.remove("is-correct");
}

// LEVEL 4: rozpoznawanie małych liter zapisanych odręcznie.
function renderWrittenLetters() {
  const item = levelFourLetters[taskIndex];
  acceptsKeyboard = true;
  updateProgress(ui.levelFourProgress, taskIndex, levelFourLetters.length);
  ui.writtenLetter.textContent = item.letter.toLocaleLowerCase(currentData().locale);
  ui.writtenLetter.classList.remove("is-correct");
}

// LEVEL 2: wpisywanie całych słów, litera po literze.
function renderWords() {
  const item = levelTwoWords[taskIndex];
  inputIndex = 0;
  acceptsKeyboard = true;
  setPicture(ui.levelTwoImage, item);
  updateProgress(ui.levelTwoProgress, taskIndex, levelTwoWords.length);
  ui.letterSlots.replaceChildren();

  item.syllables.forEach((syllable, syllableIndex) => {
    const group = document.createElement("div");
    group.className = "syllable-slots";
    const colorClass = syllableClass(syllableIndex, item.syllables.length);
    [...syllable].forEach((letter) => {
      const slot = document.createElement("span");
      slot.className = `letter-slot ${colorClass}`;
      slot.dataset.letter = letter;
      slot.setAttribute("aria-label", currentData().ui.emptyLetter);
      group.append(slot);
    });
    ui.letterSlots.append(group);
  });
  ui.letterSlots.querySelector(".letter-slot")?.classList.add("is-current");
}

function handleKeyboard(event) {
  if (!acceptsKeyboard || event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return;
  const typed = event.key.toLocaleUpperCase(currentData().locale);

  if (activeLevel === 1) {
    const item = levelOneLetters[taskIndex];
    if (typed === item.letter) {
      speakLetter(item.sound);
      acceptsKeyboard = false;
      ui.singleLetter.classList.add("is-correct");
      levelThreeAdvanceTimer = window.setTimeout(() => {
        levelThreeAdvanceTimer = undefined;
        nextTask();
      }, 650);
    } else {
      playFeedback("error");
    }
  }

  if (activeLevel === 4) {
    const item = levelFourLetters[taskIndex];
    if (typed === item.letter) {
      speakLetter(item.sound);
      acceptsKeyboard = false;
      ui.writtenLetter.classList.add("is-correct");
      levelThreeAdvanceTimer = window.setTimeout(() => {
        levelThreeAdvanceTimer = undefined;
        nextTask();
      }, 650);
    } else {
      playFeedback("error");
    }
  }

  if (activeLevel === 2) {
    const slots = [...ui.letterSlots.querySelectorAll(".letter-slot")];
    const currentSlot = slots[inputIndex];
    if (typed === currentSlot.dataset.letter) {
      currentSlot.textContent = typed;
      currentSlot.classList.remove("is-current");
      inputIndex += 1;
      const item = levelTwoWords[taskIndex];
      speakTypedLetter(typed, completedSyllable(item.syllables, inputIndex));
      if (inputIndex === slots.length) {
        acceptsKeyboard = false;
        // Po ostatniej sylabie dziecko słyszy jeszcze całe poprawnie złożone słowo.
        let hasAdvanced = false;
        const advance = () => {
          if (hasAdvanced || activeLevel !== 2) return;
          hasAdvanced = true;
          levelThreeAdvanceTimer = undefined;
          nextTask();
        };
        if (!queueSpeech(item.word.toLocaleLowerCase(currentData().locale), advance)) {
          levelThreeAdvanceTimer = window.setTimeout(advance, 1300);
        }
      } else {
        slots[inputIndex].classList.add("is-current");
      }
    } else {
      playFeedback("error");
    }
  }
}

// LEVEL 3: kliknięcie oczekiwanej sylaby buduje słowo.
function renderSyllables() {
  const item = levelThreeWords[taskIndex];
  builtSyllables = [];
  setPicture(ui.levelThreeImage, item);
  updateProgress(ui.levelThreeProgress, taskIndex, levelThreeWords.length);
  ui.levelThreeHint.textContent = "";
  renderBuiltWord(item);
  ui.syllableChoices.replaceChildren(
    ...shuffled(item.choices).map((syllable) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "syllable-choice";
      button.textContent = syllable;
      button.addEventListener("click", () => chooseSyllable(syllable, button, item));
      return button;
    }),
  );
}

function renderBuiltWord(item) {
  ui.builtWord.replaceChildren(...builtSyllables.map((syllable, index) => {
    const piece = document.createElement("span");
    piece.className = `syllable-piece ${syllableClass(index, item.syllables.length)}`;
    piece.textContent = syllable;
    return piece;
  }));
}

function chooseSyllable(syllable, button, item) {
  const expected = item.syllables[builtSyllables.length];
  if (syllable !== expected) {
    playFeedback("error");
    return;
  }
  builtSyllables.push(syllable);
  playFeedback("correct");
  renderBuiltWord(item);
  if (builtSyllables.length === item.syllables.length) {
    ui.syllableChoices.querySelectorAll("button").forEach((choice) => { choice.disabled = true; });
    speakWord(item.word);
    levelThreeAdvanceTimer = window.setTimeout(() => {
      levelThreeAdvanceTimer = undefined;
      nextTask();
    }, 1000);
  }
}

// LEVEL 5: kliknięcie wyrazów we właściwej kolejności buduje zdanie.
function renderSentences() {
  const item = levelFiveSentences[taskIndex];
  builtSentenceWords = [];
  setSentencePicture(item);
  updateProgress(ui.levelFiveProgress, taskIndex, levelFiveSentences.length);
  renderBuiltSentence(item);
  ui.sentenceChoices.replaceChildren(
    ...shuffled(item.words).map((word) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "sentence-choice";
      button.textContent = word;
      button.addEventListener("click", () => chooseSentenceWord(word, button, item));
      return button;
    }),
  );
}

function renderBuiltSentence(item) {
  ui.builtSentence.replaceChildren(...builtSentenceWords.map((word, index) => {
    const piece = document.createElement("span");
    piece.className = "sentence-piece";
    piece.textContent = index === item.words.length - 1 ? `${word}.` : word;
    return piece;
  }));
}

function chooseSentenceWord(word, button, item) {
  const expected = item.words[builtSentenceWords.length];
  if (word !== expected) {
    playFeedback("error");
    return;
  }
  builtSentenceWords.push(word);
  button.disabled = true;
  playFeedback("correct");
  renderBuiltSentence(item);
  if (builtSentenceWords.length === item.words.length) {
    ui.sentenceChoices.querySelectorAll("button").forEach((choice) => { choice.disabled = true; });
    speakWord(item.words.join(" "));
    levelThreeAdvanceTimer = window.setTimeout(() => {
      levelThreeAdvanceTimer = undefined;
      nextTask();
    }, 1300);
  }
}

function nextTask() {
  taskIndex += 1;
  const max = activeLevel === 1 ? levelOneLetters.length : activeLevel === 2 ? levelTwoWords.length : activeLevel === 3 ? levelThreeWords.length : activeLevel === 4 ? levelFourLetters.length : levelFiveSentences.length;
  if (taskIndex === max) {
    acceptsKeyboard = false;
    showScreen("complete");
    playApplause();
    return;
  }
  if (activeLevel === 1) renderLetters();
  if (activeLevel === 2) renderWords();
  if (activeLevel === 3) renderSyllables();
  if (activeLevel === 4) renderWrittenLetters();
  if (activeLevel === 5) renderSentences();
}

document.querySelectorAll("[data-start-level]").forEach((button) => {
  button.addEventListener("click", () => {
    const level = Number(button.dataset.startLevel);
    if (level === 2) openLevelTwoSetup();
    else if (level === 3) openLevelThreeSetup();
    else if (level === 5) openLevelFiveSetup();
    else if (level === 1 || level === 4) openLetterSetup(level);
    else startLevel(level);
  });
});
document.querySelectorAll("[data-level-two-count]").forEach((button) => {
  button.addEventListener("click", () => startLevel(2, Number(button.dataset.levelTwoCount)));
});
document.querySelectorAll("[data-level-three-count]").forEach((button) => {
  button.addEventListener("click", () => startLevel(3, Number(button.dataset.levelThreeCount)));
});
document.querySelectorAll("[data-level-five-count]").forEach((button) => {
  button.addEventListener("click", () => startLevel(5, Number(button.dataset.levelFiveCount)));
});
document.querySelectorAll("[data-letter-count]").forEach((button) => {
  button.addEventListener("click", () => startLevel(letterSetupLevel, Number(button.dataset.letterCount)));
});
document.querySelectorAll("[data-go-menu]").forEach((button) => button.addEventListener("click", goToMenu));
document.querySelectorAll("[data-open-reading-game]").forEach((button) => button.addEventListener("click", () => openReadingGame()));
document.querySelectorAll("[data-go-library]").forEach((button) => button.addEventListener("click", () => goToLibrary()));
ui.languageSelect.addEventListener("change", () => {
  currentLanguage = ui.languageSelect.value;
  window.speechSynthesis?.cancel();
  saveLanguage();
  translateInterface();
});
document.addEventListener("keydown", handleKeyboard);
window.addEventListener("popstate", () => {
  const game = new URLSearchParams(window.location.search).get("gra");
  if (game === "czytanie") openReadingGame({ updateUrl: false });
  else goToLibrary({ updateUrl: false });
});
translateInterface();
if (new URLSearchParams(window.location.search).get("gra") === "czytanie") openReadingGame({ updateUrl: false });
else goToLibrary({ updateUrl: false });
