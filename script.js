const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.querySelector("button");

const changeColor = () => {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
};

const onClick = () => {
  let randomValue1 = {
    r: Math.random() * 255,
    g: Math.random() * 255,
    b: Math.random() * 255,
  };

  let randomValue2 = {
    r: Math.random() * 255,
    g: Math.random() * 255,
    b: Math.random() * 255,
  };

  const rgb1 =
    "rgb(" + randomValue1.r + "," + randomValue1.g + "," + randomValue1.b + ")";
  const rgb2 =
    "rgb(" + randomValue2.r + "," + randomValue2.g + "," + randomValue2.b + ")";

  body.style.background =
    "linear-gradient(to right, " + rgb1 + ", " + rgb2 + ")";

  css.textContent = body.style.background + ";";
};

button.addEventListener("click", () => {
  onClick();
});

color1.addEventListener("input", () => {
  changeColor();
});

color2.addEventListener("input", () => {
  changeColor();
});
