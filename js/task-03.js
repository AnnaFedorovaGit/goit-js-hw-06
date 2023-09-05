
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");

list.style.listStyle = "none";
list.style.display = "flex";
list.style.justifyContent = "space-between";
list.style.paddingLeft = "0";
 
const markup = images
  .map((imageValues) => `<li><img class="image" src="${imageValues.url}" alt="${imageValues.alt}"></li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);

document.querySelectorAll(".image").forEach((image) => {
  image.style.width = "400px";
  image.style.height = "300px";
  image.style.backgroundSize = "cover";
  image.style.border = "2px solid grey";
})
