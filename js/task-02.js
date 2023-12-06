const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsList = ingredients.map((ingridient) => {
	const listElement = document.createElement("li");
	listElement.textContent = ingridient;
	listElement.classList.add("item");
	return listElement;
});

document.querySelector("ul#ingredients").append(...ingredientsList);
