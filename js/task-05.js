const outputElement = document.querySelector("#name-output");

document.querySelector("#name-input").addEventListener("input", showInput);

function showInput(event) {
	event.currentTarget.value
		? (outputElement.textContent = event.currentTarget.value)
		: (outputElement.textContent = "Anonymous");
}
