const newDeck = document.getElementById("new-deck");
const drawCards = document.getElementById("draw-card");
const playSection = document.querySelector(".cards-to-play");
const scoreSection = document.querySelector(".score");
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
    });
});

drawCards.addEventListener("click", function () {
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
    const winner =
      player1Score > player2Score
        ? "Player 1 wins!"
        : player1Score === player2Score
        ? "It's a tie"
        : "Player 2 wins!";

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
      <div class="player-${playerNum}">
        Player ${playerNum}
        <img src="${cardImage}">
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
