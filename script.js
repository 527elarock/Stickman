

const easyWords = ['flag', 'star', 'nato', 'visa', 'nike', 'army', 'oil']
const mediumWords = ['faithful', 'liberty','anthem', 'unity', 'proud']
const hardWords = ['jingoistic', 'patriotism', 'freedom', 'veteran']



document.addEventListener("DOMContentLoaded", function () {
 // Any code inside this function will run
 // as soon as the page is fully loaded
 startGame();
});




function startGame() {
    guessedLetters = []

    let randomEasyWord = easyWords[Math.floor(Math.random()*easyWords.length)]

}
