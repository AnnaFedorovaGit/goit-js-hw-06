
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

for (let ingredient of ingredients) { 
  let newLi = document.createElement("li");
  newLi.textContent = ingredient;
  newLi.classList.add("item");
  list.appendChild(newLi);
};
