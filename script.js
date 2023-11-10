const resetButton = document.getElementById("reset");
const guideButton = document.getElementById("guideButton");
const guidePara = document.getElementById("guideParagraph");
const cardContainer = document.getElementById("cards");
const scorePara = document.getElementById("guessParagraph");
const cards = document.getElementsByClassName("card");
const images = {
    "circle": "images/Circle.png",
    "square": "images/Square.png",
    "triangle": "images/Triangle.png",
    "kite": "images/Kite.png",
    "trapezoid": "images/Trapezoid.png",
    "hexagon": "images/Hexagon.png",
    "star": "images/Star.png",
    "semicircle": "images/Semicircle",
}
const pattern = "Pattern.png";
let guideOn = true;
let scoreOn = true;
let cardsSelected = [];
let matchedCardCounter = 0;
let score = 0;
/* Initializer function:
    Should be called after page loads
*/
function initialize() {
    reset();
}
// resets game
function reset() {
    for(let i of cards) {
        i.src = pattern;
    }
    score = 0;
    matchedCardCounter = 0;
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
    object.src = getCardShape(object);
    return object;
}
function getCardShape(object) {
    let cardClass = object.className;
    for(let i in images) {
        if(cardClass.search(i) >= 0) {
            return images[i];
        }
    }
}
function processGuess(object) {
    cardsSelected.push(object);
    if(cardsSelected.length >= 2) {
        if(getCardShape(cardsSelected[0]) === getCardShape(object)) {
            matchedCardCounter ++;
        } else {
            cardsSelected.forEach(i => {
                i.src = pattern;
            });
        }
        cardsSelected = [];
    }
}
function displayScore() {
    if(score == 1) {
        scorePara.textContent = `You have made ${score} guess.`; 
    } else {
        scorePara.textContent = `You have made ${score} guesses.`;
    }
} 
resetButton.addEventListener("click", reset);
guideButton.addEventListener("click", toggleGuide);
for(let i of cards) {
    i.addEventListener("click", function(){
        if(i.src.toString().search(pattern) >= 0) {
            score++;
            processGuess(revealCard(i));
            displayScore();
            if(matchedCardCounter >= 8) {
                scorePara.innerHTML = scorePara.innerHTML + `<br/>You won!`
            }
        }
    });
}
initialize();
