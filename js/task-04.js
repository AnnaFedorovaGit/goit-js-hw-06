
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const counter = document.querySelector("#value");

let counterValue = 0;

const decrementClick = (event) => {
    counterValue -= 1;
    counter.textContent = counterValue;
};

const incrementClick = (event) => {
    counterValue += 1;
    counter.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click", incrementClick);
