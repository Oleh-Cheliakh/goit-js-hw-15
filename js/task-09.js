function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const bodyElement = document.querySelector("body");

const buttonElement = document.querySelector(".change-color");

const textElement = document.querySelector(".color");

function changeColor() {
	const colorValue = getRandomHexColor();

	bodyElement.style.backgroundColor = colorValue;

	textElement.textContent = colorValue;
}

buttonElement.addEventListener("click", changeColor);
