const resetButton = document.getElementById("reset");
const guideButton = document.getElementById("guideButton");
const scoreButton = document.getElementById("scoreButton");
const guidePara = document.getElementById("guideParagraph");
const cardContainer = document.getElementById("cards");
const scorePara = document.getElementById("score");
const cards = document.getElementsByClassName("card");
const images = {
    "circle": "images/Circle.png",
    "square": "images/Square.png",
    "triangle": "images/Triangle.png",
    "kite": "images/Kite.png"
}
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
    for(let i of cards) {
        i.src = "Pattern.png";
    }
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

function revealCard(object) {
    let cardClass = object.className;
    for(let i in images) {
        if(cardClass.search(i) >= 0) {
            object.src = images[i];
            return i;
        }
    }
}
resetButton.addEventListener("click", reset);
guideButton.addEventListener("click", toggleGuide);
for(let i of cards) {
    i.addEventListener("click", function(){
        revealCard(i);
    });
}
initialize();