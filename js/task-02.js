
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

for (let ingredient of ingredients) { 
  let newLi = document.createElement("li");
  newLi.textContent = ingredient;
  newLi.classList.add("item");
  fragment.appendChild(newLi);
};

list.appendChild(fragment);