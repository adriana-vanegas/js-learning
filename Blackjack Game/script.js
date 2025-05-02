// Assign variables
let cardList = [];
let firstCard = 0;
let secondCard = 0;
let sum = 0;
let extraCard = 0;
let newGameInd = 0;
let randomCard = 0;

// Create object - key value pairs
let player = {
  name: "Adri",
  chips: 145,
};

// Set up message outputs
let cardsId = document.querySelector(".cards"); // Query selector lets you choose the FIRST element that matches the specified selector
let messageId = document.querySelector("#check");
let cardSumid = document.getElementById("output");
let startNewGameid = document.getElementById("startNewGame");
let newCardId = document.getElementById("newCardId");
let playerId = document.getElementById("playerId");
let message = "";

// Functions
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard >= 11 && randomCard <= 13) {
    return 10;
  } else {
    return randomCard;
  }
}

function sumCards() {
  sum = 0;
  for (let i = 0; i < cardList.length; i++) {
    sum += cardList[i];
  }
  outputCards();
}

function outputCards() {
  cardsId.textContent = "Cards: " + cardList;
  cardSumid.textContent = "Sum: " + sum;
}

function outputCheck() {
  if (sum < 21) {
    message = "Do you want to draw a card?";
  } else if (sum === 21) {
    message = "You got BlackJack";
    newCardId.textContent = "No More Cards";
    messageId.textContent = "Start New Game";
    player.chips += 100;
  } else {
    message = "You are out of the game";
    newCardId.textContent = "No More Cards";
    messageId.textContent = "Start New Game";
    player.chips = player.chips - 100;
  }
  messageId.textContent = message;
}

function name() {
  playerId.textContent = player.name + ": $" + player.chips;
  // console.log(player.name + ": $" + player.chips);
}

function startGame() {
  if (newGameInd === 0) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardList.push(firstCard, secondCard);
    startNewGameid.textContent = "New Game";
    newCardId.textContent = "Draw New Card";
    newGameInd += 1;
    sumCards();
    outputCheck();
    name();
  } else {
    newGameInd = 0;
    cardList = [];
    startGame();
  }
}

function newCard() {
  if (cardList.length > 0 && sum < 21) {
    extraCard = getRandomCard();
    cardList.push(extraCard);
    sumCards();
    outputCheck();
  } else if (cardList.length === 0) {
    messageId.textContent = "Press Start Game";
  }
}
