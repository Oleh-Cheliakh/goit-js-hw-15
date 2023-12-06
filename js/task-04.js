let counterValue = 0;

const inputElement = document.querySelector("#value");

document
	.querySelector("button[data-action='decrement']")
	.addEventListener("click", (event) => {
		counterValue -= 1;
		inputElement.textContent = counterValue;
	});

document
	.querySelector("button[data-action='increment']")
	.addEventListener("click", (event) => {
		counterValue += 1;
		inputElement.textContent = counterValue;
	});
