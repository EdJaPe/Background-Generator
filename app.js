var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function randomInt() {
  return Math.floor(Math.random() * 256);
}

function setRandomGradient() {
  body.style.background = `linear-gradient(to right, rgb(${randomInt()}, ${randomInt()}, ${randomInt()}), rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
  css.textContent = body.style.background + ";";
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomGradient);
