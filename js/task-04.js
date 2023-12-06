let counterValue = 0;

const inputElement = document.querySelector("#value");

document
	.querySelector("button[data-action='decrement']")
	.addEventListener("click", counterDecrement);

document
	.querySelector("button[data-action='increment']")
	.addEventListener("click", counterIncrement);

function counterDecrement() {
	counterValue -= 1;
	inputElement.textContent = counterValue;
}

function counterIncrement() {
	counterValue += 1;
	inputElement.textContent = counterValue;
}
