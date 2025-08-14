const newDeck = document.getElementById("new-deck");

newDeck.addEventListener("click", function () {
  fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((response) => response.json())
    .then((data) => console.log(data));
});
