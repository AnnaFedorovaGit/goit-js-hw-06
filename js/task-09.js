
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const newColorValue = document.querySelector(".color");

const changeColorClick = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  newColorValue.innerHTML = getRandomHexColor();
};

changeColorBtn.addEventListener("click", changeColorClick);
