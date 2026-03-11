let secretWord = "";

const easyWords = ["flag", "star", "nato", "visa", "nike", "army", "oil"];
const mediumWords = ["faithful", "liberty", "anthem", "unity", "proud"];
const hardWords = ["jingoistic", "patriotism", "freedom", "veteran"];

let guessedLetters = [];


function selectDifficulty(diff) {
  // Hide the popup
  document.getElementById("difficultyPopup").style.display = "none";

  if (diff === "easy") {
    secretWord = easyWords[Math.floor(Math.random() * easyWords.length)];
  } else if (diff === "medium") {
    secretWord = mediumWords[Math.floor(Math.random() * mediumWords.length)];
  } else if (diff === "hard") {
    secretWord = hardWords[Math.floor(Math.random() * hardWords.length)];
  }

  console.log(secretWord);

  // Start the game with the selected difficulty
  startGame(diff);
}

// Optionally, show the popup again if you want to restart
function showDifficultyPopup() {
  document.getElementById("difficultyPopup").style.display = "flex";
}

// Make sure the popup is visible on page load
document.addEventListener("DOMContentLoaded", function () {
  showDifficultyPopup();
});

function startGame(diff) {
  guessedLetters = []
updateWordDisplay()

  
}




function submitGuess() {
  var letter = document.getElementById("letterInput").value.toLowerCase();

  if (letter === "") return;

  guessedLetters.push(letter);
  updateWordDisplay();

  document.getElementById("letterInput").value = "";
  document.getElementById("wrongLetters").textContent = guessedLetters.join(", ");
}


//got from Kilgore's demo
function updateWordDisplay() {
    let display = ""; // This variable will hold the string we build for the screen

    // Loop through every letter in the secret word
    // i starts at 0 because strings use zero-based indexing
    // The loop will run once for each character in the word
    for (let i = 0; i < secretWord.length; i++) {
      // Get the letter at the current position in the word
      // charAt(i) returns the character located at index i
      let letter = secretWord.charAt(i);

      // Check if this letter exists in the guessedLetters array
      // includes() returns true if the letter exists in the array
      if (guessedLetters.includes(letter)) {
        // If the letter has been guessed,
        // add the letter to the display string
        // A space is added so the letters appear spaced out
        display += letter + " ";
      } else {
        // If the letter has NOT been guessed,
        // add an underscore instead
        display += "_ ";
      }
    }

    document.getElementById("wordDisplay").textContent = display;
  }

  //from the web
  document
    .getElementById("letterInput")
    .addEventListener("keydown", function (e) {
      if (e.key === "Enter") submitGuess();
    });