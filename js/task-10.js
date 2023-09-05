
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValue = document.querySelector("input");
const createCollectionBtn = document.querySelector(`[data-create]`);
const removeCollactionBtn = document.querySelector(`[data-destroy]`);
const containerForBoxes = document.querySelector("#boxes");

let boxSize = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let newDiv = document.createElement("div");
    newDiv.style.width = boxSize + "px";
    newDiv.style.height = boxSize + "px";
    newDiv.style.backgroundColor = getRandomHexColor();

    containerForBoxes.appendChild(newDiv);
    boxSize += 10;
  }
}

function destroyBoxes() { 
  containerForBoxes.innerHTML = '';
  boxSize = 30;  
}

createCollectionBtn.addEventListener("click", () => {
  createBoxes(Number(inputValue.value))
});
removeCollactionBtn.addEventListener("click", destroyBoxes);
