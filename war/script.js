// Logic
const newDeck = document.getElementById("new-deck");
const drawCards = document.querySelector(".draw-card");
const playSection = document.querySelector(".cards-to-play");
const scoreSection = document.querySelector(".score");
const deckImg = document.querySelector(".ace-img");
let deckId = "";

let player1Score = 0;
let player2Score = 0;

newDeck.addEventListener("click", function () {
  fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((response) => response.json())
    .then((data) => {
      deckId = data.deck_id;
      console.log(deckId);
      player1Score = 0;
      player2Score = 0;
      playSection.innerHTML = `<div class="player">
        Player 1
        <div class="empty-cards"></div>
      </div>
      <div class="player">
        Player 2
        <div class="empty-cards"></div>
      </div>`;
      scoreSection.innerHTML = `<div class="scores">Player 1: 0, Player 2: 0</div>`;
      deckImg.classList.remove("hidden");
      drawCards.classList.remove("hidden");
    });
});

drawCards.addEventListener("click", function () {
  if (deckId) {
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
      .then((response) => response.json())
      .then((data) => {
        playSection.innerHTML = "";
        console.log(data.cards);
        const card = data.cards.map((item) => {
          return { image: item.image, value: item.value };
        });
        score(card);
      });
  } else {
    playSection.textContent = "Get a new deck";
  }
});

function score(card) {
  let playerNum = 0;

  if (card.length > 0) {
    card.forEach((item) => {
      playerNum += 1;
      if (playerNum === 1) {
        player1Score += cardValue(item.value);
        showCard(item.image, playerNum);
      } else {
        player2Score += cardValue(item.value);
        showCard(item.image, playerNum);
      }
    });
  } else {
    drawCards.classList.add("hidden");
    const winner =
      player1Score > player2Score
        ? "Player 1 wins!🎉"
        : player1Score === player2Score
        ? "It's a tie"
        : "Player 2 wins!🎉";

    deckImg.classList.add("hidden");

    playSection.innerHTML += `
        <div class="winner-announcement">
            ${winner}
        </div>`;
  }

  scoreSection.innerHTML = `<div class="scores">Player 1: ${player1Score}, Player 2: ${player2Score}
  </div>`;
}

function showCard(img, playerNum) {
  const cardImage = img;

  if (cardImage) {
    playSection.innerHTML += `
      <div class="player">
        Player ${playerNum}
        <div class="player-img">
        <img class="card-img" src="${cardImage}">
        </div>
      </div>`;
  }
}

function cardValue(val) {
  let cardVal = 0;
  if (parseInt(val, 10)) {
    cardVal = parseInt(val, 10);
    return cardVal;
  } else if (val === "ACE") {
    cardVal = 1;
    return cardVal;
  } else {
    cardVal = 10;
    return cardVal;
  }
}
