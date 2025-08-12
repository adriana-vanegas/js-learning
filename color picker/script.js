fetch("https://www.thecolorapi.com/scheme/mode")
  .then((response) => response.json())
  .then((data) => console.log(data));
