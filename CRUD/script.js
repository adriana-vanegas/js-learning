const tableData = document.querySelector(".data-table");

////////////////////////
// Render all emails //
////////////////////////

function render() {
  let data = [];
  let object = localStorage.getItem("object");
  let objectData = JSON.parse(object);

  if (objectData) {
    objectData.forEach(function (i) {
      data.push(i);
    });
  }

  let elements = "";

  data.forEach(function (record) {
    elements += `<tr>
      <td>${record.name}</td>
      <td>${record.email}</td>
      <td>
        <button class="edit-btn" data-id= "${record.id}">Edit</button>
        <button class="delete-btn" data-id= "${record.id}">Delete</button>
      </td>
      </tr>`;
  });
  tableData.innerHTML = elements;
}

//////////////////////////////
// Add button functionality //
//////////////////////////////

const addBtn = document.querySelector(".add-btn");
const createForm = document.querySelector(".create-form");

addBtn.addEventListener("click", function () {
  createForm.style.display = "block";
  addBtn.style.display = "none";
});

///////////////////////
// Create new Entry //
///////////////////////

const inputEntry = document.querySelector(".input-entry");
let newObject = "";

inputEntry.addEventListener("click", function () {
  let data = [];
  let nameInput = document.querySelector(".name-entry");
  let emailInput = document.querySelector(".email-entry");
  const name = document.querySelector(".name-entry").value;
  const email = document.querySelector(".email-entry").value;

  objectData = JSON.parse(localStorage.getItem("object"));

  if (objectData) {
    objectData.forEach(function (i) {
      data.push(i);
    });
  }

  newObject = {
    id: Date.now(), // unique identifier
    name: name,
    email: email,
  };

  const checkIncludes = data.find((i) => i.email === newObject.email);

  if (checkIncludes) {
    console.log("No duplicate emails");
  } else {
    data.push(newObject);
    localStorage.setItem("object", JSON.stringify(data));

    render();
    createForm.style.display = "none";
    addBtn.style.display = "block";
  }
});

//////////////////////////
// Update functionality //
//////////////////////////

const nameToUpdate = document.querySelector(".name-update");
const emailToUpdate = document.querySelector(".email-update");
const editButton = document.querySelectorAll(".edit-btn");

editButton.forEach(function (btn) {
  btn.addEventListener("click", function () {});
});

render();

const list = [
  { name: "Adri", job: "analyst" },
  { name: "Fabi", job: "marketing" },
];

const check = { name: "Fer", job: "product" };

const output = list.find((i) => i.name === check.name || i.job === check.job);

console.log(output);
