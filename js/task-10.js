function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const inputElement = document.querySelector("input");

const buttonCreate = document.querySelector("button[data-create]");

const buttonDestroy = document.querySelector("button[data-destroy]");

const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
	let boxesData = "";
	let boxSize = 30;
	for (let i = 0; i < amount; i += 1) {
		boxesData += `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px;  height: ${boxSize}px"></div>`;
		boxSize += 10;
	}
	boxesContainer.innerHTML = boxesData;
}

function destroyBoxes() {
	boxesContainer.innerHTML = "";
}

buttonCreate.addEventListener("click", (event) => {
	createBoxes(inputElement.value);
});

buttonDestroy.addEventListener("click", destroyBoxes);
