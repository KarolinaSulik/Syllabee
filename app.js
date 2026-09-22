/*
 * Każdy obiekt to niezależne zadanie. W przyszłości można tu dodawać:
 * - type: "word" dla słów,
 * - image: "assets/kot.png" dla ilustracji,
 * - audio: "assets/ma.mp3" dla wymowy.
 */
const tasks = [
  { id: "ma", type: "syllable", text: "MA", image: null, audio: null },
  { id: "ta", type: "syllable", text: "TA", image: null, audio: null },
  { id: "la", type: "syllable", text: "LA", image: null, audio: null },
  { id: "pa", type: "syllable", text: "PA", image: null, audio: null },
];

const elements = {
  letters: document.querySelector("#letters"),
  message: document.querySelector("#message"),
  progress: document.querySelector("#progress"),
};

let taskIndex = 0;
let letterIndex = 0;
let acceptingInput = true;

function currentTask() {
  return tasks[taskIndex];
}

function renderTask() {
  const task = currentTask();
  letterIndex = 0;
  acceptingInput = true;

  elements.progress.textContent = `Zadanie ${taskIndex + 1} z ${tasks.length}`;
  elements.letters.replaceChildren(
    ...[...task.text].map((letter, index) => {
      const span = document.createElement("span");
      span.className = "letter" + (index === 0 ? " is-current" : "");
      span.textContent = letter;
      span.setAttribute("aria-label", `Litera ${index + 1}: ${letter}`);
      return span;
    }),
  );
  elements.message.classList.remove("is-success");
  elements.message.textContent = "Naciśnij litery po kolei.";
}

function markCorrectLetter() {
  const letters = elements.letters.children;
  const completedLetter = letters[letterIndex];
  completedLetter.classList.remove("is-current");
  completedLetter.classList.add("is-correct");
  letterIndex += 1;

  if (letterIndex < letters.length) {
    letters[letterIndex].classList.add("is-current");
    return;
  }

  finishTask();
}

function finishTask() {
  acceptingInput = false;
  elements.message.classList.add("is-success");
  elements.message.textContent = "✓";

  window.setTimeout(() => {
    taskIndex = (taskIndex + 1) % tasks.length;
    renderTask();
  }, 900);
}

function handleKeydown(event) {
  if (!acceptingInput || event.ctrlKey || event.metaKey || event.altKey) return;

  const expectedLetter = currentTask().text[letterIndex];
  if (event.key.toLocaleUpperCase("pl-PL") === expectedLetter) {
    markCorrectLetter();
  }
}

document.addEventListener("keydown", handleKeydown);
renderTask();
