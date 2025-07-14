// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL: "https://linkboard-e3cbb-default-rtdb.firebaseio.com/",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log(database);

const saveBtn = document.getElementById("save-btn");
const leadInput = document.getElementById("input");
const output = document.getElementById("outputLinks");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
let listLinks = "";

let existingLeads = localStorage.getItem("myLeads");
let jsLeads = [];

function addLead(input) {
  if (existingLeads) {
    // if there are existing leads, have it start with the existing leads
    jsLeads = JSON.parse(existingLeads);
  }
  jsLeads.push(input); // add the most recent input value to the list
  localStorage.setItem("myLeads", JSON.stringify(jsLeads)); // set the list into a string and upload it to local storage
  existingLeads = localStorage.getItem("myLeads"); // update the existing leads as a string
}

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

saveBtn.addEventListener("click", function () {
  if (leadInput.checkValidity()) {
    addLead(leadInput.value);
    render(jsLeads);
  } else leadInput.reportValidity();
  leadInput.value = ""; // null out the value so it can store the next one
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  existingLeads = "";
  jsLeads = [];
  render(jsLeads);
});

// APIs return information in this format:
// const tabs = [{ url: "https://www.linkedin.com/feed/" }];

tabBtn.addEventListener("click", function () {
  // Grab url of the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    addLead(tabs[0].url);
    render(jsLeads);
  });
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
