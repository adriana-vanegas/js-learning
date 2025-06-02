let data = [
  { id: 1, name: "Adri", email: "adri@gmail.com" },
  { id: 1, name: "Arsentiy", email: "arsentiy@gmail.com" },
];

function readAll() {
  localStorage.setItem("object", JSON.stringify(data));
  // let
}

// readAll();

function open() {
  let tableData = document.querySelector(".data-table");
  let object = localStorage.getItem("object");
}
