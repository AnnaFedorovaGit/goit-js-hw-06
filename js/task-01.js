
const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);

document.querySelectorAll("#categories .item").forEach((item) => {
    const listIitles = item.querySelector("h2");
    const categoryLists = item.querySelector("ul");
    console.log(`Category: ${listIitles.textContent}`);
    console.log(`Elements: ${categoryLists.children.length}`);
});
