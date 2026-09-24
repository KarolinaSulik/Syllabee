// Dane Level 1. Aby dodać ćwiczenie, dopisz kolejną literę.
const letters = [
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
const words = [
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

const syllableWords = words.filter((word) => word.syllables.length >= 2);

// Krótkie zdania do Level 5. Każde ma maksymalnie trzy wyrazy.
const sentences = [
  { words: ["KOT", "SPI"], image: "🐱💤", imageAlt: "kot spi" },
  { words: ["WILK", "SPI"], image: "🐺💤", imageAlt: "wilk spi" },
  { words: ["MAMA", "MA", "LODY"], image: "👱🏻‍♀️🍦", imageAlt: "mama ma lody" },
  { words: ["TATA", "MA", "AUTO"], image: "🧔🏻‍♂️🚗", imageAlt: "tata ma auto" },
  { words: ["ROBOT", "MA", "KASK"], image: "🤖⛑️", imageAlt: "robot ma kask" },
  { words: ["PIRAT", "MA", "SKARB"], image: "🏴‍☠️💰", imageAlt: "pirat ma skarb" },
];

const screens = {
  menu: document.querySelector("#menu-screen"),
  levelTwoSetup: document.querySelector("#level-two-setup-screen"),
  levelThreeSetup: document.querySelector("#level-three-setup-screen"),
  letterSetup: document.querySelector("#letter-setup-screen"),
  levelOne: document.querySelector("#level-one-screen"),
  levelTwo: document.querySelector("#level-two-screen"),
  levelThree: document.querySelector("#level-three-screen"),
  levelFour: document.querySelector("#level-four-screen"),
  levelFive: document.querySelector("#level-five-screen"),
  complete: document.querySelector("#complete-screen"),
};

const ui = {
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

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.add("is-hidden"));
  screens[name].classList.remove("is-hidden");
}

function goToMenu() {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
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
function playFeedback(type) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  audioContext ||= new AudioContextClass();
  if (audioContext.state === "suspended") audioContext.resume();

  const notes = type === "correct" ? [660, 880] : [170, 120];
  const now = audioContext.currentTime;

  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type === "correct" ? "sine" : "triangle";
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

// Używamy tylko głosu oznaczonego jako polski. To zapobiega wymowie przez
// przypadkowy głos systemowy, np. niemiecki lub angielski.
function speakPolish(text) {
  if (!("speechSynthesis" in window)) return false;

  const polishVoices = window.speechSynthesis.getVoices().filter((voice) =>
    voice.lang.toLocaleLowerCase().startsWith("pl"),
  );
  // Na tym Macu jest polski głos Zosia (pl_PL), więc wybieramy go w pierwszej
  // kolejności zamiast przypadkowego głosu zwróconego przez przeglądarkę.
  const polishVoice = polishVoices.find((voice) => /zosia/i.test(voice.name)) || polishVoices[0];
  if (!polishVoice) return false;

  window.speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "pl-PL";
  speech.voice = polishVoice;
  speech.rate = 0.8;
  window.speechSynthesis.speak(speech);
  return true;
}

// Level 1 odczytuje nazwę poprawnie wpisanej litery po polsku.
function speakLetter(letterName) {
  if (!speakPolish(letterName)) playFeedback("correct");
}

function speakWord(word) {
  speakPolish(word.toLocaleLowerCase("pl-PL"));
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

function openLetterSetup(level) {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  activeLevel = null;
  acceptsKeyboard = false;
  letterSetupLevel = level;
  screens.letterSetup.dataset.level = String(level);
  ui.letterSetupIcon.textContent = level === 1 ? "🅰️" : "✍️";
  ui.letterSetupTitle.textContent = level === 1 ? "Ile liter?" : "Ile liter pisanych?";
  ui.letterSetupDescription.textContent = "Wybierz liczbę liter do przećwiczenia.";
  showScreen("letterSetup");
}

function startLevel(level, wordCount) {
  window.clearTimeout(levelThreeAdvanceTimer);
  levelThreeAdvanceTimer = undefined;
  activeLevel = level;
  taskIndex = 0;
  if (level === 1) {
    levelOneLetters = shuffled(letters).slice(0, Math.min(wordCount ?? letters.length, letters.length));
    showScreen("levelOne");
    renderLetters();
  }
  if (level === 2) {
    levelTwoWords = shuffled(words).slice(0, Math.min(wordCount, words.length));
    showScreen("levelTwo");
    renderWords();
  }
  if (level === 3) {
    levelThreeWords = shuffled(syllableWords).slice(0, Math.min(wordCount, syllableWords.length));
    showScreen("levelThree");
    renderSyllables();
  }
  if (level === 4) {
    levelFourLetters = shuffled(letters).slice(0, Math.min(wordCount ?? letters.length, letters.length));
    showScreen("levelFour");
    renderWrittenLetters();
  }
  if (level === 5) {
    levelFiveSentences = shuffled(sentences);
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
  ui.writtenLetter.textContent = item.letter.toLocaleLowerCase("pl-PL");
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
      slot.setAttribute("aria-label", "Pusta litera");
      group.append(slot);
    });
    ui.letterSlots.append(group);
  });
  ui.letterSlots.querySelector(".letter-slot")?.classList.add("is-current");
}

function handleKeyboard(event) {
  if (!acceptsKeyboard || event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return;
  const typed = event.key.toLocaleUpperCase("pl-PL");

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
      playFeedback("correct");
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
      playFeedback("correct");
      inputIndex += 1;
      if (inputIndex === slots.length) {
        acceptsKeyboard = false;
        speakWord(levelTwoWords[taskIndex].word);
        levelThreeAdvanceTimer = window.setTimeout(() => {
          levelThreeAdvanceTimer = undefined;
          nextTask();
        }, 1300);
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
  setPicture(ui.levelFiveImage, item);
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
document.querySelectorAll("[data-letter-count]").forEach((button) => {
  button.addEventListener("click", () => startLevel(letterSetupLevel, Number(button.dataset.letterCount)));
});
document.querySelectorAll("[data-go-menu]").forEach((button) => button.addEventListener("click", goToMenu));
document.addEventListener("keydown", handleKeyboard);
