const colorInput = document.getElementById("selected-color");
const modeInput = document.getElementById("selected-mode");
const colorForm = document.querySelector(".color-form");
const colorScheme = document.querySelector(".colors-scheme");

let colorValue = "";
let modeValue = "";

let html = "";

function updateColors(array) {
  html = "";
  array.forEach(
    (hex) =>
      (html += `<div class="output">
          <div class="color" style="background-color: ${hex}"></div>
          <p class="color-name">${hex}</p>
        </div>
    `)
  );
  colorScheme.innerHTML = html;
}

colorForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let colorList = [];

  colorValue = colorInput.value.slice(1);
  modeValue = modeInput.value;
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${modeValue}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      colorSet = data.colors;
      colorSet.forEach((item) => {
        colorList.push(item.hex.value);
      });

      updateColors(colorList);
    });
});
