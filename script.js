let secretWord = "";

const easyWords = [
  "flag",
  "star",
  "nato",
  "visa",
  "nike",
  "army",
  "oil",
  "hero",
  "vote",
  "navy",
  "bold",
  "land",
];
const mediumWords = [
  "faithful",
  "liberty",
  "anthem",
  "unity",
  "proud",
  "justice",
  "soldier",
  "patriot",
  "courage",
  "senator",
];
const hardWords = [
 
  "patriotism",
  "freedom",
  "veteran",
  "allegiance",
  "revolution",
  "citizenship",
  "sovereignty",
];

let lives = 6;
let guessedLetters = [];

document.addEventListener("DOMContentLoaded", function () {
  showDifficultyPopup();
});

document
  .getElementById("letterInput")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") submitGuess();
  });

function showDifficultyPopup() {
  document.getElementById("difficultyPopup").style.display = "flex";
}

function selectDifficulty(diff) {
  document.getElementById("difficultyPopup").style.display = "none";
  if (diff === "easy") {
    secretWord = easyWords[Math.floor(Math.random() * easyWords.length)];
  } else if (diff === "medium") {
    secretWord = mediumWords[Math.floor(Math.random() * mediumWords.length)];
  } else if (diff === "hard") {
    secretWord = hardWords[Math.floor(Math.random() * hardWords.length)];
  }
  startGame(diff);
}

function startGame(diff) {
  guessedLetters = [];
  lives = 6;
  document.getElementById("guessedLetters").textContent = "";
  document.getElementById("message").textContent = "";
  updateHealthBar();
  updateWordDisplay();
}

function submitGuess() {
  var letter = document.getElementById("letterInput").value.toLowerCase();
  if (letter === "") return;
  if (guessedLetters.includes(letter)) {
    document.getElementById("message").textContent = "Already Guessed!";
  } else {
    if (secretWord.includes(letter)) {
      guessedLetters.push(letter);
      updateWordDisplay();
      document.getElementById("letterInput").value = "";
      document.getElementById("guessedLetters").textContent =
        guessedLetters.join(", ");
    } else {
      lives--;
      document.getElementById("lives").textContent = lives;
      guessedLetters.push(letter);
      updateWordDisplay();
      document.getElementById("letterInput").value = "";
      document.getElementById("guessedLetters").textContent =
        guessedLetters.join(", ");
    }
  }
}

function updateWordDisplay() {
  let display = "";
  //loop
  for (let i = 0; i < secretWord.length; i++) {
    let letter = secretWord.charAt(i); //get the letter
    display += guessedLetters.includes(letter) ? letter + " " : "_ "; //check if guessed
  } 
  document.getElementById("lives").textContent = lives;
  document.getElementById("wordDisplay").textContent = display;
  updateHealthBar();
  if (!display.includes("_")) {
    document.getElementById("message").textContent = "You Win!";
  } else if (lives <= 0) {
    document.getElementById("message").textContent =
      "You Lose! The word was " + secretWord;
  }
}

function restartGame() {
  showDifficultyPopup();
  startGame();
}

function updateHealthBar() {
  let healthPercent = (lives / 6) * 100; //calculate percentage
  document.getElementById("healthBar").style.width = healthPercent + "%"; //updates width
  
  //changes color accordingly
  if (healthPercent > 60) {
    document.getElementById("healthBar").style.background =
      "linear-gradient(90deg, #B22234, #f5f5f5, #3C3B6E)";
  } else if (healthPercent > 30) {
    document.getElementById("healthBar").style.background =
      "linear-gradient(90deg, #8b0000, #cccccc, #1a1a5e)";
  } else {
    document.getElementById("healthBar").style.background =
      "linear-gradient(90deg, #ff0000, #ffcccc, #000033)";
  }
}

