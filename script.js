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
  { letter: "C", sound: "ce" }, { letter: "H", sound: "ha" },
  { letter: "J", sound: "jot" }, { letter: "Ł", sound: "eł" },
  { letter: "Ś", sound: "eś" }, { letter: "Ć", sound: "cie" },
  { letter: "Ż", sound: "żet" }, { letter: "Ń", sound: "eń" },
  { letter: "Ó", sound: "u zamknięte" }, { letter: "Ą", sound: "ą" },
  { letter: "Ę", sound: "ę" },
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
  { word: "KROWA", syllables: ["KRO", "WA"], image: "🐄", imageAlt: "krowa", choices: ["KRO", "WA", "MA"] },
  { word: "ŚWINIA", syllables: ["ŚWI", "NIA"], image: "🐷", imageAlt: "świnia", choices: ["ŚWI", "NIA", "KA"] },
  { word: "OWCA", syllables: ["OW", "CA"], image: "🐑", imageAlt: "owca", choices: ["OW", "CA", "MA"] },
  { word: "ŻABA", syllables: ["ŻA", "BA"], image: "🐸", imageAlt: "żaba", choices: ["ŻA", "BA", "RA"] },
  { word: "PSZCZOŁA", syllables: ["PSZCZO", "ŁA"], image: "🐝", imageAlt: "pszczoła", choices: ["PSZCZO", "ŁA", "MA"] },
  { word: "MOTYL", syllables: ["MO", "TYL"], image: "🦋", imageAlt: "motyl", choices: ["MO", "TYL", "RA"] },
  { word: "KWIAT", syllables: ["KWIAT"], image: "🌸", imageAlt: "kwiat", choices: [] },
  { word: "RÓŻA", syllables: ["RÓ", "ŻA"], image: "🌹", imageAlt: "róża", choices: ["RÓ", "ŻA", "BA"] },
  { word: "DRZEWO", syllables: ["DRZE", "WO"], image: "🌳", imageAlt: "drzewo", choices: ["DRZE", "WO", "MA"] },
  { word: "CHMURA", syllables: ["CHMU", "RA"], image: "☁️", imageAlt: "chmura", choices: ["CHMU", "RA", "LA"] },
  { word: "SŁOŃCE", syllables: ["SŁOŃ", "CE"], image: "☀️", imageAlt: "słońce", choices: ["SŁOŃ", "CE", "MA"] },
  { word: "ŁÓDKA", syllables: ["ŁÓD", "KA"], image: "🛶", imageAlt: "łódka", choices: ["ŁÓD", "KA", "RA"] },
  { word: "POCIĄG", syllables: ["PO", "CIĄG"], image: "🚆", imageAlt: "pociąg", choices: ["PO", "CIĄG", "MA"] },
  { word: "AUTOBUS", syllables: ["AU", "TO", "BUS"], image: "🚌", imageAlt: "autobus", choices: ["AU", "TO", "BUS", "MA"] },
  { word: "PREZENT", syllables: ["PRE", "ZENT"], image: "🎁", imageAlt: "prezent", choices: ["PRE", "ZENT", "MA"] },
  { word: "KSIĄŻKA", syllables: ["KSIĄŻ", "KA"], image: "📚", imageAlt: "książka", choices: ["KSIĄŻ", "KA", "RA"] },
  { word: "KAMIEŃ", syllables: ["KA", "MIEŃ"], image: "🪨", imageAlt: "kamień", choices: ["KA", "MIEŃ", "MA"] },
  { word: "GÓRA", syllables: ["GÓ", "RA"], image: "⛰️", imageAlt: "góra", choices: ["GÓ", "RA", "MA"] },
  { word: "DROGA", syllables: ["DRO", "GA"], image: "🛣️", imageAlt: "droga", choices: ["DRO", "GA", "MA"] },
];

// Krótkie, logiczne zdania do Level 5. Każde ma maksymalnie trzy wyrazy,
// a każdy wyraz ma najwyżej dwie sylaby — tak, aby dziecko mogło je łatwo czytać.
const polishSentences = [
  { words: ["KOT", "ŚPI"], image: ["🐱"], imageAlt: "kot śpi" },
  { words: ["WILK", "BIEGNIE"], image: ["🐺"], imageAlt: "wilk biegnie" },
  { words: ["MAMA", "MA", "LODY"], image: ["👩", "🍦🍦"], imageAlt: "mama ma dwa lody" },
  { words: ["TATA", "MYJE", "AUTO"], image: ["👨", "🚗🫧"], imageAlt: "tata myje auto" },
  { words: ["ROBOT", "MA", "KASK"], image: ["🤖", "⛑️"], imageAlt: "robot ma kask" },
  { words: ["PIRAT", "PŁYNIE"], image: ["🏴‍☠️"], imageAlt: "pirat płynie" },
  { words: ["RYBA", "PŁYWA"], image: ["🐟"], imageAlt: "ryba pływa" },
  { words: ["ZEBRA", "BIEGNIE"], image: ["🦓"], imageAlt: "zebra biegnie" },
  { words: ["PTAK", "LECI"], image: ["🐦"], imageAlt: "ptak leci" },
  { words: ["SMOK", "ZIEJE", "OGNIEM"], image: ["🐉", "🔥"], imageAlt: "smok zieje ogniem" },
  { words: ["KOT", "ŁAPIE", "MYSZ"], image: ["🐱", "🐭"], imageAlt: "kot łapie mysz" },
  { words: ["PIES", "NIESIE", "PATYK"], image: ["🐶", "🪵"], imageAlt: "pies niesie patyk" },
  { words: ["DRZEWO", "MA", "LISTKI"], image: ["🌳", "🍃🍃"], imageAlt: "drzewo ma listki" },
  { words: ["STATEK", "PŁYNIE"], image: ["🚢"], imageAlt: "statek płynie" },
  { words: ["KURA", "ZNOSI", "JAJA"], image: ["🐔", "🥚🥚"], imageAlt: "kura znosi jajka" },
  { words: ["FOKA", "PŁYWA"], image: ["🦭"], imageAlt: "foka pływa" },
  { words: ["DZIECKO", "CZYTA", "KSIĄŻKĘ"], image: ["🧒", "📖"], imageAlt: "dziecko czyta książkę" },
  { words: ["ŻABA", "SKACZE"], image: ["🐸"], imageAlt: "żaba skacze" },
  { words: ["KACZKA", "PŁYWA"], image: ["🦆"], imageAlt: "kaczka pływa" },
  { words: ["KOŃ", "JE", "SIANO"], image: ["🐴", "🌾"], imageAlt: "koń je siano" },
  { words: ["KRÓLIK", "JE", "SIANO"], image: ["🐰", "🌾"], imageAlt: "królik je siano" },
  { words: ["MAŁPA", "JE", "JABŁKO"], image: ["🐒", "🍎"], imageAlt: "małpa je jabłko" },
  { words: ["MYSZ", "JE", "SER"], image: ["🐭", "🧀"], imageAlt: "mysz je ser" },
  { words: ["KROWA", "JE", "TRAWĘ"], image: ["🐄", "🌿"], imageAlt: "krowa je trawę" },
  { words: ["OWCA", "JE", "SIANO"], image: ["🐑", "🌾"], imageAlt: "owca je siano" },
  { words: ["SŁOŃ", "PIJE", "WODĘ"], image: ["🐘", "💧"], imageAlt: "słoń pije wodę" },
  { words: ["MOTYL", "LATA"], image: ["🦋"], imageAlt: "motyl lata" },
  { words: ["ŚLIMAK", "IDZIE"], image: ["🐌"], imageAlt: "ślimak idzie" },
  { words: ["ŻÓŁW", "IDZIE"], image: ["🐢"], imageAlt: "żółw idzie" },
  { words: ["DELFIN", "SKACZE"], image: ["🐬"], imageAlt: "delfin skacze" },
  { words: ["REKIN", "PŁYWA"], image: ["🦈"], imageAlt: "rekin pływa" },
  { words: ["AUTO", "JEDZIE"], image: ["🚗"], imageAlt: "auto jedzie" },
  { words: ["TRAKTOR", "WIEZIE", "SIANO"], image: ["🚜", "🌾"], imageAlt: "traktor wiezie siano" },
  { words: ["POCIĄG", "JEDZIE"], image: ["🚆"], imageAlt: "pociąg jedzie" },
  { words: ["ROWER", "JEDZIE"], image: ["🚲"], imageAlt: "rower jedzie" },
  { words: ["ŁÓDŹ", "PŁYNIE"], image: ["🛶"], imageAlt: "łódź płynie" },
  { words: ["KWIAT", "ROŚNIE"], image: ["🌼"], imageAlt: "kwiat rośnie" },
  { words: ["DZIECKO", "JE", "ZUPĘ"], image: ["🧒", "🍲"], imageAlt: "dziecko je zupę" },
  { words: ["MAMA", "PIECZE", "CIASTO"], image: ["👩", "🍰"], imageAlt: "mama piecze ciasto" },
  { words: ["MAMA", "CZYTA", "BAJKĘ"], image: ["👩", "📖"], imageAlt: "mama czyta bajkę" },
  { words: ["TATA", "JE", "ZUPĘ"], image: ["👨", "🍲"], imageAlt: "tata je zupę" },
  { words: ["DZIECI", "MAJĄ", "KLOCKI"], image: ["🧒🧒", "🧱"], imageAlt: "dzieci mają klocki" },
  { words: ["KOTY", "PIJĄ", "MLEKO"], image: ["🐱🐱", "🥛"], imageAlt: "koty piją mleko" },
  { words: ["PTAKI", "LECĄ"], image: ["🐦🐦"], imageAlt: "ptaki lecą" },
  { words: ["PSZCZOŁY", "ROBIĄ", "MIÓD"], image: ["🐝🐝", "🍯"], imageAlt: "pszczoły robią miód" },
  { words: ["KURY", "ZNOSZĄ", "JAJA"], image: ["🐔🐔", "🥚🥚"], imageAlt: "kury znoszą jajka" },
  { words: ["DRZEWA", "MAJĄ", "LIŚCIE"], image: ["🌳🌳", "🍃🍃"], imageAlt: "drzewa mają liście" },
  { words: ["MYSZY", "JEDZĄ", "SER"], image: ["🐭🐭", "🧀"], imageAlt: "myszy jedzą ser" },
  { words: ["SŁOŃCE", "GRZEJE"], image: ["☀️"], imageAlt: "słońce grzeje" },
  { words: ["DESZCZ", "PADA"], image: ["🌧️"], imageAlt: "deszcz pada" },
  { words: ["WIATR", "WIEJE"], image: ["🌬️"], imageAlt: "wiatr wieje" },
  { words: ["KSIĘŻYC", "ŚWIECI"], image: ["🌙"], imageAlt: "księżyc świeci" },
  { words: ["MIŚ", "JE", "MIÓD"], image: ["🐻", "🍯"], imageAlt: "miś je miód" },
  { words: ["LIS", "IDZIE"], image: ["🦊"], imageAlt: "lis idzie" },
  { words: ["LEW", "ŚPI"], image: ["🦁"], imageAlt: "lew śpi" },
  { words: ["ŚWINKA", "JE", "JABŁKO"], image: ["🐷", "🍎"], imageAlt: "świnka je jabłko" },
  { words: ["PTAK", "NIESIE", "PATYK"], image: ["🐦", "🪵"], imageAlt: "ptak niesie patyk" },
  { words: ["ŻABA", "JE", "MUCHĘ"], image: ["🐸", "🪰"], imageAlt: "żaba je muchę" },
  { words: ["KOT", "PIJE", "MLEKO"], image: ["🐱", "🥛"], imageAlt: "kot pije mleko" },
  { words: ["OWCA", "JE", "TRAWĘ"], image: ["🐑", "🌿"], imageAlt: "owca je trawę" },
  { words: ["PSZCZOŁA", "LUBI", "KWIAT"], image: ["🐝", "🌸"], imageAlt: "pszczoła lubi kwiat" },
  { words: ["MOTYL", "LUBI", "RÓŻĘ"], image: ["🦋", "🌹"], imageAlt: "motyl lubi różę" },
  { words: ["ŻABA", "WIDZI", "MUCHĘ"], image: ["🐸", "🪰"], imageAlt: "żaba widzi muchę" },
  { words: ["SŁOŃ", "MA", "TRĄBĘ"], image: ["🐘"], imageAlt: "słoń ma trąbę" },
  { words: ["KOT", "WIDZI", "RYBĘ"], image: ["🐱", "🐟"], imageAlt: "kot widzi rybę" },
  { words: ["PIES", "GONI", "PIŁKĘ"], image: ["🐶", "⚽"], imageAlt: "pies goni piłkę" },
  { words: ["AUTO", "MIJA", "DOM"], image: ["🚗", "🏠"], imageAlt: "auto mija dom" },
  { words: ["POCIĄG", "WIEZIE", "LUDZI"], image: ["🚆", "🧑‍🤝‍🧑"], imageAlt: "pociąg wiezie ludzi" },
  { words: ["RAKIETA", "LECI"], image: ["🚀"], imageAlt: "rakieta leci" },
  { words: ["BALON", "LECI"], image: ["🎈"], imageAlt: "balon leci" },
  { words: ["SAMOLOT", "LECI"], image: ["✈️"], imageAlt: "samolot leci" },
  { words: ["KWIAT", "MA", "PŁATKI"], image: ["🌸"], imageAlt: "kwiat ma płatki" },
  { words: ["CHMURA", "KRYJE", "SŁOŃCE"], image: ["☁️", "☀️"], imageAlt: "chmura kryje słońce" },
];

const createWords = (entries) => entries.map(([word, syllables, image, imageAlt, distractor]) => ({
  word,
  syllables,
  image,
  imageAlt,
  choices: [...new Set([...syllables, distractor])],
}));

// Jawny podział wyrazów z Levelu 5 pozwala pokazać prawidłowe sylaby
// niezależnie od języka i naprzemiennie je pokolorować.
const sentenceSyllables = {
  pl: {
    KOT: ["KOT"], "ŚPI": ["ŚPI"], WILK: ["WILK"], BIEGNIE: ["BIE", "GNIE"], MAMA: ["MA", "MA"], MA: ["MA"], LODY: ["LO", "DY"], TATA: ["TA", "TA"], MYJE: ["MY", "JE"], AUTO: ["AU", "TO"], ROBOT: ["RO", "BOT"], KASK: ["KASK"], PIRAT: ["PI", "RAT"], "PŁYNIE": ["PŁY", "NIE"], RYBA: ["RY", "BA"], "PŁYWA": ["PŁY", "WA"], ZEBRA: ["ZE", "BRA"], PTAK: ["PTAK"], LECI: ["LE", "CI"], SMOK: ["SMOK"], ZIEJE: ["ZIE", "JE"], OGNIEM: ["O", "GNIEM"], "ŁAPIE": ["ŁA", "PIE"], MYSZ: ["MYSZ"], PIES: ["PIES"], NIESIE: ["NIE", "SIE"], PATYK: ["PA", "TYK"], DRZEWO: ["DRZE", "WO"], LISTKI: ["LIST", "KI"], STATEK: ["STA", "TEK"], KURA: ["KU", "RA"], ZNOSI: ["ZNO", "SI"], JAJA: ["JA", "JA"], FOKA: ["FO", "KA"], DZIECKO: ["DZIEC", "KO"], CZYTA: ["CZY", "TA"], "KSIĄŻKĘ": ["KSIĄŻ", "KĘ"], "ŻABA": ["ŻA", "BA"], KACZKA: ["KACZ", "KA"], "KOŃ": ["KOŃ"], JE: ["JE"], SIANO: ["SIA", "NO"], "KRÓLIK": ["KRÓ", "LIK"], "MAŁPA": ["MAŁ", "PA"], "JABŁKO": ["JABŁ", "KO"], SER: ["SER"], KROWA: ["KRO", "WA"], "TRAWĘ": ["TRA", "WĘ"], OWCA: ["OW", "CA"], "SŁOŃ": ["SŁOŃ"], PIJE: ["PI", "JE"], "WODĘ": ["WO", "DĘ"], MOTYL: ["MO", "TYL"], LATA: ["LA", "TA"], "ŚLIMAK": ["ŚLI", "MAK"], IDZIE: ["I", "DZIE"], "ŻÓŁW": ["ŻÓŁW"], DELFIN: ["DEL", "FIN"], SKACZE: ["SKA", "CZE"], REKIN: ["RE", "KIN"], JEDZIE: ["JEDZ", "IE"], TRAKTOR: ["TRAK", "TOR"], WIEZIE: ["WIE", "ZIE"], "POCIĄG": ["PO", "CIĄG"], ROWER: ["RO", "WER"], "ŁÓDŹ": ["ŁÓDŹ"], KWIAT: ["KWIAT"], "ROŚNIE": ["ROŚ", "NIE"], "ZUPĘ": ["ZU", "PĘ"], PIECZE: ["PIE", "CZE"], CIASTO: ["CIA", "STO"], "BAJKĘ": ["BAJ", "KĘ"], DZIECI: ["DZIE", "CI"], "MAJĄ": ["MA", "JĄ"], KLOCKI: ["KLOC", "KI"], KOTY: ["KO", "TY"], "PIJĄ": ["PI", "JĄ"], MLEKO: ["MLE", "KO"], PTAKI: ["PTA", "KI"], "LECĄ": ["LE", "CĄ"], "PSZCZOŁY": ["PSZCZO", "ŁY"], "ROBIĄ": ["RO", "BIĄ"], "MIÓD": ["MIÓD"], KURY: ["KU", "RY"], "ZNOSZĄ": ["ZNO", "SZĄ"], DRZEWA: ["DRZE", "WA"], "LIŚCIE": ["LI", "ŚCIE"], MYSZY: ["MY", "SZY"], "JEDZĄ": ["JEDZĄ"], "SŁOŃCE": ["SŁOŃ", "CE"], GRZEJE: ["GRZE", "JE"], DESZCZ: ["DESZCZ"], PADA: ["PA", "DA"], WIATR: ["WIATR"], WIEJE: ["WIE", "JE"], "KSIĘŻYC": ["KSIĘ", "ŻYC"], "ŚWIECI": ["ŚWIE", "CI"], "MIŚ": ["MIŚ"], LIS: ["LIS"], LEW: ["LEW"], "ŚWINKA": ["ŚWIN", "KA"], "MUCHĘ": ["MU", "CHĘ"],
  },
  en: { CAT: ["CAT"], SLEEPS: ["SLEEPS"], DOG: ["DOG"], MUMMY: ["MUM", "MY"], HAS: ["HAS"], CAKE: ["CAKE"], DADDY: ["DAD", "DY"], CAR: ["CAR"], ROBOT: ["RO", "BOT"], HELMET: ["HEL", "MET"], PIRATE: ["PI", "RATE"], TREASURE: ["TREA", "SURE"] },
  de: { DIE: ["DIE"], KATZE: ["KAT", "ZE"], "SCHLÄFT": ["SCHLÄFT"], DER: ["DER"], HUND: ["HUND"], MAMA: ["MA", "MA"], HAT: ["HAT"], EIS: ["EIS"], PAPA: ["PA", "PA"], "FÄHRT": ["FÄHRT"], AUTO: ["AU", "TO"], ROBOTER: ["RO", "BO", "TER"], WINKT: ["WINKT"], PIRAT: ["PI", "RAT"], LACHT: ["LACHT"] },
};

// Dodatkowe, jawne podziały używane w Levelu 7. Dzięki nim także tworzone
// przez dziecko zdania zachowują ten sam rytm kolorów co reszta gry.
Object.assign(sentenceSyllables.pl, {
  GONI: ["GO", "NI"], SZUKA: ["SZU", "KA"], "KOŚCI": ["KO", "ŚCI"], BAWI: ["BA", "WI"], "SIĘ": ["SIĘ"], "PIŁKĄ": ["PIŁ", "KĄ"], PODLEWA: ["POD", "LE", "WA"], LUBI: ["LU", "BI"],
  "PSZCZOŁA": ["PSZCZO", "ŁA"], "RÓŻĘ": ["RÓ", "ŻĘ"], WIDZI: ["WI", "DZI"], "TRĄBĘ": ["TRĄ", "BĘ"], "RYBĘ": ["RY", "BĘ"], "PIŁKĘ": ["PIŁ", "KĘ"], MIJA: ["MI", "JA"], LUDZI: ["LU", "DZI"], RAKIETA: ["RA", "KIE", "TA"], BALON: ["BA", "LON"], SAMOLOT: ["SA", "MO", "LOT"], PŁATKI: ["PŁAT", "KI"], CHMURA: ["CHMU", "RA"], KRYJE: ["KRY", "JE"],
  DO: ["DO"], DOM: ["DOM"], DOMU: ["DO", "MU"], MOTYLA: ["MO", "TY", "LA"], WYSOKO: ["WY", "SO", "KO"], KOSMOSU: ["KOS", "MO", "SU"], "ZIEMIĘ": ["ZIE", "MIĘ"], ROBI: ["RO", "BI"], ULA: ["U", "LA"],
});
Object.assign(sentenceSyllables.en, {
  THE: ["THE"], DRINKS: ["DRINKS"], MILK: ["MILK"], CHASES: ["CHAS", "ES"], A: ["A"], MOUSE: ["MOUSE"], FINDS: ["FINDS"], BONE: ["BONE"], PLAYS: ["PLAYS"], WITH: ["WITH"], BALL: ["BALL"], WATER: ["WA", "TER"], CHILD: ["CHILD"], WATERS: ["WA", "TERS"], READS: ["READS"], BOOK: ["BOOK"], EATS: ["EATS"], SOUP: ["SOUP"], GROWS: ["GROWS"], LIKES: ["LIKES"], SUN: ["SUN"], LEAVES: ["LEAVES"],
});
Object.assign(sentenceSyllables.de, {
  TRINKT: ["TRINKT"], MILCH: ["MILCH"], JAGT: ["JAGT"], EINE: ["EI", "NE"], MAUS: ["MAUS"], SUCHT: ["SUCHT"], EINEN: ["EI", "NEN"], KNOCHEN: ["KNO", "CHEN"], SPIELT: ["SPIELT"], MIT: ["MIT"], BALL: ["BALL"], WASSER: ["WAS", "SER"], DAS: ["DAS"], KIND: ["KIND"], GIESST: ["GIESST"], BLUME: ["BLU", "ME"], LIEST: ["LIEST"], EIN: ["EIN"], BUCH: ["BUCH"], ISST: ["ISST"], SUPPE: ["SUP", "PE"], "WÄCHST": ["WÄCHST"], MAG: ["MAG"], SONNE: ["SON", "NE"], "BLÄTTER": ["BLÄT", "TER"],
});

const englishLetters = [
  ["A", "ay"], ["B", "bee"], ["C", "see"], ["D", "dee"], ["E", "ee"],
  ["F", "ef"], ["G", "gee"], ["H", "aitch"], ["I", "eye"], ["J", "jay"],
  ["K", "kay"], ["L", "el"], ["M", "em"], ["N", "en"], ["O", "oh"],
  ["P", "pee"], ["Q", "cue"], ["R", "ar"], ["S", "ess"], ["T", "tee"],
].map(([letter, sound]) => ({ letter, sound }));

const englishWords = createWords([
  ["CAT", ["CAT"], "🐱", "cat", "MA"],
  ["DOG", ["DOG"], "🐶", "dog", "MA"],
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
  ["HUND", ["HUND"], "🐶", "Hund", "MA"],
  ["MAUS", ["MAUS"], "🐭", "Maus", "PA"],
  ["MAMA", ["MA", "MA"], "👩", "Mama", "PA"],
  ["PAPA", ["PA", "PA"], "👨", "Papa", "MA"],
  ["OMA", ["O", "MA"], "👵", "Oma", "PA"],
  ["AUTO", ["AU", "TO"], "🚗", "Auto", "MA"],
  ["ROBOTER", ["RO", "BO", "TER"], "🤖", "Roboter", "MA"],
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

// Level 7 daje wybór, ale chroni sens zdania: po wybraniu bohatera dziecko
// widzi wyłącznie krótkie, pasujące do niego wydarzenia.
const emojiStories = {
  pl: [
    { subject: { emoji: "🐱", word: "KOT" }, actions: [{ emoji: "🥛", word: "PIJE MLEKO" }, { emoji: "😴", word: "ŚPI" }, { emoji: "🐭", word: "GONI MYSZ" }] },
    { subject: { emoji: "🐶", word: "PIES" }, actions: [{ emoji: "🦴", word: "SZUKA KOŚCI" }, { emoji: "⚽", word: "BAWI SIĘ PIŁKĄ" }, { emoji: "💧", word: "PIJE WODĘ" }] },
    { subject: { emoji: "🧒", word: "DZIECKO" }, actions: [{ emoji: "🌷", word: "PODLEWA KWIAT" }, { emoji: "📖", word: "CZYTA KSIĄŻKĘ" }, { emoji: "🍲", word: "JE ZUPĘ" }] },
    { subject: { emoji: "🌷", word: "KWIAT" }, actions: [{ emoji: "🌱", word: "ROŚNIE" }, { emoji: "☀️", word: "LUBI SŁOŃCE" }, { emoji: "🍃", word: "MA LIŚCIE" }] },
    { subject: { emoji: "🐄", word: "KROWA" }, actions: [{ emoji: "🌿", word: "JE TRAWĘ" }, { emoji: "🌸", word: "WIDZI KWIAT" }, { emoji: "🏠", word: "IDZIE DO DOMU" }] },
    { subject: { emoji: "🐸", word: "ŻABA" }, actions: [{ emoji: "🪰", word: "JE MUCHĘ" }, { emoji: "🦋", word: "WIDZI MOTYLA" }, { emoji: "⬆️", word: "WYSOKO SKACZE" }] },
    { subject: { emoji: "🚀", word: "RAKIETA" }, actions: [{ emoji: "🌌", word: "LECI DO KOSMOSU" }, { emoji: "🌍", word: "WIDZI ZIEMIĘ" }, { emoji: "🌙", word: "MIJA KSIĘŻYC" }] },
    { subject: { emoji: "🐝", word: "PSZCZOŁA" }, actions: [{ emoji: "🌸", word: "LUBI KWIAT" }, { emoji: "🍯", word: "ROBI MIÓD" }, { emoji: "🏠", word: "LECI DO ULA" }] },
  ],
  en: [
    { subject: { emoji: "🐱", word: "THE CAT" }, actions: [{ emoji: "🥛", word: "DRINKS MILK" }, { emoji: "😴", word: "SLEEPS" }, { emoji: "🐭", word: "CHASES A MOUSE" }] },
    { subject: { emoji: "🐶", word: "THE DOG" }, actions: [{ emoji: "🦴", word: "FINDS A BONE" }, { emoji: "⚽", word: "PLAYS WITH A BALL" }, { emoji: "💧", word: "DRINKS WATER" }] },
    { subject: { emoji: "🧒", word: "THE CHILD" }, actions: [{ emoji: "🌷", word: "WATERS A FLOWER" }, { emoji: "📖", word: "READS A BOOK" }, { emoji: "🍲", word: "EATS SOUP" }] },
    { subject: { emoji: "🌷", word: "THE FLOWER" }, actions: [{ emoji: "🌱", word: "GROWS" }, { emoji: "☀️", word: "LIKES SUN" }, { emoji: "🍃", word: "HAS LEAVES" }] },
  ],
  de: [
    { subject: { emoji: "🐱", word: "DIE KATZE" }, actions: [{ emoji: "🥛", word: "TRINKT MILCH" }, { emoji: "😴", word: "SCHLÄFT" }, { emoji: "🐭", word: "JAGT EINE MAUS" }] },
    { subject: { emoji: "🐶", word: "DER HUND" }, actions: [{ emoji: "🦴", word: "SUCHT EINEN KNOCHEN" }, { emoji: "⚽", word: "SPIELT MIT EINEM BALL" }, { emoji: "💧", word: "TRINKT WASSER" }] },
    { subject: { emoji: "🧒", word: "DAS KIND" }, actions: [{ emoji: "🌷", word: "GIESST EINE BLUME" }, { emoji: "📖", word: "LIEST EIN BUCH" }, { emoji: "🍲", word: "ISST SUPPE" }] },
    { subject: { emoji: "🌷", word: "DIE BLUME" }, actions: [{ emoji: "🌱", word: "WÄCHST" }, { emoji: "☀️", word: "MAG SONNE" }, { emoji: "🍃", word: "HAT BLÄTTER" }] },
  ],
};

const languageData = {
  pl: {
    flag: "🇵🇱", levelName: "Poziom", locale: "pl-PL", voicePrefix: "pl", letters: polishLetters, words: polishWords, sentences: polishSentences,
    ui: { language: "Język", menuTitle: "Wybierz poziom", levels: ["Literki", "Wyrazy", "Sylaby", "Litery pisane", "Zdania", "Gra w słowa Montessori", "Emoji opowieści"], wordCountTitle: "Ile słów?", wordCountDescription: "Wybierz liczbę słów do przećwiczenia.", wordCountAria: "Liczba słów w Level 2", syllableCountTitle: "Ile wyrazów chcesz trenować?", syllableCountDescription: "Wybierz liczbę wyrazów do ułożenia z sylab.", syllableCountAria: "Liczba wyrazów w Level 3", sentenceCountTitle: "Ile zdań chcesz trenować?", sentenceCountDescription: "Wybierz liczbę zdań do ułożenia.", sentenceCountAria: "Liczba zdań w Level 5", storyCountTitle: "Ile opowieści?", storyCountDescription: "Wymyśl zdanie z emoji, a potem przeczytaj je rodzicowi.", storyCountAria: "Liczba opowieści w Level 7", storyInstruction: "Wybierz emoji i wymyśl swoje zdanie.", storyChoicesAria: "Karty emoji do ułożenia zdania", storySentenceAria: "Twoje zdanie", readToParent: "Przeczytaj zdanie rodzicowi.", readAloud: "Czytam na głos", parentReady: "Rodzic usłyszał! Dalej", letterCountDescription: "Wybierz liczbę liter do przećwiczenia.", letterCountAria: "Liczba liter do przećwiczenia", letterCountTitle: "Ile liter?", writtenLetterCountTitle: "Ile liter pisanych?", movableInstruction: "Ułóż nazwę obrazka z liter.", movableLettersAria: "Litery do ułożenia słowa", movableBuiltAria: "Układane słowo", movableClear: "Wyczyść", movableTryAgain: "Możesz zmienić litery.", movableRemove: "Usuń literę", typePictureWord: "Teraz wpisz to słowo na klawiaturze.", readPictureWord: "Przeczytaj słowo.", listen: "Posłuchaj słowa", next: "Dalej", continueToTyping: "Teraz wpisz słowo", removeTypedLetter: "Usuń literę", repeat: "Jeszcze raz", hint: "Podpowiedź", hintAnswer: "Odpowiedź:", buildComplete: "Super 🙂", typeComplete: "Super 👍", levelSixComplete: "Super 🙂", menu: "Menu", complete: "Brawo! 🥳👍", backToMenu: "Wróć do menu", emptyLetter: "Pusta litera", progress: ["Postęp w Level 1", "Postęp w Level 2", "Postęp w Level 3", "Postęp w Level 4", "Postęp w Level 5", "Postęp w Level 6", "Postęp w Level 7"] },
  },
  en: {
    flag: "🇬🇧", levelName: "Level", locale: "en-GB", voicePrefix: "en", letters: englishLetters, words: englishWords, sentences: englishSentences,
    ui: { language: "Language", menuTitle: "Choose a level", levels: ["Letters", "Words", "Syllables", "Handwriting", "Sentences", "Montessori word game", "Emoji stories"], wordCountTitle: "How many words?", wordCountDescription: "Choose how many words to practise.", wordCountAria: "Number of words in Level 2", syllableCountTitle: "How many words?", syllableCountDescription: "Choose how many words to build from syllables.", syllableCountAria: "Number of words in Level 3", sentenceCountTitle: "How many sentences?", sentenceCountDescription: "Choose how many sentences to build.", sentenceCountAria: "Number of sentences in Level 5", storyCountTitle: "How many stories?", storyCountDescription: "Make a sentence with emoji, then read it to a parent.", storyCountAria: "Number of stories in Level 7", storyInstruction: "Choose emoji and make your own sentence.", storyChoicesAria: "Emoji cards for building a sentence", storySentenceAria: "Your sentence", readToParent: "Read the sentence to a parent.", readAloud: "I read it aloud", parentReady: "My parent heard it! Next", letterCountDescription: "Choose how many letters to practise.", letterCountAria: "Number of letters to practise", letterCountTitle: "How many letters?", writtenLetterCountTitle: "How many handwritten letters?", movableInstruction: "Build the name of the picture with letters.", movableLettersAria: "Letters for building the word", movableBuiltAria: "Word being built", movableClear: "Clear", movableTryAgain: "You can change the letters.", movableRemove: "Remove letter", typePictureWord: "Now type the word on the keyboard.", readPictureWord: "Read the word.", listen: "Listen to the word", next: "Next", continueToTyping: "Now type the word", removeTypedLetter: "Remove letter", repeat: "Try again", hint: "Hint", hintAnswer: "Answer:", buildComplete: "Great 🙂", typeComplete: "Great 👍", levelSixComplete: "Great 🙂", menu: "Menu", complete: "Great job! 🥳👍", backToMenu: "Back to menu", emptyLetter: "Empty letter", progress: ["Level 1 progress", "Level 2 progress", "Level 3 progress", "Level 4 progress", "Level 5 progress", "Level 6 progress", "Level 7 progress"] },
  },
  de: {
    flag: "🇩🇪", levelName: "Stufe", locale: "de-DE", voicePrefix: "de", letters: germanLetters, words: germanWords, sentences: germanSentences,
    ui: { language: "Sprache", menuTitle: "Wähle ein Level", levels: ["Buchstaben", "Wörter", "Silben", "Schreibschrift", "Sätze", "Montessori-Wortspiel", "Emoji-Geschichten"], wordCountTitle: "Wie viele Wörter?", wordCountDescription: "Wähle die Anzahl der Wörter zum Üben.", wordCountAria: "Anzahl der Wörter in Level 2", syllableCountTitle: "Wie viele Wörter?", syllableCountDescription: "Wähle die Anzahl der Wörter, die du aus Silben zusammensetzt.", syllableCountAria: "Anzahl der Wörter in Level 3", sentenceCountTitle: "Wie viele Sätze?", sentenceCountDescription: "Wähle die Anzahl der Sätze zum Üben.", sentenceCountAria: "Anzahl der Sätze in Level 5", storyCountTitle: "Wie viele Geschichten?", storyCountDescription: "Erfinde einen Satz mit Emoji und lies ihn einem Elternteil vor.", storyCountAria: "Anzahl der Geschichten in Level 7", storyInstruction: "Wähle Emoji und erfinde deinen Satz.", storyChoicesAria: "Emoji-Karten zum Satzbauen", storySentenceAria: "Dein Satz", readToParent: "Lies den Satz einem Elternteil vor.", readAloud: "Ich lese vor", parentReady: "Mein Elternteil hat zugehört! Weiter", letterCountDescription: "Wähle die Anzahl der Buchstaben zum Üben.", letterCountAria: "Anzahl der Buchstaben zum Üben", letterCountTitle: "Wie viele Buchstaben?", writtenLetterCountTitle: "Wie viele Schreibschrift-Buchstaben?", movableInstruction: "Baue den Namen des Bildes aus Buchstaben.", movableLettersAria: "Buchstaben zum Bilden des Wortes", movableBuiltAria: "Gebautes Wort", movableClear: "Löschen", movableTryAgain: "Du kannst die Buchstaben ändern.", movableRemove: "Buchstabe entfernen", typePictureWord: "Tippe das Wort auf der Tastatur.", readPictureWord: "Lies das Wort.", listen: "Wort anhören", next: "Weiter", continueToTyping: "Jetzt Wort tippen", removeTypedLetter: "Buchstabe löschen", repeat: "Noch einmal", hint: "Hinweis", hintAnswer: "Lösung:", buildComplete: "Super 🙂", typeComplete: "Super 👍", levelSixComplete: "Super 🙂", menu: "Menü", complete: "Super gemacht! 🥳👍", backToMenu: "Zurück zum Menü", emptyLetter: "Leerer Buchstabe", progress: ["Fortschritt in Level 1", "Fortschritt in Level 2", "Fortschritt in Level 3", "Fortschritt in Level 4", "Fortschritt in Level 5", "Fortschritt in Level 6", "Fortschritt in Level 7"] },
  },
};

// Krótsza, bardziej opisowa nazwa Level 6 w menu.
languageData.pl.ui.levels[5] = "Słowa z obrazków";
languageData.en.ui.levels[5] = "Picture words";
languageData.de.ui.levels[5] = "Bildwörter";
Object.assign(languageData.pl.ui, { storyChooseWho: "Wybierz bohatera opowieści.", storyChooseWhat: "Co robi bohater?" });
Object.assign(languageData.en.ui, { storyChooseWho: "Choose the hero of your story.", storyChooseWhat: "What is the hero doing?" });
Object.assign(languageData.de.ui, { storyChooseWho: "Wähle die Figur deiner Geschichte.", storyChooseWhat: "Was macht die Figur?" });
languageData.pl.ui.buildComplete = "Świetnie! Teraz wpisz słowo.";
languageData.pl.ui.typeComplete = "Dobrze! Słowo jest poprawne.";
languageData.en.ui.buildComplete = "Great! Now type the word.";
languageData.en.ui.typeComplete = "Correct! You wrote the word right.";
languageData.de.ui.buildComplete = "Super! Tippe jetzt das Wort.";
languageData.de.ui.typeComplete = "Richtig! Das Wort ist korrekt.";

const levelEightCopy = {
  pl: { label: "Uzupełnij słowo", title: "Ile słów?", description: "Uzupełnij trzy brakujące litery w nazwie obrazka.", countAria: "Liczba słów w Poziomie 8", instruction: "Spójrz na obrazek i wpisz brakujące litery.", input: "Brakująca litera", submit: "Gotowe", skip: "Nie wiem — dalej", progress: "Postęp w Poziomie 8", empty: "Wpisz wszystkie brakujące litery.", incorrect: "Spróbuj jeszcze raz.", done: "Brawo! Słowo jest gotowe." },
  en: { label: "Complete the word", title: "How many words?", description: "Fill in three missing letters in the picture word.", countAria: "Number of words in Level 8", instruction: "Look at the picture and type the missing letters.", input: "Missing letter", submit: "Done", skip: "I don't know — next", progress: "Level 8 progress", empty: "Type all the missing letters.", incorrect: "Try again.", done: "Great! The word is complete." },
  de: { label: "Wort ergänzen", title: "Wie viele Wörter?", description: "Ergänze drei fehlende Buchstaben im Bildwort.", countAria: "Anzahl der Wörter in Level 8", instruction: "Schau auf das Bild und tippe die fehlenden Buchstaben.", input: "Fehlender Buchstabe", submit: "Fertig", skip: "Ich weiß es nicht — weiter", progress: "Fortschritt in Level 8", empty: "Tippe alle fehlenden Buchstaben ein.", incorrect: "Versuche es noch einmal.", done: "Super! Das Wort ist vollständig." },
};
Object.entries(levelEightCopy).forEach(([language, copy]) => {
  languageData[language].ui.levels.push(copy.label);
  languageData[language].ui.progress.push(copy.progress);
});

const creatorCopy = {
  pl: {
    parentLink: "Dla rodziców",
    parentText: "Najlepiej towarzyszyć dziecku przy pierwszych zabawach, chwalić próby i robić krótkie przerwy. 💛",
    creatorLink: "O twórczyni",
    title: "O twórczyni",
    firstParagraph: "Mam na imię Karolina Sulik, mam 28 lat i jestem mamą dwójki dzieci: czteroletniego Tobiasza, który z radością poznaje literki, oraz trzymiesięcznej córeczki. Ograniczam dzieciom czas przed ekranem, ale widzę, że technologia używana z uważnością może wspierać naukę i dawać z niej więcej przyjemności. W świecie szybko rozwijającej się AI warto uczyć się korzystać z niej mądrze.",
    secondParagraph: "Po ukończeniu informatyki stworzyłam prostą grę dla Tobiasza, aby mógł bawić się literami i łączyć je w sylaby. Podczas testów zauważyłam, że chętnie do niej wraca i woli takie ćwiczenia od sylab na papierze. Chcę podzielić się tym doświadczeniem, aby także inne dzieci mogły odkryć radość z nauki — a kiedy przyjdzie czas na szkołę, skorzysta z niej także moja córeczka.",
  },
  en: {
    parentLink: "For parents",
    parentText: "It is best to join your child for the first few activities, praise their efforts and take short breaks. 💛",
    creatorLink: "About the creator",
    title: "About the creator",
    firstParagraph: "My name is Karolina Sulik, I am 28 and the mum of two children: four-year-old Tobiasz, who loves discovering letters, and a three-month-old daughter. I limit my children's screen time, but I believe that technology, used mindfully, can make learning more enjoyable. In a world of rapidly developing AI, it is worth learning to use it wisely.",
    secondParagraph: "After completing my computer science degree, I made this simple game for Tobiasz so he could play with letters and join them into syllables. While testing it, I noticed that he is more eager to do these activities than syllable exercises on paper. I wanted to share this experience so other children can discover joy in learning too — and one day, my daughter will be able to learn with this game as well.",
  },
  de: {
    parentLink: "Für Eltern",
    parentText: "Begleiten Sie Ihr Kind am besten bei den ersten Übungen, würdigen Sie seine Versuche und machen Sie kurze Pausen. 💛",
    creatorLink: "Über die Entwicklerin",
    title: "Über die Entwicklerin",
    firstParagraph: "Ich heiße Karolina Sulik, bin 28 Jahre alt, lebe in Deutschland und bin Mutter von zwei Kindern: dem vierjährigen Tobiasz, der mit Freude Buchstaben entdeckt, und einer drei Monate alten Tochter. Ich begrenze die Bildschirmzeit meiner Kinder, glaube aber, dass Technologie — achtsam eingesetzt — das Lernen unterstützen und mehr Freude daran geben kann. Gerade in einer Welt, in der sich KI rasant entwickelt, lohnt es sich, den klugen Umgang damit zu lernen.",
    secondParagraph: "Nach meinem Informatikstudium habe ich dieses einfache Spiel für Tobiasz entwickelt, damit er mit Buchstaben spielen und sie zu Silben verbinden kann. Beim Testen habe ich beobachtet, dass er sich lieber auf diese Übungen einlässt als auf Silben auf Papier. Diese Erfahrung möchte ich teilen, damit auch andere Kinder Freude am Lernen entdecken — und später kann auch meine Tochter mit diesem Spiel lernen.",
  },
};

const libraryCopy = {
  pl: {
    title: "Uczymy przez zabawę",
    intro: "Gra dla dzieci 4–6 lat. Bez reklam i logowania.",
    readingTag: "Dostępna teraz",
    readingTitle: "Czytanie sylabowe",
    readingDescription: "Litery, wyrazy, sylaby i krótkie zdania — krok po kroku.",
    play: "Graj teraz",
    comingTag: "Wkrótce",
    comingTitle: "Kolejna zabawa",
    comingDescription: "Tu pojawi się następna aktywność.",
  },
  en: {
    title: "Learning through play",
    intro: "A game for children aged 4–6. No ads or login.",
    readingTag: "Available now",
    readingTitle: "Syllable reading",
    readingDescription: "Letters, words, syllables and short sentences — step by step.",
    play: "Play now",
    comingTag: "Coming soon",
    comingTitle: "Another activity",
    comingDescription: "Another calm learning activity will appear here.",
  },
  de: {
    title: "Lernen durch Spielen",
    intro: "Ein Spiel für Kinder von 4–6 Jahren. Ohne Werbung und Anmeldung.",
    readingTag: "Jetzt verfügbar",
    readingTitle: "Silben lesen",
    readingDescription: "Buchstaben, Wörter, Silben und kurze Sätze — Schritt für Schritt.",
    play: "Jetzt spielen",
    comingTag: "Demnächst",
    comingTitle: "Neue Aktivität",
    comingDescription: "Hier erscheint eine weitere ruhige Lernaktivität.",
  },
};

const parentGuideCopy = {
  pl: {
    title: "Jak wspierać dziecko na każdym poziomie?",
    learnLabel: "Czego uczy: ",
    afterLabel: "Po zabawie dziecko może: ",
    supportLabel: "Jak wspierać: ",
    readinessTitle: "Najważniejsza jest gotowość dziecka",
    readinessText: "Jeśli dziecko chce się bawić — świetnie. Jeśli nie ma ochoty, nie wywieraj presji — wróci, gdy będzie gotowe.",
    sourcesTitle: "Źródła i ważna informacja",
    sourcesNote: "Te wskazówki mają charakter edukacyjny i nie zastępują konsultacji z logopedą. Jeśli rozwój mowy lub słuch dziecka budzi Twój niepokój, skontaktuj się ze specjalistą.",
    levels: [
      { title: "Poziom 1 · Literki", learn: "poznawania liter i ich dźwięków.", after: "rozpoznać kilka liter i usłyszeć pierwszy dźwięk w słowie.", support: "Wybierzcie 3–5 liter: „A jak auto, autobus, autostrada”. Mówcie i szukajcie słów — bez odpytywania." },
      { title: "Poziom 2 · Wyrazy", learn: "że litery po kolei tworzą wyraz.", after: "wpisać znany wyraz i zauważyć brakującą literę.", support: "Najpierw nazwijcie obrazek. Powiedzcie słowo powoli i daj dziecku czas na własną próbę." },
      { title: "Poziom 3 · Sylaby", learn: "łączenia sylab w słowo.", after: "ułożyć i przeczytać proste słowo.", support: "Klaszczcie: „MA–MA”, potem powiedzcie całe „MAMA”." },
      { title: "Poziom 4 · Litery pisane", learn: "rozpoznawania liter pisanych i drukowanych.", after: "połączyć znaną literę pisaną z drukowaną.", support: "Pokażcie literę palcem lub narysujcie ją w powietrzu. Ładne pisanie może poczekać." },
      { title: "Poziom 5 · Zdania", learn: "że kolejność wyrazów tworzy znaczenie.", after: "ułożyć krótkie zdanie i przeczytać je ze wsparciem.", support: "Zapytaj: „Co się dzieje?”. Zamieńcie dwa wyrazy i sprawdźcie, co się zmieniło." },
      { title: "Poziom 6 · Układam wyrazy", learn: "układania wyrazu z liter i poprawiania pomyłek.", after: "ułożyć, wpisać i przeczytać nazwę obrazka.", support: "Nazwijcie obrazek, przeciągnijcie dźwięki i pozwól dziecku samemu wybrać litery." },
      { title: "Poziom 7 · Emoji opowieści", learn: "tworzenia własnych zdań i opowiadania o nich.", after: "ułożyć proste zdanie i przeczytać je bliskiej osobie.", support: "Nie poprawiaj od razu. Najpierw zapytaj: „Co wydarzyło się w tej historii?” i daj dziecku czas na przeczytanie." },
      { title: "Poziom 8 · Uzupełnij słowo", learn: "rozpoznawania liter w nazwie znanego obrazka.", after: "uzupełnić trzy brakujące litery w prostym słowie.", support: "Nazwijcie obrazek razem, powiedzcie słowo powoli i poproście dziecko o znalezienie brakujących głosek." },
    ],
  },
  en: {
    title: "How can you support your child at every level?",
    learnLabel: "This level teaches: ",
    afterLabel: "After playing, your child may be able to: ",
    supportLabel: "How to support: ",
    readinessTitle: "Your child’s readiness matters most",
    readinessText: "If your child wants to play, wonderful. If not, do not apply pressure. They can return when they are ready; every child develops at their own pace. If something worries you, speak with a speech and language therapist or educational support service.",
    sourcesTitle: "Sources and an important note",
    sourcesNote: "These tips are educational and do not replace a consultation with a speech and language therapist. If you are concerned about your child’s speech development or hearing, contact a specialist.",
    levels: [
      { title: "Level 1 · Letters", learn: "recognising letters and their sounds.", after: "recognise a few letters and hear the first sound in a word.", support: "Choose 3–5 letters and look for matching words. Keep it playful, not a test." },
      { title: "Level 2 · Words", learn: "that letters in sequence make a word.", after: "type a familiar word and spot a missing letter.", support: "Name the picture first. Say the word slowly and give your child time to try." },
      { title: "Level 3 · Syllables", learn: "joining syllables into a word.", after: "build and read a simple word.", support: "Clap the syllables, then say the whole word together." },
      { title: "Level 4 · Handwriting", learn: "to recognise handwritten and printed letters.", after: "match a familiar handwritten letter to print.", support: "Trace it with a finger or draw it in the air. Neat handwriting can wait." },
      { title: "Level 5 · Sentences", learn: "that word order creates meaning.", after: "put together and read a short sentence with support.", support: "Ask what is happening. Swap two words and see what changes." },
      { title: "Level 6 · Building words", learn: "building words with letters and correcting mistakes.", after: "build, type and read a picture name.", support: "Name the picture, stretch out its sounds and let your child choose the letters." },
      { title: "Level 7 · Emoji stories", learn: "creating their own sentences and telling a story.", after: "make a simple sentence and read it to someone close.", support: "Do not correct straight away. First ask what happened in the story and give your child time to read it." },
      { title: "Level 8 · Complete the word", learn: "recognising letters in the name of a familiar picture.", after: "fill in three missing letters in a simple word.", support: "Name the picture together, say the word slowly and ask the child to listen for the missing sounds." },
    ],
  },
  de: {
    title: "So begleiten Sie Ihr Kind auf jedem Level?",
    learnLabel: "Das lernt Ihr Kind: ",
    afterLabel: "Nach dem Spiel kann Ihr Kind vielleicht: ",
    supportLabel: "So können Sie begleiten: ",
    readinessTitle: "Die Bereitschaft des Kindes ist das Wichtigste",
    readinessText: "Wenn Ihr Kind selbst spielen möchte — wunderbar. Wenn es gerade keine Lust hat, üben Sie keinen Druck aus. Es kann zurückkommen, wenn es bereit ist; jedes Kind entwickelt sich in seinem eigenen Tempo. Bei Sorgen sprechen Sie mit einer Logopädin, einem Logopäden oder einer Beratungsstelle.",
    sourcesTitle: "Quellen und wichtiger Hinweis",
    sourcesNote: "Diese Hinweise dienen der Bildung und ersetzen keine logopädische Beratung. Wenn Sie sich wegen der Sprachentwicklung oder des Hörens Ihres Kindes sorgen, wenden Sie sich an eine Fachperson.",
    levels: [
      { title: "Level 1 · Buchstaben", learn: "Buchstaben und ihre Laute zu erkennen.", after: "einige Buchstaben erkennen und den Anfangslaut hören.", support: "Wählen Sie 3–5 Buchstaben und suchen Sie passende Wörter. Es ist ein Spiel, kein Test." },
      { title: "Level 2 · Wörter", learn: "dass Buchstaben nacheinander ein Wort bilden.", after: "ein bekanntes Wort tippen und einen fehlenden Buchstaben bemerken.", support: "Benennen Sie zuerst das Bild. Sprechen Sie langsam und geben Sie Zeit zum Ausprobieren." },
      { title: "Level 3 · Silben", learn: "Silben zu einem Wort zu verbinden.", after: "ein einfaches Wort legen und lesen.", support: "Klatschen Sie die Silben und sagen Sie dann das ganze Wort." },
      { title: "Level 4 · Schreibschrift", learn: "Schreib- und Druckbuchstaben zu erkennen.", after: "einen geschriebenen Buchstaben der Druckschrift zuzuordnen.", support: "Fahren Sie ihn mit dem Finger nach oder malen Sie ihn in die Luft. Schönes Schreiben darf warten." },
      { title: "Level 5 · Sätze", learn: "dass die Wortreihenfolge Bedeutung schafft.", after: "einen kurzen Satz mit Unterstützung ordnen und lesen.", support: "Fragen Sie, was passiert. Tauschen Sie zwei Wörter und sehen Sie, was sich ändert." },
      { title: "Level 6 · Wörter bauen", learn: "Wörter aus Buchstaben zu bauen und Fehler zu korrigieren.", after: "einen Bildnamen bauen, tippen und lesen.", support: "Benennen Sie das Bild, ziehen Sie die Laute in die Länge und lassen Sie Ihr Kind die Buchstaben wählen." },
      { title: "Level 7 · Emoji-Geschichten", learn: "eigene Sätze zu bilden und darüber zu erzählen.", after: "einen einfachen Satz bilden und einer vertrauten Person vorlesen.", support: "Korrigieren Sie nicht sofort. Fragen Sie zuerst, was in der Geschichte passiert, und geben Sie Zeit zum Vorlesen." },
      { title: "Level 8 · Wort ergänzen", learn: "Buchstaben im Namen eines bekannten Bildes zu erkennen.", after: "drei fehlende Buchstaben in einem einfachen Wort zu ergänzen.", support: "Benennen Sie das Bild gemeinsam, sprechen Sie das Wort langsam und suchen Sie die fehlenden Laute." },
    ],
  },
};

const screens = {
  gameLibrary: document.querySelector("#game-library-screen"),
  menu: document.querySelector("#menu-screen"),
  levelTwoSetup: document.querySelector("#level-two-setup-screen"),
  levelTwoSyllableSetup: document.querySelector("#level-two-syllable-setup-screen"),
  levelThreeSetup: document.querySelector("#level-three-setup-screen"),
  levelFiveSetup: document.querySelector("#level-five-setup-screen"),
  levelSixSetup: document.querySelector("#level-six-setup-screen"),
  levelSevenSetup: document.querySelector("#level-seven-setup-screen"),
  levelEightSetup: document.querySelector("#level-eight-setup-screen"),
  letterSetup: document.querySelector("#letter-setup-screen"),
  levelOne: document.querySelector("#level-one-screen"),
  levelTwo: document.querySelector("#level-two-screen"),
  levelThree: document.querySelector("#level-three-screen"),
  levelFour: document.querySelector("#level-four-screen"),
  levelFive: document.querySelector("#level-five-screen"),
  levelSix: document.querySelector("#level-six-screen"),
  levelSeven: document.querySelector("#level-seven-screen"),
  levelEight: document.querySelector("#level-eight-screen"),
  complete: document.querySelector("#complete-screen"),
};

const ui = {
  languageSelects: [...document.querySelectorAll("[data-language-select]")],
  libraryTitle: document.querySelector("#library-title"),
  libraryIntro: document.querySelector("#library-intro"),
  readingGameTag: document.querySelector("#reading-game-tag"),
  readingGameTitle: document.querySelector("#reading-game-title"),
  readingGameDescription: document.querySelector("#reading-game-description"),
  libraryPlayLabel: document.querySelector("#library-play-label"),
  menuTitle: document.querySelector("#menu-title"),
  levelTitles: ["one", "two", "three", "four", "five", "six", "seven", "eight"].map((level) => document.querySelector(`#level-${level}-title`)),
  levelLabels: ["one", "two", "three", "four", "five", "six", "seven", "eight"].map((level) => document.querySelector(`#level-${level}-label`)),
  levelTwoSetupTitle: document.querySelector("#level-two-setup-title"),
  levelTwoSetupDescription: document.querySelector("#level-two-setup-description"),
  levelTwoCountOptions: document.querySelector("#level-two-count-options"),
  levelTwoSyllableSetupTitle: document.querySelector("#level-two-syllable-setup-title"),
  levelTwoSyllableSetupDescription: document.querySelector("#level-two-syllable-setup-description"),
  levelTwoSyllableOptions: document.querySelector("#level-two-syllable-options"),
  levelThreeSetupTitle: document.querySelector("#level-three-setup-title"),
  levelThreeSetupDescription: document.querySelector("#level-three-setup-description"),
  levelThreeCountOptions: document.querySelector("#level-three-count-options"),
  levelFiveSetupTitle: document.querySelector("#level-five-setup-title"),
  levelFiveSetupDescription: document.querySelector("#level-five-setup-description"),
  levelFiveCountOptions: document.querySelector("#level-five-count-options"),
  levelSixSetupTitle: document.querySelector("#level-six-setup-title"),
  levelSixSetupDescription: document.querySelector("#level-six-setup-description"),
  levelSixCountOptions: document.querySelector("#level-six-count-options"),
  levelSevenSetupTitle: document.querySelector("#level-seven-setup-title"),
  levelSevenSetupDescription: document.querySelector("#level-seven-setup-description"),
  levelSevenCountOptions: document.querySelector("#level-seven-count-options"),
  levelEightSetupTitle: document.querySelector("#level-eight-setup-title"),
  levelEightSetupDescription: document.querySelector("#level-eight-setup-description"),
  levelEightCountOptions: document.querySelector("#level-eight-count-options"),
  letterCountOptions: document.querySelector("#letter-count-options"),
  completeTitle: document.querySelector("#complete-title"),
  completeMenuButton: document.querySelector("#complete-menu-button"),
  singleLetter: document.querySelector("#single-letter"),
  repeatedLetterSlots: document.querySelector("#repeated-letter-slots"),
  levelOneExplosion: document.querySelector("#level-one-explosion"),
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
  levelSixInstruction: document.querySelector("#level-six-instruction"),
  levelSixImage: document.querySelector("#level-six-image"),
  levelSixProgress: document.querySelector("#level-six-progress"),
  movableBuiltWord: document.querySelector("#movable-built-word"),
  movableHint: document.querySelector("#movable-hint"),
  movableLetterBank: document.querySelector("#movable-letter-bank"),
  movableClearButton: document.querySelector("#movable-clear-button"),
  montessoriTyping: document.querySelector("#montessori-typing"),
  montessoriBackspaceButton: document.querySelector("#montessori-backspace-button"),
  levelSevenProgress: document.querySelector("#level-seven-progress"),
  levelSevenInstruction: document.querySelector("#level-seven-instruction"),
  emojiStorySentence: document.querySelector("#emoji-story-sentence"),
  emojiStoryChoices: document.querySelector("#emoji-story-choices"),
  emojiStoryReadPanel: document.querySelector("#emoji-story-read-panel"),
  emojiStoryReadPrompt: document.querySelector("#emoji-story-read-prompt"),
  emojiStoryReadButton: document.querySelector("#emoji-story-read-button"),
  emojiStoryParentButton: document.querySelector("#emoji-story-parent-button"),
  levelEightProgress: document.querySelector("#level-eight-progress"),
  levelEightInstruction: document.querySelector("#level-eight-instruction"),
  levelEightImage: document.querySelector("#level-eight-image"),
  levelEightWord: document.querySelector("#level-eight-word"),
  levelEightForm: document.querySelector("#level-eight-form"),
  levelEightSubmit: document.querySelector("#level-eight-submit"),
  levelEightSkipButton: document.querySelector("#level-eight-skip-button"),
  levelEightMessage: document.querySelector("#level-eight-message"),
  gameHintButtons: [...document.querySelectorAll("[data-game-hint-button]")],
  parentLink: document.querySelector("#parent-link"),
  parentNoteText: document.querySelector("#parent-note-text"),
  parentGuideTitle: document.querySelector("#parent-guide-title"),
  parentLevelCards: document.querySelector("#parent-level-cards"),
  parentReadinessTitle: document.querySelector("#parent-readiness-title"),
  parentReadinessText: document.querySelector("#parent-readiness-text"),
  parentSourcesTitle: document.querySelector("#parent-sources-title"),
  parentSourcesNote: document.querySelector("#parent-sources-note"),
  creatorLink: document.querySelector("#creator-link"),
  creatorTitle: document.querySelector("#creator-title"),
  creatorFirstParagraph: document.querySelector("#creator-first-paragraph"),
  creatorSecondParagraph: document.querySelector("#creator-second-paragraph"),
};

let activeLevel = null;
let taskIndex = 0;
let levelTwoWords = [];
let levelTwoWordCount = 0;
let levelThreeWords = [];
let levelOneLetters = [];
let levelOneRepeatCount = 0;
let levelFourLetters = [];
let levelFiveSentences = [];
let levelSixWords = [];
let levelSevenCount = 0;
let levelEightWords = [];
let levelEightMissingIndexes = [];
let emojiStorySubject = null;
let emojiStoryAction = null;
let letterSetupLevel = null;
let inputIndex = 0;
let builtSyllables = [];
let builtSentenceWords = [];
let movableLetterChoices = [];
let builtMovableLetters = [];
let movableWordComplete = false;
let montessoriStage = "build";
let montessoriInputIndex = 0;
let montessoriTypedLetters = [];
let acceptsKeyboard = false;
let audioContext;
let levelThreeAdvanceTimer;
let levelOneExplosionTimer;
let levelTwoSyllableTimers = new Set();
const LEVEL_TWO_SYLLABLE_PAUSE_MS = 350;
const LEVEL_EIGHT_ADVANCE_MS = 2200;
const LEVEL_ONE_MIN_REPETITIONS = 2;
const LEVEL_ONE_MAX_REPETITIONS = 6;
const GA_MEASUREMENT_ID = "G-PR1J7WEW4W";
const ANALYTICS_CONSENT_KEY = "syllabee-analytics-consent";
const PAYMENT_SESSION_KEY = "syllabee-parent-session";
const paymentConfig = window.SYLLABEE_PAYMENTS_CONFIG || {};
const paymentState = { session: null, status: null, pendingLevel: null };
let currentLanguage = (() => {
  try {
    return languageData[window.localStorage.getItem("syllabee-language")] ? window.localStorage.getItem("syllabee-language") : "pl";
  } catch {
    return "pl";
  }
})();

const levelTwoSyllableCopy = {
  pl: { title: "Ile sylab mają wyrazy?", description: "Wybierz rodzaj wyrazów do przećwiczenia.", aria: "Liczba sylab w wyrazach", options: ["1 sylaba", "2 sylaby", "3 sylaby", "Wszystkie"] },
  en: { title: "How many syllables?", description: "Choose which words to practise.", aria: "Number of syllables in the words", options: ["1 syllable", "2 syllables", "3 syllables", "All words"] },
  de: { title: "Wie viele Silben haben die Wörter?", description: "Wähle die Wörter zum Üben aus.", aria: "Silbenanzahl der Wörter", options: ["1 Silbe", "2 Silben", "3 Silben", "Alle Wörter"] },
};

function currentData() {
  return languageData[currentLanguage];
}

function savedAnalyticsConsent() {
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
  } catch {
    return null;
  }
}

function saveAnalyticsConsent(value) {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  } catch {
    // Brak dostępu do localStorage nie blokuje bieżącej decyzji użytkownika.
  }
}

function enableGoogleAnalytics() {
  if (window.syllabeeAnalyticsEnabled) return;
  window.syllabeeAnalyticsEnabled = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const tag = document.createElement("script");
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.append(tag);
}

function setAnalyticsConsent(granted) {
  saveAnalyticsConsent(granted ? "granted" : "denied");
  document.querySelector("#analytics-consent")?.classList.add("is-hidden");
  if (!granted) return;
  enableGoogleAnalytics();
  trackAnalyticsEvent("analytics_consent_granted", { language: currentLanguage });
}

// Integracja jest celowo anonimowa i ładuje się dopiero po zgodzie. Wysyła
// wyłącznie zbiorcze zdarzenia postępu — bez wpisywanych liter i danych dziecka.
function trackAnalyticsEvent(eventName, parameters = {}) {
  if (!window.syllabeeAnalyticsEnabled || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, parameters);
}

function hideGameHints() {
  ui.gameHintButtons.forEach((button) => {
    button.closest("[data-game-hint]").querySelector("[data-game-hint-card]").classList.add("is-hidden");
    button.setAttribute("aria-expanded", "false");
  });
}

function currentHintAnswer() {
  if (activeLevel === 1) return levelOneLetters[taskIndex]?.letter;
  if (activeLevel === 2) return levelTwoWords[taskIndex]?.word;
  if (activeLevel === 3) return levelThreeWords[taskIndex]?.syllables.join(" · ");
  if (activeLevel === 4) return levelFourLetters[taskIndex]?.letter;
  if (activeLevel === 5) return levelFiveSentences[taskIndex]?.words.join(" ");
  if (activeLevel === 6) return levelSixWords[taskIndex]?.word;
  if (activeLevel === 7) return [emojiStorySubject?.word, emojiStoryAction?.word].filter(Boolean).join(" ");
  if (activeLevel === 8) return levelEightWords[taskIndex]?.word;
  return "";
}

function toggleGameHint(button) {
  const hint = button.closest("[data-game-hint]");
  const card = hint.querySelector("[data-game-hint-card]");
  const answer = hint.querySelector("[data-game-hint-answer]");
  const willShow = card.classList.contains("is-hidden");
  hideGameHints();
  if (!willShow) return;
  if (activeLevel === 8) {
    const item = levelEightWords[taskIndex];
    card.classList.add("is-word-hint");
    answer.replaceChildren(...item.syllables.map((syllable, index) => {
      const part = document.createElement("span");
      part.className = `sentence-syllable ${syllableClass(index, item.syllables.length)}`;
      part.textContent = syllable;
      return part;
    }));
  } else {
    card.classList.remove("is-word-hint");
    answer.textContent = `🙂 ${currentData().ui.hintAnswer} ${currentHintAnswer()}`;
  }
  card.classList.remove("is-hidden");
  button.setAttribute("aria-expanded", "true");
}

function renderParentGuide() {
  const guide = parentGuideCopy[currentLanguage];
  ui.parentGuideTitle.textContent = guide.title;
  ui.parentReadinessTitle.textContent = guide.readinessTitle;
  ui.parentReadinessText.textContent = guide.readinessText;
  ui.parentSourcesTitle.textContent = guide.sourcesTitle;
  ui.parentSourcesNote.textContent = guide.sourcesNote;

  ui.parentLevelCards.replaceChildren(...guide.levels.map((level, index) => {
    const item = document.createElement("article");
    item.className = "parent-level-accordion";

    const button = document.createElement("button");
    const panelId = `parent-level-panel-${index + 1}`;
    button.className = "parent-level-accordion-button";
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", panelId);
    button.innerHTML = `<span>${level.title}</span><span class="parent-level-accordion-icon" aria-hidden="true">+</span>`;

    const panel = document.createElement("div");
    panel.id = panelId;
    panel.className = "parent-level-accordion-panel";
    panel.hidden = true;
    [[guide.learnLabel, level.learn], [guide.afterLabel, level.after], [guide.supportLabel, level.support]].forEach(([label, value]) => {
      const paragraph = document.createElement("p");
      const labelElement = document.createElement("strong");
      labelElement.textContent = label;
      paragraph.append(labelElement, value);
      panel.append(paragraph);
    });

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));
      panel.hidden = isExpanded;
    });
    item.append(button, panel);
    return item;
  }));
}

function translateInterface() {
  const { ui: text, locale, levelName } = currentData();
  const creatorText = creatorCopy[currentLanguage];
  const libraryText = libraryCopy[currentLanguage];
  document.documentElement.lang = currentLanguage;
  ui.languageSelects.forEach((select) => {
    select.value = currentLanguage;
    select.setAttribute("aria-label", text.language);
  });
  ui.libraryTitle.textContent = libraryText.title;
  ui.libraryIntro.textContent = libraryText.intro;
  ui.readingGameTag.textContent = libraryText.readingTag;
  ui.readingGameTitle.textContent = libraryText.readingTitle;
  ui.readingGameDescription.textContent = libraryText.readingDescription;
  ui.libraryPlayLabel.textContent = libraryText.play;
  ui.menuTitle.textContent = text.menuTitle;
  ui.levelTitles.forEach((title, index) => { title.textContent = `${levelName} ${index + 1}`; });
  ui.levelLabels.forEach((label, index) => { label.textContent = text.levels[index]; });
  ui.levelTwoSetupTitle.textContent = text.wordCountTitle;
  ui.levelTwoSetupDescription.textContent = text.wordCountDescription;
  ui.levelTwoCountOptions.setAttribute("aria-label", text.wordCountAria);
  const levelTwoSyllables = levelTwoSyllableCopy[currentLanguage];
  ui.levelTwoSyllableSetupTitle.textContent = levelTwoSyllables.title;
  ui.levelTwoSyllableSetupDescription.textContent = levelTwoSyllables.description;
  ui.levelTwoSyllableOptions.setAttribute("aria-label", levelTwoSyllables.aria);
  ui.levelTwoSyllableOptions.querySelectorAll("[data-level-two-syllables]").forEach((button, index) => {
    button.textContent = levelTwoSyllables.options[index];
  });
  ui.levelThreeSetupTitle.textContent = text.syllableCountTitle;
  ui.levelThreeSetupDescription.textContent = text.syllableCountDescription;
  ui.levelThreeCountOptions.setAttribute("aria-label", text.syllableCountAria);
  ui.levelFiveSetupTitle.textContent = text.sentenceCountTitle;
  ui.levelFiveSetupDescription.textContent = text.sentenceCountDescription;
  ui.levelFiveCountOptions.setAttribute("aria-label", text.sentenceCountAria);
  ui.levelSixSetupTitle.textContent = text.wordCountTitle;
  ui.levelSixSetupDescription.textContent = text.wordCountDescription;
  ui.levelSixCountOptions.setAttribute("aria-label", text.wordCountAria);
  ui.levelSevenSetupTitle.textContent = text.storyCountTitle;
  ui.levelSevenSetupDescription.textContent = text.storyCountDescription;
  ui.levelSevenCountOptions.setAttribute("aria-label", text.storyCountAria);
  ui.levelSevenInstruction.textContent = text.storyInstruction;
  ui.emojiStoryChoices.setAttribute("aria-label", text.storyChoicesAria);
  ui.emojiStorySentence.setAttribute("aria-label", text.storySentenceAria);
  ui.emojiStoryReadPrompt.textContent = text.readToParent;
  ui.emojiStoryReadButton.textContent = text.readAloud;
  ui.emojiStoryParentButton.textContent = text.parentReady;
  const levelEightText = levelEightCopy[currentLanguage];
  ui.levelEightSetupTitle.textContent = levelEightText.title;
  ui.levelEightSetupDescription.textContent = levelEightText.description;
  ui.levelEightCountOptions.setAttribute("aria-label", levelEightText.countAria);
  ui.levelEightInstruction.textContent = levelEightText.instruction;
  ui.levelEightSubmit.textContent = levelEightText.submit;
  ui.levelEightSkipButton.textContent = levelEightText.skip;
  ui.letterCountOptions.setAttribute("aria-label", text.letterCountAria);
  ui.levelSixInstruction.textContent = text.movableInstruction;
  ui.levelSixProgress.setAttribute("aria-label", text.progress[5]);
  ui.movableBuiltWord.setAttribute("aria-label", text.movableBuiltAria);
  ui.movableLetterBank.setAttribute("aria-label", text.movableLettersAria);
  ui.movableClearButton.textContent = text.movableClear;
  ui.montessoriBackspaceButton.textContent = `⌫ ${text.removeTypedLetter}`;
  ui.gameHintButtons.forEach((button) => { button.setAttribute("aria-label", text.hint); });
  hideGameHints();
  ui.parentLink.textContent = creatorText.parentLink;
  ui.parentNoteText.textContent = creatorText.parentText;
  ui.creatorLink.textContent = creatorText.creatorLink;
  ui.creatorTitle.textContent = creatorText.title;
  ui.creatorFirstParagraph.textContent = creatorText.firstParagraph;
  ui.creatorSecondParagraph.textContent = creatorText.secondParagraph;
  renderParentGuide();
  ui.completeTitle.textContent = text.complete;
  ui.completeMenuButton.textContent = text.backToMenu;
  document.querySelectorAll(".menu-button-text").forEach((element) => { element.textContent = text.menu; });
  [ui.levelOneProgress, ui.levelTwoProgress, ui.levelThreeProgress, ui.levelFourProgress, ui.levelFiveProgress, ui.levelSixProgress, ui.levelSevenProgress, ui.levelEightProgress]
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

function paymentsEnabled() {
  return Boolean(paymentConfig.supabaseUrl && paymentConfig.supabaseAnonKey);
}

function paymentDialogElements() {
  return {
    dialog: document.querySelector("#paid-access-dialog"),
    email: document.querySelector("#paid-access-email"),
    account: document.querySelector("#paid-access-account"),
    message: document.querySelector("#paid-access-message"),
    login: document.querySelector("#paid-access-login"),
    buy: document.querySelector("#paid-access-buy"),
    logout: document.querySelector("#paid-access-logout"),
  };
}

function renderParentAccountButton() {
  const button = document.querySelector("#parent-account-button");
  if (!button) return;
  const status = paymentState.status;
  const signedIn = Boolean(status?.signedIn);
  button.classList.toggle("is-signed-in", signedIn && !status?.hasFullAccess);
  button.classList.toggle("is-plus", Boolean(status?.hasFullAccess));
  if (status?.hasFullAccess) button.textContent = "Konto rodzica: Plus";
  else if (signedIn) button.textContent = "Konto rodzica: zalogowano";
  else if (paymentState.session) button.textContent = "Konto rodzica: sprawdzamy…";
  else button.textContent = "Konto rodzica";
}

function readSavedPaymentSession() {
  try {
    const session = JSON.parse(window.localStorage.getItem(PAYMENT_SESSION_KEY) || "null");
    return session?.access_token && session?.refresh_token ? session : null;
  } catch {
    return null;
  }
}

function savePaymentSession(session) {
  paymentState.session = session;
  try {
    if (session) window.localStorage.setItem(PAYMENT_SESSION_KEY, JSON.stringify(session));
    else window.localStorage.removeItem(PAYMENT_SESSION_KEY);
  } catch {
    // Logowanie nadal działa w bieżącej karcie, nawet gdy zapis jest zablokowany.
  }
}

async function paymentAccessToken() {
  const session = paymentState.session;
  if (!session) return null;
  if (session.expires_at && session.expires_at * 1000 > Date.now() + 60_000) return session.access_token;
  const response = await fetch(`${paymentConfig.supabaseUrl}/auth/v1/token?grant_type=refresh_token`, {
    method: "POST",
    headers: { apikey: paymentConfig.supabaseAnonKey, "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: session.refresh_token }),
  });
  if (!response.ok) {
    savePaymentSession(null);
    return null;
  }
  const refreshed = await response.json();
  savePaymentSession(refreshed);
  return refreshed.access_token;
}

async function callPaymentFunction(name, body = {}) {
  const token = await paymentAccessToken();
  if (!token) throw new Error("NOT_SIGNED_IN");
  const response = await fetch(`${paymentConfig.supabaseUrl}/functions/v1/${name}`, {
    method: "POST",
    headers: {
      apikey: paymentConfig.supabaseAnonKey,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "PAYMENT_SERVICE_ERROR");
  return data;
}

async function refreshPaymentStatus() {
  if (!paymentsEnabled() || !paymentState.session) return null;
  try {
    paymentState.status = await callPaymentFunction("account-status");
  } catch {
    // Jeśli funkcja dostępu jest chwilowo niedostępna, pokaż rodzicowi
    // prawdziwy stan logowania zamiast prosić o e-mail po raz drugi.
    const token = await paymentAccessToken();
    const response = token && await fetch(`${paymentConfig.supabaseUrl}/auth/v1/user`, {
      headers: { apikey: paymentConfig.supabaseAnonKey, Authorization: `Bearer ${token}` },
    });
    const user = response?.ok ? await response.json() : null;
    paymentState.status = user?.email
      ? { signedIn: true, hasFullAccess: false, isOwner: false, email: user.email }
      : null;
  }
  renderParentAccountButton();
  return paymentState.status;
}

function setPaymentMessage(message) {
  paymentDialogElements().message.textContent = message;
}

function renderPaymentDialog() {
  const { email, account, login, buy, logout } = paymentDialogElements();
  const status = paymentState.status;
  const isSignedIn = Boolean(status?.signedIn);
  const isConfigured = paymentsEnabled();
  document.querySelector("#paid-access-email-label")?.classList.toggle("is-hidden", !isConfigured || isSignedIn);
  email.classList.toggle("is-hidden", !isConfigured || isSignedIn);
  login.classList.toggle("is-hidden", !isConfigured || isSignedIn);
  buy.classList.toggle("is-hidden", !isConfigured || !isSignedIn || Boolean(status?.hasFullAccess));
  logout.classList.toggle("is-hidden", !isConfigured || !isSignedIn);
  account.classList.toggle("is-hidden", !isSignedIn);
  account.textContent = isSignedIn ? `Zalogowano jako ${status.email}${status.isOwner ? " (konto właścicielki)" : ""}.` : "";
  renderParentAccountButton();
  if (!isConfigured) setPaymentMessage("Syllabee Plus będzie dostępne wkrótce.");
}

async function showPaidAccess(level) {
  paymentState.pendingLevel = level;
  const { dialog } = paymentDialogElements();
  dialog.classList.remove("is-hidden");
  await refreshPaymentStatus();
  renderPaymentDialog();
  if (level !== null && paymentState.status?.hasFullAccess) {
    closePaidAccess();
    openSelectedLevel(level);
  }
}

function closePaidAccess() {
  paymentDialogElements().dialog.classList.add("is-hidden");
  paymentState.pendingLevel = null;
}

async function sendParentMagicLink() {
  const { email, login } = paymentDialogElements();
  const address = email.value.trim();
  if (!address || !email.checkValidity()) {
    setPaymentMessage("Wpisz poprawny e-mail rodzica.");
    email.focus();
    return;
  }
  login.disabled = true;
  setPaymentMessage("Wysyłamy bezpieczny link…");
  try {
    // Surowe API Auth przyjmuje adres powrotu jako parametr `redirect_to`
    // w adresie żądania, nie w obiekcie `options` używanym przez bibliotekę
    // supabase-js. W przeciwnym razie Supabase pomijał ten adres.
    const redirectUrl = new URL(window.location.href);
    redirectUrl.pathname = redirectUrl.pathname.endsWith("/") ? redirectUrl.pathname : `${redirectUrl.pathname}/`;
    redirectUrl.search = "?gra=czytanie";
    redirectUrl.hash = "";
    const authUrl = new URL(`${paymentConfig.supabaseUrl}/auth/v1/otp`);
    authUrl.searchParams.set("redirect_to", redirectUrl.toString());

    const response = await fetch(authUrl, {
      method: "POST",
      headers: { apikey: paymentConfig.supabaseAnonKey, "Content-Type": "application/json" },
      body: JSON.stringify({
        email: address,
        create_user: true,
      }),
    });
    if (!response.ok) throw new Error();
    setPaymentMessage("Sprawdź skrzynkę e-mail i otwórz link do logowania.");
    login.textContent = "Wyślij link ponownie";
  } catch {
    setPaymentMessage("Nie udało się wysłać linku. Kliknij poniżej, aby spróbować ponownie.");
    login.textContent = "Wyślij link ponownie";
  } finally {
    login.disabled = false;
  }
}

async function beginCheckout() {
  const { buy } = paymentDialogElements();
  buy.disabled = true;
  setPaymentMessage("Przechodzimy do bezpiecznej płatności…");
  try {
    const { checkoutUrl } = await callPaymentFunction("create-checkout-session");
    window.location.assign(checkoutUrl);
  } catch (error) {
    setPaymentMessage(error.message === "Already unlocked" ? "To konto ma już pełny dostęp." : "Nie udało się rozpocząć płatności. Spróbuj ponownie.");
    buy.disabled = false;
  }
}

async function restoreMagicLinkSession() {
  if (!paymentsEnabled()) return;
  const hash = new URLSearchParams(window.location.hash.slice(1));
  const query = new URLSearchParams(window.location.search);
  const accessToken = hash.get("access_token") ?? query.get("access_token");
  const refreshToken = hash.get("refresh_token") ?? query.get("refresh_token");
  if (accessToken && refreshToken) {
    savePaymentSession({ access_token: accessToken, refresh_token: refreshToken, expires_at: Number(hash.get("expires_at") ?? query.get("expires_at")) });
    query.delete("access_token");
    query.delete("refresh_token");
    query.delete("expires_at");
    const cleanSearch = query.toString();
    window.history.replaceState({}, "", `${window.location.pathname}${cleanSearch ? `?${cleanSearch}` : ""}`);
  } else {
    paymentState.session = readSavedPaymentSession();
  }
  await refreshPaymentStatus();
  renderParentAccountButton();
}

function openSelectedLevel(level) {
  trackAnalyticsEvent("level_selected", { level_number: level, language: currentLanguage });
  if (level === 2) openLevelTwoSetup();
  else if (level === 3) openLevelThreeSetup();
  else if (level === 5) openLevelFiveSetup();
  else if (level === 6) openLevelSixSetup();
  else if (level === 7) openLevelSevenSetup();
  else if (level === 8) openLevelEightSetup();
  else if (level === 1 || level === 4) openLetterSetup(level);
  else startLevel(level, level === 6 ? 5 : undefined);
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.add("is-hidden"));
  screens[name].classList.remove("is-hidden");
}

function clearLevelTwoSyllableTimers() {
  levelTwoSyllableTimers.forEach((timer) => window.clearTimeout(timer));
  levelTwoSyllableTimers.clear();
}

function clearLevelOneExplosion() {
  window.clearTimeout(levelOneExplosionTimer);
  levelOneExplosionTimer = undefined;
  ui.levelOneExplosion.classList.remove("is-active");
  ui.levelOneExplosion.replaceChildren();
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
  clearLevelTwoSyllableTimers();
  clearLevelOneExplosion();
  window.speechSynthesis?.cancel();
  activeLevel = null;
  acceptsKeyboard = false;
  if (updateUrl) updateGameUrl("czytanie");
  document.title = "Syllabee — Czytanie sylabowe";
  showScreen("menu");
  trackAnalyticsEvent("reading_game_opened", { language: currentLanguage });
}

function goToLibrary({ updateUrl = true } = {}) {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  clearLevelTwoSyllableTimers();
  clearLevelOneExplosion();
  window.speechSynthesis?.cancel();
  activeLevel = null;
  letterSetupLevel = null;
  acceptsKeyboard = false;
  if (updateUrl) updateGameUrl();
  document.title = "Syllabee — literki i sylaby";
  showScreen("gameLibrary");
}

function goToMenu() {
  goToLibrary();
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
    // Krótkie, opadające "tu-dum" — wyraźne, ale nadal łagodne dla dziecka.
    [[220, 150], [145, 75]].forEach(([from, to], index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = now + index * 0.15;
      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(from, start);
      oscillator.frequency.exponentialRampToValueAtTime(to, start + 0.25);
      gain.gain.setValueAtTime(0.12, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.28);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.29);
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

// Krótki, radosny „pop” uruchamiany razem z wybuchem konfetti.
function playConfettiPop() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  audioContext ||= new AudioContextClass();
  if (audioContext.state === "suspended") audioContext.resume();

  const now = audioContext.currentTime;
  [420, 620, 880].forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = now + index * .035;
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(frequency, start);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.22, start + .12);
    gain.gain.setValueAtTime(.055, start);
    gain.gain.exponentialRampToValueAtTime(.001, start + .16);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + .17);
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
function speakTypedLetter(letter, syllable, onSyllableEnd) {
  if (!syllable) {
    if (!queueSpeech(letterSound(letter), onSyllableEnd)) onSyllableEnd?.();
    return;
  }

  // Dziecko najpierw słyszy nazwę wpisanej litery, a zaraz potem domkniętą
  // sylabę. Długa przerwa tutaj odkładała kolejne komunikaty głosowe, co przy
  // wyrazach trzysylabowych wyglądało jak zawieszenie gry.
  const queueSyllable = () => {
    const timer = window.setTimeout(() => {
      levelTwoSyllableTimers.delete(timer);
      if (activeLevel !== 2) return;
      if (!queueSpeech(syllable.toLocaleLowerCase(currentData().locale), onSyllableEnd)) onSyllableEnd?.();
    }, LEVEL_TWO_SYLLABLE_PAUSE_MS);
    levelTwoSyllableTimers.add(timer);
  };
  if (!queueSpeech(letterSound(letter), queueSyllable)) queueSyllable();
}

function speakWord(word) {
  speak(word.toLocaleLowerCase(currentData().locale));
}

function syllableClass(index, count) {
  if (count === 1) return "single-syllable";
  return index % 2 === 0 ? "syllable-one" : "syllable-two";
}

function createSyllabifiedSentenceWord(word, withFullStop = false) {
  const wordElement = document.createElement("span");
  wordElement.className = "sentence-word";
  const syllables = sentenceSyllables[currentLanguage]?.[word] || [word];
  syllables.forEach((syllable, index) => {
    const syllableElement = document.createElement("span");
    syllableElement.className = `sentence-syllable ${index % 2 === 0 ? "syllable-one" : "syllable-two"}`;
    syllableElement.textContent = index === syllables.length - 1 && withFullStop ? `${syllable}.` : syllable;
    wordElement.append(syllableElement);
  });
  return wordElement;
}

// Kolory ruchomego alfabetu w Level 6: samogłoski są czerwone,
// a spółgłoski niebieskie. Zestawy uwzględniają litery danego języka.
function movableLetterColorClass(letter) {
  const vowelsByLanguage = {
    pl: "AĄEĘIOÓUY",
    en: "AEIOU",
    de: "AÄEIOÖUÜY",
  };
  const vowels = vowelsByLanguage[currentLanguage] || vowelsByLanguage.pl;
  const normalizedLetter = letter.toLocaleUpperCase(currentData().locale);
  return vowels.includes(normalizedLetter) ? "is-vowel" : "is-consonant";
}

function createMontessoriSyllableGroups(item, createLetterElement) {
  return item.syllables.map((syllable, syllableIndex) => {
    const group = document.createElement("div");
    group.className = "montessori-syllable-slots";
    [...syllable].forEach((letter, letterIndex) => {
      group.append(createLetterElement(letter, syllableIndex, letterIndex));
    });
    return group;
  });
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
  // Rebus pokazuje dokładnie tyle elementów, ile ma zdanie:
  // [emoji] dla dwóch wyrazów oraz [emoji, emoji] dla trzech.
  const [firstEmoji, lastEmoji] = item.image;
  const firstPicture = document.createElement("span");
  firstPicture.className = "sentence-prompt-emoji";
  firstPicture.textContent = firstEmoji;
  const middleWord = document.createElement("span");
  middleWord.className = "sentence-prompt-word";
  middleWord.append(createSyllabifiedSentenceWord(item.words[1]));
  if (lastEmoji) {
    const lastPicture = document.createElement("span");
    lastPicture.className = "sentence-prompt-emoji";
    lastPicture.textContent = lastEmoji;
    element.replaceChildren(firstPicture, middleWord, lastPicture);
  } else {
    element.replaceChildren(firstPicture, middleWord);
  }
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
  levelTwoWordCount = 0;
  showScreen("levelTwoSetup");
}

function openLevelTwoSyllableSetup(wordCount) {
  levelTwoWordCount = wordCount;
  showScreen("levelTwoSyllableSetup");
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

function openLevelSixSetup() {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  activeLevel = null;
  acceptsKeyboard = false;
  showScreen("levelSixSetup");
}

function openLevelSevenSetup() {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  activeLevel = null;
  acceptsKeyboard = false;
  showScreen("levelSevenSetup");
}

function openLevelEightSetup() {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  activeLevel = null;
  acceptsKeyboard = false;
  showScreen("levelEightSetup");
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

function startLevel(level, wordCount, syllableCount = "all") {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  clearLevelTwoSyllableTimers();
  clearLevelOneExplosion();
  window.speechSynthesis?.cancel();
  activeLevel = level;
  taskIndex = 0;
  trackAnalyticsEvent("level_started", {
    level_number: level,
    task_count: wordCount || 0,
    language: currentLanguage,
  });
  const data = currentData();
  if (level === 1) {
    levelOneLetters = shuffled(data.letters)
      .slice(0, Math.min(wordCount ?? data.letters.length, data.letters.length))
      .map((letter) => ({
        ...letter,
        repetitions: Math.floor(Math.random() * (LEVEL_ONE_MAX_REPETITIONS - LEVEL_ONE_MIN_REPETITIONS + 1)) + LEVEL_ONE_MIN_REPETITIONS,
      }));
    levelOneRepeatCount = 0;
    showScreen("levelOne");
    renderLetters();
  }
  if (level === 2) {
    const words = syllableCount === "all"
      ? data.words
      : data.words.filter((word) => word.syllables.length === Number(syllableCount));
    levelTwoWords = shuffled(words).slice(0, Math.min(wordCount, words.length));
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
  if (level === 6) {
    const wordsForBuilding = data.words.filter(({ word }) => {
      const letterCount = [...word].length;
      return letterCount >= 3 && letterCount <= 6;
    });
    levelSixWords = shuffled(wordsForBuilding).slice(0, Math.min(wordCount, wordsForBuilding.length));
    showScreen("levelSix");
    renderMovableAlphabet();
  }
  if (level === 7) {
    levelSevenCount = wordCount;
    showScreen("levelSeven");
    renderEmojiStory();
  }
  if (level === 8) {
    const wordsWithThreeGaps = data.words.filter(({ word }) => [...word].length >= 4);
    levelEightWords = shuffled(wordsWithThreeGaps).slice(0, Math.min(wordCount, wordsWithThreeGaps.length));
    showScreen("levelEight");
    renderMissingLetterWord();
  }
}

// LEVEL 1: jedna litera jest wpisywana kilka razy z rzędu. Głos nie blokuje
// klawiatury, dzięki czemu dziecko może wpisać całą serię szybko.
function renderLetters() {
  const item = levelOneLetters[taskIndex];
  hideGameHints();
  acceptsKeyboard = true;
  updateProgress(ui.levelOneProgress, taskIndex, levelOneLetters.length);
  ui.singleLetter.textContent = item.letter;
  ui.singleLetter.classList.remove("is-correct");
  ui.repeatedLetterSlots.replaceChildren(...Array.from({ length: item.repetitions }, (_, index) => {
    const slot = document.createElement("span");
    slot.className = "repeated-letter-slot";
    slot.textContent = index < levelOneRepeatCount ? item.letter : "•";
    if (index < levelOneRepeatCount) slot.classList.add("is-filled");
    slot.setAttribute("aria-label", index < levelOneRepeatCount ? item.letter : currentData().ui.emptyLetter);
    return slot;
  }));
  ui.repeatedLetterSlots.setAttribute("aria-label", `${item.letter}: ${levelOneRepeatCount}/${item.repetitions}`);
}

function playLevelOneExplosion(onComplete) {
  const colors = ["#ff4f70", "#ffbd2e", "#3bc8ff", "#7ed957", "#a978ff", "#ff7d28"];
  ui.levelOneExplosion.replaceChildren(...Array.from({ length: 110 }, (_, index) => {
    const particle = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 110 + (Math.random() - .5) * .16;
    const horizontalDistance = 24 + Math.random() * 54;
    const verticalDistance = 18 + Math.random() * 58;
    particle.className = "explosion-particle";
    particle.style.setProperty("--x", `${Math.cos(angle) * horizontalDistance}vw`);
    particle.style.setProperty("--y", `${Math.sin(angle) * verticalDistance}vh`);
    particle.style.setProperty("--turns", String(2 + Math.floor(Math.random() * 4)));
    particle.style.setProperty("--size", `${.55 + Math.random() * .8}rem`);
    particle.style.setProperty("--color", colors[index % colors.length]);
    particle.style.setProperty("--delay", `${Math.random() * .25}s`);
    return particle;
  }));
  ui.levelOneExplosion.classList.remove("is-active");
  // Wymusza ponowne uruchomienie animacji przy kolejnej rozgrywce.
  void ui.levelOneExplosion.offsetWidth;
  ui.levelOneExplosion.classList.add("is-active");
  playConfettiPop();
  levelOneExplosionTimer = window.setTimeout(() => {
    levelOneExplosionTimer = undefined;
    ui.levelOneExplosion.classList.remove("is-active");
    ui.levelOneExplosion.replaceChildren();
    onComplete();
  }, 2000);
}

// LEVEL 4: rozpoznawanie małych liter zapisanych odręcznie.
function renderWrittenLetters() {
  const item = levelFourLetters[taskIndex];
  hideGameHints();
  acceptsKeyboard = true;
  updateProgress(ui.levelFourProgress, taskIndex, levelFourLetters.length);
  ui.writtenLetter.textContent = item.letter.toLocaleLowerCase(currentData().locale);
  ui.writtenLetter.classList.remove("is-correct");
}

// LEVEL 2: wpisywanie całych słów, litera po literze.
function renderWords() {
  const item = levelTwoWords[taskIndex];
  hideGameHints();
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
  if (!acceptsKeyboard || event.ctrlKey || event.metaKey || event.altKey) return;
  if (activeLevel === 6 && montessoriStage === "type" && event.key === "Backspace") {
    event.preventDefault();
    removeMontessoriTypedLetter();
    return;
  }
  if (event.key.length !== 1) return;
  const typed = event.key.toLocaleUpperCase(currentData().locale);

  if (activeLevel === 1) {
    event.preventDefault();
    const item = levelOneLetters[taskIndex];
    if (typed === item.letter) {
      // Głos jest tylko dodatkiem: nie zatrzymuje kolejnych szybkich wpisów.
      queueSpeech(item.sound);
      levelOneRepeatCount += 1;
      renderLetters();
      if (levelOneRepeatCount === item.repetitions) {
        acceptsKeyboard = false;
        ui.singleLetter.classList.add("is-correct");
        levelOneRepeatCount = 0;
        playLevelOneExplosion(nextTask);
      }
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
      // Nie pozwalamy, by głosy i opóźnione sylaby z poprzednich liter
      // ustawiały się w długiej kolejce. Wpisanie kolejnej litery oznacza, że
      // dziecko jest już gotowe na następny krok.
      clearLevelTwoSyllableTimers();
      window.speechSynthesis?.cancel();
      currentSlot.textContent = typed;
      currentSlot.classList.remove("is-current");
      inputIndex += 1;
      const item = levelTwoWords[taskIndex];
      const syllable = completedSyllable(item.syllables, inputIndex);
      if (inputIndex === slots.length) {
        acceptsKeyboard = false;
        // Na końcu odczytujemy od razu całe ułożone słowo. Nie dodajemy już
        // litery ani sylaby do kolejki, dzięki czemu przejście jest płynne.
        let hasAdvanced = false;
        const advance = () => {
          if (hasAdvanced || activeLevel !== 2) return;
          hasAdvanced = true;
          levelThreeAdvanceTimer = undefined;
          nextTask();
        };
        const speakCompletedWord = () => {
          if (!queueSpeech(item.word.toLocaleLowerCase(currentData().locale), advance)) {
            levelThreeAdvanceTimer = window.setTimeout(advance, 1300);
          }
        };
        speakCompletedWord();
      } else {
        speakTypedLetter(typed, syllable);
        slots[inputIndex].classList.add("is-current");
      }
    } else {
      playFeedback("error");
    }
  }

  if (activeLevel === 6 && montessoriStage === "type") {
    const item = levelSixWords[taskIndex];
    if (montessoriTypedLetters.length === [...item.word].length) return;
    montessoriTypedLetters.push(typed);
    montessoriInputIndex = montessoriTypedLetters.length;
    renderMontessoriTyping(item);
    if (montessoriTypedLetters.join("") === item.word) {
      finishMontessoriWord(item);
    }
  }
}

function removeMontessoriTypedLetter() {
  if (activeLevel !== 6 || montessoriStage !== "type" || montessoriTypedLetters.length === 0) return;
  montessoriTypedLetters.pop();
  montessoriInputIndex = montessoriTypedLetters.length;
  renderMontessoriTyping(levelSixWords[taskIndex]);
}

// LEVEL 3: kliknięcie oczekiwanej sylaby buduje słowo.
function renderSyllables() {
  const item = levelThreeWords[taskIndex];
  hideGameHints();
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
  hideGameHints();
  builtSentenceWords = [];
  setSentencePicture(item);
  updateProgress(ui.levelFiveProgress, taskIndex, levelFiveSentences.length);
  renderBuiltSentence(item);
  ui.sentenceChoices.replaceChildren(
    ...shuffled(item.words).map((word) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "sentence-choice";
      button.setAttribute("aria-label", word);
      button.append(createSyllabifiedSentenceWord(word));
      button.addEventListener("click", () => chooseSentenceWord(word, button, item));
      return button;
    }),
  );
}

function renderBuiltSentence(item) {
  ui.builtSentence.replaceChildren(...builtSentenceWords.map((word, index) => {
    const piece = document.createElement("span");
    piece.className = "sentence-piece";
    piece.append(createSyllabifiedSentenceWord(word, index === item.words.length - 1));
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

// LEVEL 7: dziecko wybiera bohatera, a potem jedno z krótkich wydarzeń,
// które rzeczywiście do niego pasuje.
function renderEmojiStory() {
  hideGameHints();
  emojiStorySubject = null;
  emojiStoryAction = null;
  updateProgress(ui.levelSevenProgress, taskIndex, levelSevenCount);
  ui.emojiStorySentence.replaceChildren();
  ui.emojiStoryReadPanel.classList.add("is-hidden");
  ui.emojiStoryParentButton.classList.add("is-hidden");
  ui.emojiStoryReadButton.disabled = false;
  renderEmojiStorySubjects();
}

function renderEmojiStoryCards(cards, onChoose) {
  const group = document.createElement("div");
  group.className = "emoji-story-group";
  group.append(...shuffled(cards).map((card) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "emoji-story-card";
    button.innerHTML = `<span class="emoji-story-card-emoji" aria-hidden="true">${card.emoji}</span><span>${card.word}</span>`;
    button.addEventListener("click", () => onChoose(card));
    return button;
  }));
  ui.emojiStoryChoices.replaceChildren(group);
}

function renderEmojiStorySubjects() {
  ui.levelSevenInstruction.textContent = currentData().ui.storyChooseWho;
  renderEmojiStoryCards(emojiStories[currentLanguage].map((story) => story.subject), chooseEmojiStorySubject);
}

function chooseEmojiStorySubject(subject) {
  const story = emojiStories[currentLanguage].find((item) => item.subject.word === subject.word);
  emojiStorySubject = story.subject;
  emojiStoryAction = null;
  ui.levelSevenInstruction.textContent = currentData().ui.storyChooseWhat;
  renderEmojiStorySentence();
  renderEmojiStoryCards(story.actions, chooseEmojiStoryAction);
}

function chooseEmojiStoryAction(action) {
  emojiStoryAction = action;
  renderEmojiStorySentence();
  ui.emojiStoryChoices.replaceChildren();
  ui.emojiStoryReadPanel.classList.remove("is-hidden");
}

function renderEmojiStorySentence() {
  ui.emojiStorySentence.replaceChildren(...[emojiStorySubject, emojiStoryAction].filter(Boolean).map((card, index, cards) => {
    const piece = document.createElement("span");
    piece.className = "emoji-story-piece";
    const emoji = document.createElement("span");
    emoji.className = "emoji-story-piece-emoji";
    emoji.setAttribute("aria-hidden", "true");
    emoji.textContent = card.emoji;
    const words = card.word.split(" ");
    words.forEach((value, wordIndex) => {
      piece.append(createSyllabifiedSentenceWord(
        value,
        index === cards.length - 1 && wordIndex === words.length - 1,
      ));
    });
    piece.prepend(emoji);
    return piece;
  }));
}

function readEmojiStoryToParent() {
  const sentence = [emojiStorySubject, emojiStoryAction].filter(Boolean).map((card) => card.word).join(" ");
  // Nie oceniamy wymowy ani nie nagrywamy głosu dziecka. Przycisk tylko
  // zamienia chwilę czytania w prosty rytuał z obecnym rodzicem.
  speak(sentence);
  ui.emojiStoryParentButton.classList.remove("is-hidden");
  ui.emojiStoryReadButton.disabled = true;
}

// LEVEL 6: obrazek prowadzi od znaczenia przez ruchomy alfabet do zapisu
// i samodzielnego czytania. Błąd pozostaje widoczny, aby dziecko mogło go
// poprawić samo — to cyfrowy odpowiednik kontroli błędu.
const LEVEL_SIX_ADVANCE_MS = 2000;

function scheduleLevelSixAdvance(callback) {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = window.setTimeout(() => {
    levelThreeAdvanceTimer = undefined;
    if (activeLevel === 6) callback();
  }, LEVEL_SIX_ADVANCE_MS);
}

function renderMovableAlphabet() {
  const item = levelSixWords[taskIndex];
  hideGameHints();
  builtMovableLetters = [];
  movableWordComplete = false;
  montessoriStage = "build";
  montessoriInputIndex = 0;
  const lettersInWord = [...item.word];
  const distractorLetters = shuffled(
    currentData().letters
      .map(({ letter }) => letter)
      .filter((letter) => !lettersInWord.includes(letter)),
  ).slice(0, Math.max(2, Math.ceil(lettersInWord.length / 2)));
  movableLetterChoices = shuffled([...lettersInWord, ...distractorLetters])
    .map((letter, index) => ({ id: `${letter}-${index}`, letter }));

  setPicture(ui.levelSixImage, item);
  updateProgress(ui.levelSixProgress, taskIndex, levelSixWords.length);
  ui.levelSixInstruction.textContent = "";
  ui.montessoriTyping.classList.add("is-hidden");
  ui.montessoriBackspaceButton.classList.add("is-hidden");
  ui.montessoriTyping.replaceChildren();
  ui.movableLetterBank.classList.remove("is-hidden");
  ui.movableClearButton.classList.remove("is-hidden");
  renderMovableWord(item);
}

function renderMovableWord(item) {
  const builtText = builtMovableLetters.map(({ letter }) => letter).join("");
  const isMismatched = !item.word.startsWith(builtText);
  let wordIndex = 0;
  ui.movableHint.textContent = "";
  ui.movableBuiltWord.replaceChildren(...createMontessoriSyllableGroups(item, (expectedLetter) => {
    const index = wordIndex;
    wordIndex += 1;
    const choice = builtMovableLetters[index];
    if (!choice) {
      const slot = document.createElement("span");
      slot.className = `movable-empty-slot ${movableLetterColorClass(expectedLetter)}`;
      slot.setAttribute("aria-hidden", "true");
      return slot;
    }

    const letter = document.createElement("button");
    letter.type = "button";
    letter.className = `movable-built-letter ${movableLetterColorClass(expectedLetter)}`;
    if (isMismatched && expectedLetter !== choice.letter) letter.classList.add("is-mismatched");
    letter.textContent = choice.letter;
    letter.setAttribute("aria-label", `${currentData().ui.movableRemove}: ${choice.letter}`);
    letter.disabled = movableWordComplete;
    letter.addEventListener("click", () => {
      builtMovableLetters.splice(index, 1);
      renderMovableWord(item);
    });
    return letter;
  }));

  const chosenIds = new Set(builtMovableLetters.map(({ id }) => id));
  ui.movableLetterBank.replaceChildren(...movableLetterChoices.map((choice) => {
    const letter = document.createElement("button");
    letter.type = "button";
    letter.className = `movable-letter ${movableLetterColorClass(choice.letter)}`;
    letter.textContent = choice.letter;
    letter.disabled = movableWordComplete || chosenIds.has(choice.id);
    letter.addEventListener("click", () => chooseMovableLetter(choice, item));
    return letter;
  }));
  ui.movableClearButton.disabled = movableWordComplete || builtMovableLetters.length === 0;
}

function chooseMovableLetter(choice, item) {
  if (movableWordComplete || builtMovableLetters.some(({ id }) => id === choice.id)) return;
  builtMovableLetters.push(choice);
  const builtText = builtMovableLetters.map(({ letter }) => letter).join("");

  if (builtText === item.word) {
    movableWordComplete = true;
    montessoriStage = "buildComplete";
    acceptsKeyboard = false;
    renderMovableWord(item);
    ui.movableLetterBank.classList.add("is-hidden");
    ui.movableClearButton.classList.add("is-hidden");
    scheduleLevelSixAdvance(() => startMontessoriTyping(item));
    return;
  }
  renderMovableWord(item);
}

function startMontessoriTyping(item) {
  levelThreeAdvanceTimer = undefined;
  montessoriStage = "type";
  montessoriInputIndex = 0;
  montessoriTypedLetters = [];
  acceptsKeyboard = true;
  ui.levelSixInstruction.textContent = "";
  ui.movableHint.textContent = "";
  ui.movableLetterBank.classList.add("is-hidden");
  ui.movableClearButton.classList.add("is-hidden");
  ui.movableBuiltWord.replaceChildren(...createMontessoriSyllableGroups(item, (letterValue) => {
    const letter = document.createElement("span");
    letter.className = `movable-built-letter is-complete ${movableLetterColorClass(letterValue)}`;
    letter.textContent = letterValue;
    return letter;
  }));
  ui.montessoriTyping.classList.remove("is-hidden");
  ui.montessoriBackspaceButton.classList.remove("is-hidden");
  renderMontessoriTyping(item);
}

function renderMontessoriTyping(item) {
  let wordIndex = 0;
  ui.montessoriTyping.replaceChildren(...createMontessoriSyllableGroups(item, (letterValue) => {
    const index = wordIndex;
    wordIndex += 1;
    const slot = document.createElement("span");
    slot.className = `montessori-typed-slot ${movableLetterColorClass(letterValue)}`;
    slot.dataset.letter = letterValue;
    slot.setAttribute("aria-label", currentData().ui.emptyLetter);
    const typedLetter = montessoriTypedLetters[index];
    if (typedLetter) {
      slot.textContent = typedLetter;
      if (typedLetter !== letterValue) slot.classList.add("is-mismatched");
    }
    if (index === montessoriInputIndex) slot.classList.add("is-current");
    return slot;
  }));
}

function finishMontessoriWord(item) {
  acceptsKeyboard = false;
  montessoriStage = "typeComplete";
  ui.montessoriBackspaceButton.classList.add("is-hidden");
  renderMontessoriTyping(item);
  scheduleLevelSixAdvance(nextTask);
}

function chooseMissingIndexes(word) {
  return shuffled([...word].map((_, index) => index)).slice(0, 3).sort((a, b) => a - b);
}

function syllableColor(index, count) {
  const colorClass = syllableClass(index, count);
  if (colorClass === "syllable-one") return "#d22727";
  if (colorClass === "syllable-two") return "#1769c2";
  return "#111";
}

function renderMissingLetterWord() {
  const text = levelEightCopy[currentLanguage];
  const item = levelEightWords[taskIndex];
  hideGameHints();
  levelEightMissingIndexes = chooseMissingIndexes(item.word);
  updateProgress(ui.levelEightProgress, taskIndex, levelEightWords.length);
  setPicture(ui.levelEightImage, item);
  ui.levelEightMessage.textContent = "";
  ui.levelEightMessage.classList.remove("is-error");
  ui.levelEightSubmit.disabled = false;
  ui.levelEightSkipButton.disabled = false;
  const letters = [...item.word];
  let syllableIndex = 0;
  let lettersInSyllable = 0;
  ui.levelEightWord.replaceChildren(...letters.map((letter, index) => {
    const colorClass = syllableClass(syllableIndex, item.syllables.length);
    const color = syllableColor(syllableIndex, item.syllables.length);
    if (!levelEightMissingIndexes.includes(index)) {
      const knownLetter = document.createElement("span");
      knownLetter.className = `missing-letter-known ${colorClass}`;
      knownLetter.style.color = color;
      knownLetter.textContent = letter;
      lettersInSyllable += 1;
      if (lettersInSyllable === [...item.syllables[syllableIndex]].length) {
        syllableIndex += 1;
        lettersInSyllable = 0;
      }
      return knownLetter;
    }
    const input = document.createElement("input");
    input.className = `missing-letter-input ${colorClass}`;
    input.style.color = color;
    input.style.borderBottomColor = color;
    input.type = "text";
    input.maxLength = 1;
    input.autocomplete = "off";
    input.autocapitalize = "characters";
    input.spellcheck = false;
    input.setAttribute("aria-label", `${text.input} ${levelEightMissingIndexes.indexOf(index) + 1}`);
    input.addEventListener("input", () => {
      input.value = input.value.toLocaleUpperCase(currentData().locale);
      if (input.value) {
        const inputs = [...ui.levelEightWord.querySelectorAll("input")];
        inputs[inputs.indexOf(input) + 1]?.focus();
      }
    });
    lettersInSyllable += 1;
    if (lettersInSyllable === [...item.syllables[syllableIndex]].length) {
      syllableIndex += 1;
      lettersInSyllable = 0;
    }
    return input;
  }));
  ui.levelEightWord.querySelector("input")?.focus();
}

function submitMissingLetterWord(event) {
  event.preventDefault();
  if (activeLevel !== 8) return;
  const text = levelEightCopy[currentLanguage];
  const item = levelEightWords[taskIndex];
  const inputs = [...ui.levelEightWord.querySelectorAll("input")];
  const typedLetters = inputs.map((input) => input.value.trim().toLocaleUpperCase(currentData().locale));
  ui.levelEightMessage.classList.remove("is-error");
  if (typedLetters.some((letter) => !letter)) {
    ui.levelEightMessage.textContent = text.empty;
    ui.levelEightMessage.classList.add("is-error");
    return;
  }
  const expectedLetters = levelEightMissingIndexes.map((index) => [...item.word][index]);
  if (typedLetters.some((letter, index) => letter !== expectedLetters[index])) {
    ui.levelEightMessage.textContent = text.incorrect;
    ui.levelEightMessage.classList.add("is-error");
    playFeedback("error");
    return;
  }
  inputs.forEach((input) => { input.disabled = true; });
  ui.levelEightSubmit.disabled = true;
  ui.levelEightSkipButton.disabled = true;
  ui.levelEightMessage.textContent = text.done;
  speakWord(item.word);
  levelThreeAdvanceTimer = window.setTimeout(() => {
    levelThreeAdvanceTimer = undefined;
    if (activeLevel === 8) nextTask();
  }, LEVEL_EIGHT_ADVANCE_MS);
}

function skipLetterWords() {
  if (activeLevel !== 8) return;
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  nextTask();
}

function nextTask() {
  taskIndex += 1;
  const max = activeLevel === 1 ? levelOneLetters.length : activeLevel === 2 ? levelTwoWords.length : activeLevel === 3 ? levelThreeWords.length : activeLevel === 4 ? levelFourLetters.length : activeLevel === 5 ? levelFiveSentences.length : activeLevel === 6 ? levelSixWords.length : activeLevel === 7 ? levelSevenCount : levelEightWords.length;
  if (taskIndex === max) {
    acceptsKeyboard = false;
    trackAnalyticsEvent("level_completed", {
      level_number: activeLevel,
      task_count: max,
      language: currentLanguage,
    });
    const showComplete = () => {
      showScreen("complete");
      if (activeLevel === 6) ui.completeTitle.textContent = currentData().ui.levelSixComplete;
      else playApplause();
    };
    showComplete();
    return;
  }
  if (activeLevel === 1) renderLetters();
  if (activeLevel === 2) renderWords();
  if (activeLevel === 3) renderSyllables();
  if (activeLevel === 4) renderWrittenLetters();
  if (activeLevel === 5) renderSentences();
  if (activeLevel === 6) renderMovableAlphabet();
  if (activeLevel === 7) renderEmojiStory();
  if (activeLevel === 8) renderMissingLetterWord();
}

document.querySelectorAll("[data-start-level]").forEach((button) => {
  button.addEventListener("click", async () => {
    const level = Number(button.dataset.startLevel);
    if (level >= 5) {
      if (paymentsEnabled()) await refreshPaymentStatus();
      if (paymentState.status?.hasFullAccess) {
        openSelectedLevel(level);
        return;
      }
      await showPaidAccess(level);
      return;
    }
    openSelectedLevel(level);
  });
});
document.querySelectorAll("[data-level-two-count]").forEach((button) => {
  button.addEventListener("click", () => openLevelTwoSyllableSetup(Number(button.dataset.levelTwoCount)));
});
document.querySelectorAll("[data-level-two-syllables]").forEach((button) => {
  button.addEventListener("click", () => startLevel(2, levelTwoWordCount, button.dataset.levelTwoSyllables));
});
document.querySelectorAll("[data-level-three-count]").forEach((button) => {
  button.addEventListener("click", () => startLevel(3, Number(button.dataset.levelThreeCount)));
});
document.querySelectorAll("[data-level-five-count]").forEach((button) => {
  button.addEventListener("click", () => startLevel(5, Number(button.dataset.levelFiveCount)));
});
document.querySelectorAll("[data-level-six-count]").forEach((button) => {
  button.addEventListener("click", () => startLevel(6, Number(button.dataset.levelSixCount)));
});
document.querySelectorAll("[data-level-seven-count]").forEach((button) => {
  button.addEventListener("click", () => startLevel(7, Number(button.dataset.levelSevenCount)));
});
document.querySelectorAll("[data-level-eight-letter-count]").forEach((button) => {
  button.addEventListener("click", () => startLevel(8, Number(button.dataset.levelEightLetterCount)));
});
document.querySelectorAll("[data-letter-count]").forEach((button) => {
  button.addEventListener("click", () => startLevel(letterSetupLevel, Number(button.dataset.letterCount)));
});
ui.gameHintButtons.forEach((button) => button.addEventListener("click", () => toggleGameHint(button)));
document.querySelectorAll("[data-game-hint-close]").forEach((button) => button.addEventListener("click", hideGameHints));
ui.movableClearButton.addEventListener("click", () => {
  if (movableWordComplete || activeLevel !== 6 || montessoriStage !== "build") return;
  builtMovableLetters = [];
  renderMovableWord(levelSixWords[taskIndex]);
});
ui.montessoriBackspaceButton.addEventListener("click", removeMontessoriTypedLetter);
ui.emojiStoryReadButton.addEventListener("click", readEmojiStoryToParent);
ui.emojiStoryParentButton.addEventListener("click", nextTask);
ui.levelEightForm.addEventListener("submit", submitMissingLetterWord);
ui.levelEightSkipButton.addEventListener("click", skipLetterWords);
document.querySelectorAll("[data-go-menu]").forEach((button) => button.addEventListener("click", goToMenu));
document.querySelectorAll("[data-open-reading-game]").forEach((button) => button.addEventListener("click", () => openReadingGame()));
document.querySelectorAll("[data-go-library]").forEach((button) => button.addEventListener("click", () => goToLibrary()));
document.querySelector("#analytics-consent-accept")?.addEventListener("click", () => setAnalyticsConsent(true));
document.querySelector("#analytics-consent-reject")?.addEventListener("click", () => setAnalyticsConsent(false));
document.querySelector("#paid-access-close")?.addEventListener("click", closePaidAccess);
document.querySelector("#parent-account-button")?.addEventListener("click", () => showPaidAccess(null));
document.querySelector("#paid-access-login")?.addEventListener("click", sendParentMagicLink);
document.querySelector("#paid-access-buy")?.addEventListener("click", beginCheckout);
document.querySelector("#paid-access-logout")?.addEventListener("click", () => {
  savePaymentSession(null);
  paymentState.status = null;
  renderPaymentDialog();
  setPaymentMessage("Możesz zalogować się na inne konto rodzica.");
});
document.querySelector("#paid-access-dialog")?.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) closePaidAccess();
});
ui.languageSelects.forEach((select) => select.addEventListener("change", () => {
  currentLanguage = select.value;
  clearLevelTwoSyllableTimers();
  window.speechSynthesis?.cancel();
  saveLanguage();
  translateInterface();
}));
document.addEventListener("keydown", handleKeyboard);
window.addEventListener("popstate", () => {
  const game = new URLSearchParams(window.location.search).get("gra");
  if (game === "czytanie") openReadingGame({ updateUrl: false });
  else goToLibrary({ updateUrl: false });
});
if (savedAnalyticsConsent() === "granted") {
  document.querySelector("#analytics-consent")?.classList.add("is-hidden");
  enableGoogleAnalytics();
} else if (savedAnalyticsConsent() === "denied") {
  document.querySelector("#analytics-consent")?.classList.add("is-hidden");
}
translateInterface();
restoreMagicLinkSession();
if (new URLSearchParams(window.location.search).get("gra") === "czytanie") openReadingGame({ updateUrl: false });
else goToLibrary({ updateUrl: false });
