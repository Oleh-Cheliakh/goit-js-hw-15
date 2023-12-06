const categoriesList = document.querySelector("#categories").children;

console.log(`Number of categories: ${categoriesList.length}`);

for (let item of categoriesList) {
	console.log(`Category: ${item.querySelector("h2").textContent}`);
	console.log(`Elements: ${item.querySelectorAll("ul>li").length}`);
}
