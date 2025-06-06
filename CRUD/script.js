const tableData = document.querySelector(".data-table");

////////////////////////
// Render all emails //
////////////////////////

function render() {
  let data = [];
  const object = localStorage.getItem("object");
  const objectData = JSON.parse(object);

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
        <button class="edit-btn" data-action= "edit" data-id= "${record.id}">Edit</button>
        <button class="delete-btn" data-action= "delete" data-id= "${record.id}">Delete</button>
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
const updateForm = document.querySelector(".update-form");
const updateButton = document.querySelector(".update-btn");

addBtn.addEventListener("click", function () {
  createForm.style.display = "block";
  addBtn.style.display = "none";
});

///////////////////////
// Create new Entry //
///////////////////////

const inputEntry = document.querySelector(".input-entry");
let newObject = "";
let nameInput = document.querySelector(".name-entry");
let emailInput = document.querySelector(".email-entry");
let nameUpdate = document.querySelector(".name-update");
let emailUpdate = document.querySelector(".email-update");

inputEntry.addEventListener("click", function () {
  let data = [];
  objectData = JSON.parse(localStorage.getItem("object"));

  if (objectData) {
    objectData.forEach(function (i) {
      data.push(i);
    });
  }

  newObject = {
    id: Date.now(), // unique identifier
    name: nameInput.value,
    email: emailInput.value,
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

render();

//////////////////////////
// Button functionality //
//////////////////////////

tableData.addEventListener("click", function (event) {
  const clickedButton = event.target.closest("button");

  if (clickedButton) {
    const action = clickedButton.dataset.action;
    const id = clickedButton.dataset.id;
    if (action === "delete") {
      console.log(`delete ${id}`);
      deleteId(id);
    } else if (action === "edit") {
      console.log(`edit ${id}`);
      editID(id);
    }
  }
});

updateButton.addEventListener("click", function () {
  updatedName = nameUpdate.value;
  updatedEmail = emailUpdate.value;
  const objectData = JSON.parse(localStorage.getItem("object"));

  const modified = objectData.map((object) => {
    if (object.id === Number(identifier)) {
      return { ...object, name: updatedName, email: updatedEmail };
    }
    return object;
  });
  console.log(modified);
  localStorage.setItem("object", JSON.stringify(modified));
  console.log(JSON.parse(localStorage.getItem("object")));
  updateForm.style.display = "none";
  addBtn.style.display = "block";
  render();
});

function deleteId(identifier) {
  const objectData = JSON.parse(localStorage.getItem("object"));
  const filteredData = objectData.filter((object) => object.id != identifier);
  localStorage.setItem("object", JSON.stringify(filteredData));
  render();
}

function editID(identifier) {
  updateForm.style.display = "block";
  addBtn.style.display = "none";

  const objectData = JSON.parse(localStorage.getItem("object"));
  const selectedData = objectData.find(
    (object) => Number(object.id) === Number(identifier)
  );

  nameUpdate.value = selectedData.name;
  emailUpdate.value = selectedData.email;
}
