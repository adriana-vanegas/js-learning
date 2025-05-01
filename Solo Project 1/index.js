function showCard() {
  document.getElementById("cardName").textContent = cardName;
  document.getElementById("cardDefinition").textContent = cardDefinition;
}

function createCard() {
  cardName = prompt("Please enter card name: ");
  cardDefinition = prompt("Please enter card definition: ");
  showCard();
}
