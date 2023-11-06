const resetButton = document.getElementById("reset");
const guideButton = document.getElementById("guideButton");
const scoreButton = document.getElementById("scoreButton");
const guidePara = document.getElementById("guideParagraph");
const cardContainer = document.getElementById("cardContainer");
const scorePara = document.getElementById("score");

console.log(cardData);
let cards = [
    [],
    [],
    [],
    []
]
let guideOn = true;
let scoreOn = true;
/* Initializer function:
    Should be called after page loads
*/
function initialize() {
    reset();
}
// resets game
function reset() {
   
}
// Maybe combine the two functions?
function toggleGuide() {
    if(guideOn) {
        guidePara.style.opacity = 0;
        guideOn = false;
    } else {
        guidePara.style.opacity = 1;
        guideOn = true;
    }
}
function toggleScore() {
    if(scoreOn) {
        guidePara.style.opacity = 0;
        scoreOn = false;
    } else {
        guidePara.style.opacity = 1;
        scoreOn = true;
    }
}


resetButton.addEventListener("click", reset);
guideButton.addEventListener("click", toggleGuide);
document.getElementById("among").src = cardData[0];
console.log(`${cardData[0]}`);