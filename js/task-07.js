const sizeInput = document.querySelector("#font-size-control");

const textElement = document.querySelector("#text");

textElement.style.fontSize = `${sizeInput.value}px`;

sizeInput.addEventListener("input", changeFontSize);

function changeFontSize(event) {
	textElement.style.fontSize = `${event.currentTarget.value}px`;
}
