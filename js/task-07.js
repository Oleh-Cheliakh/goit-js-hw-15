const sizeInput = document.querySelector("#font-size-control");

const textElement = document.querySelector("#text");

sizeInput.addEventListener("change", changeFontSize);

function changeFontSize(event) {
	textElement.style.fontSize = `${event.currentTarget.value}px`;
}
