const submitBtn = document.getElementById("formSubmit");
const form = document.getElementById("form");
const formName = document.getElementById("name");
const formColor = document.getElementById("color");
const formIceCream = document.getElementById("ice-cream-choice");
const formData = [];

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  formData.push({
    name: form.elements["name"].value,
    color: form.elements["color"].value,
    iceCream: form.elements["ice-cream-choice"].value,
  });
});

dataTest = [
  {
    name: "Adri",
    color: "Blue",
    iceCream: "Vanilla",
  },
  {
    name: "Arsentiy",
    color: "Red",
    iceCream: "Chocolate",
  },
  {
    name: "Mami",
    color: "Pink",
    iceCream: "Lemon",
  },
];
console.log(dataTest);
dataTest.splice(1, 2);
console.log(dataTest);
