const container = document.querySelector(".container");
let list = [
  { name: "Adriana", username: "adrianagv" },
  { name: "Catherine", username: "catherine" },
  { name: "Tim", username: "timothy" },
];

const dupName = { name: "adriana", username: "apq" };
const dupUser = { name: "Timmy", username: "timothy" };

// console.log(dupName.name);

const duplicateName = list.find(
  (username) => username.name.toLowerCase() === dupName.name.toLowerCase()
);
const duplicateUser = list.find(
  (username) => username.username === dupName.username
);

if (duplicateName) {
  console.log("Found duplicate names");
} else if (duplicateUser) {
  console.log("Found duplicate user");
} else {
  console.log("All set");
}

// How to use Map
const listMap = list.map((item) => item.name);
console.log(listMap);

// How to use Reduce
const prices = [85, 90, 95, 65];

// In reduce, the returned value becomes the accumulator
const total = prices.reduce((accumulator, next) => accumulator + next);
console.log(total);
// SUM:
// First iteration: acc: 85, next: 90 -> 175
// Second iteration: acc: 175, next: 95 -> 270
// Third iteration: acc: 270, next: 65 -> 335

const max = prices.reduce((accumulator, next) => Math.max(accumulator, next));
console.log(max);
// MAX:
// First iteration: acc: 85, next: 90 -> 90
// Second iteration: acc: 90, next: 95 -> 95
// Third iteration: acc: 95, next: 65 -> 95

const filtered = list.filter((item) => item.name != "Adriana");
console.log(filtered);
