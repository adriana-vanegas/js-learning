const saveBtn = document.getElementById("save-btn");
const leadInput = document.getElementById("input");
const output = document.getElementById("outputLinks");
const deleteBtn = document.getElementById("delete-btn");
let listLinks = "";

let existingLeads = localStorage.getItem("myLeads");
let jsLeads = [];

saveBtn.addEventListener("click", function () {
  if (leadInput.checkValidity()) {
    if (existingLeads) {
      // if there are existing leads, have it start with the existing leads
      jsLeads = JSON.parse(existingLeads);
    }
    jsLeads.push(leadInput.value); // add the most recent input value to the list
    localStorage.setItem("myLeads", JSON.stringify(jsLeads)); // set the list into a string and upload it to local storage
    existingLeads = localStorage.getItem("myLeads"); // update the existing leads as a string
    render(jsLeads);
    leadInput.value = ""; // null out the value so it can store the next one
  } else leadInput.reportValidity();
});

function render(leads) {
  listLinks = "";
  for (i = 0; i < leads.length; i++) {
    listLinks += `
    <li>
      <a target="_blank" href="${leads[i]}">
      ${leads[i]}</a>
    </li>`;
  }
  output.innerHTML = listLinks;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  existingLeads = "";
  jsLeads = [];
  render(jsLeads);
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
