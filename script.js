let secretWord = "";

const easyWords = ["flag", "star", "nato", "visa", "nike", "army", "oil"];
const mediumWords = ["faithful", "liberty", "anthem", "unity", "proud"];
const hardWords = ["jingoistic", "patriotism", "freedom", "veteran"];
let lives = 6
let guessedLetters = [];




// Make sure the popup is visible on page load
document.addEventListener("DOMContentLoaded", function () {
  showDifficultyPopup();
});


//from the web
document
  .getElementById("letterInput")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") submitGuess();
  });



function showDifficultyPopup() {
  document.getElementById("difficultyPopup").style.display = "flex";
}


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

function startGame(diff) {
  guessedLetters = [];
  lives = 6
  updateWordDisplay();
  
}

// Optionally, show the popup again if you want to restart

function submitGuess() {
  var letter = document.getElementById("letterInput").value.toLowerCase();

  if (letter === "") return;
  //check to see if letter guessed already
  //update the guessed letter list in HTML
  if (guessedLetters.includes(letter)) {
    //if already guessed:
    document.getElementById("message").textContent = "Already Guessed!";
  } else {
    if (secretWord.includes(letter)) {
        guessedLetters.push(letter);
       updateWordDisplay();

        document.getElementById("letterInput").value = "";
        document.getElementById("guessedLetters").textContent =
        guessedLetters.join(", ");
    } else {
      
      lives--
      document.getElementById("lives").textContent = lives;
      guessedLetters.push(letter);
      updateWordDisplay();

      document.getElementById("letterInput").value = "";
      document.getElementById("guessedLetters").textContent =
        guessedLetters.join(", ");

    }
  }

  
}

//got from Kilgore's demo
function updateWordDisplay() {
  let display = "";
  for (let i = 0; i < secretWord.length; i++) {
    let letter = secretWord.charAt(i);
    if (guessedLetters.includes(letter)) {
      display += letter + " ";
    } else {
      display += "_ ";
    }
  }

  
  document.getElementById("lives").textContent = lives;

  document.getElementById("wordDisplay").textContent = display;


  if (lives=0 && !display.includes("_")){
    document.getElementById("message").textContent = "You Win!";
  } else (lives < 1 && display.includes("_")) { 
    document.getElementById("message").textContent = "You Lose!";
  }

  

}

function restartGame() {
  showDifficultyPopup()
  startGame()
}



