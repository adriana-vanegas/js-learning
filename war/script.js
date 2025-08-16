const newDeck = document.getElementById("new-deck");

newDeck.addEventListener("click", function () {
  fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((response) => response.json())
    .then((data) => console.log(data));
});

const people = [
  { name: "Jack", hasPet: true },
  { name: "Jill", hasPet: false },
  { name: "Alice", hasPet: true },
  { name: "Bob", hasPet: false },
];

function checkIfTrue(item) {
  if (item.hasPet) {
    return true;
  }
}

function filterArray(array, callback) {
  // function filterArray(array, callback) {
  const resultingArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      resultingArray.push(array[i]);
    }
  }
  return resultingArray;
}

console.log(filterArray(people, checkIfTrue));

const filterList = people.filter((item) => item.hasPet);

console.log(filterList);
