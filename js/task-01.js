
const list = document.body.children[1];

console.log(`Number of categories: ${list.children.length}`);

Object.values(list.children).forEach((item) => {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`);
});
