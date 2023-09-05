
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);

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
