const saveBtn = document.getElementById("save-btn");
const showBtn = document.getElementById("output-links");
const leadInput = document.getElementById("input");
const output = document.getElementById("outputLinks");
let leadArray = [];
let listLinks = "";

// when the button is clicked, a function will run
// function specified within curly brackets
saveBtn.addEventListener("click", function () {
  if (leadInput.checkValidity()) {
    let leadInputValue = leadInput.value;
    leadArray.push(leadInputValue);
    console.log(leadArray);
    renderLeads();
    leadInput.value = "";
  } else leadInput.reportValidity();
});

// Another way to do it with create element
// showBtn.addEventListener("click", function () {
//   for (let i = 0; i < leadArray.length; i++) {
//     let outputValue = leadArray[i];
//     // create element
//     const li = document.createElement("li");
//     // enter text content
//     li.textContent = outputValue;
//     // append
//     output.append(li);
//   }
// });

// DOM manipulation has a cost, so reduce iteration on the DOM

// function renderLeads() {
//   listLinks = "";
//   for (let i = 0; i < leadArray.length; i++) {
//     listLinks += "<li>" + leadArray[i] + "</li>";
//   }
//   output.innerHTML = listLinks;
// }

function renderLeads() {
  listLinks +=
    '<li><a target="_blank" href="' +
    leadInput.value +
    '"</a>' +
    leadInput.value +
    "</li>";
  console.log(listLinks);
  output.innerHTML = listLinks;
}
