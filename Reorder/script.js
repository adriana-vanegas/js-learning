const folderSortFunc = document.getElementById("folderSort");
let stored = [
  `<div id="Meeting Notes" class="folders">Meeting Notes<div class="handle">H</div></div>`,
  `<div id="Performance Review" class="folders">Performance Review<div class="handle">H</div></div>`,
  `<div id="Month End Close" class="folders">Month End Close<div class="handle">H</div></div>`,
];
let string = "";

// localStorage.setItem("folder", JSON.stringify(stored));

let stored_values = JSON.parse(localStorage.getItem("folder"));
console.log(stored_values);

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < stored_values.length; i++) {
    string += stored_values[i];
  }
  folderSortFunc.innerHTML = string;
  new Sortable(folderSortFunc, {
    animation: 150,
    handle: ".handle",
    onEnd: function () {
      const newOrder = [];
      const items = folderSortFunc.querySelectorAll(".folders");
      items.forEach((element) =>
        newOrder.push(
          `<div id="${element.id}" class="folders">${element.id}<div class="handle">H</div></div>`
        )
      );
      localStorage.setItem("folder", JSON.stringify(newOrder));
    },
  });
});
