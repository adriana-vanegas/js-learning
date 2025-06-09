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
