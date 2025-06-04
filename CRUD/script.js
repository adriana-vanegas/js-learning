const tableData = document.querySelector(".data-table");

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

  data.forEach(function (record, index) {
    elements += `<tr>
      <td>${record.name}</td>
      <td>${record.email}</td>
      <td>
        <button class="edit-btn" data-index= "${index}">Edit</button>
        <button class="delete-btn" data-index= "${index}">Delete</button>
      </td>
      </tr>`;
  });
  tableData.innerHTML = elements;
}

const addBtn = document.querySelector(".add-btn");
const createForm = document.querySelector(".create-form");

addBtn.addEventListener("click", function () {
  createForm.style.display = "block";
  addBtn.style.display = "none";
});

const inputEntry = document.querySelector(".input-entry");
let newObject = "";

inputEntry.addEventListener("click", function () {
  let data = [];
  const name = document.querySelector(".name-entry").value;
  const email = document.querySelector(".email-entry").value;

  newObject = { name: name, email: email };

  objectData = JSON.parse(localStorage.getItem("object"));

  if (objectData) {
    objectData.forEach(function (i) {
      data.push(i);
    });
  }

  data.push(newObject);

  localStorage.setItem("object", JSON.stringify(data));

  render();
  createForm.style.display = "none";
  addBtn.style.display = "block";
});

const nameToUpdate = document.querySelector(".name-update");
const emailToUpdate = document.querySelector(".email-update");
// const

render();

console.log(Date.now());
