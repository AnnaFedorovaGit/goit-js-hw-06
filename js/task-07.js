
const inputSlider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputSlider.addEventListener("input", () => text.style.fontSize = inputSlider.value + "px"); 
