const inputForm = document.querySelector("#validation-input");

const inputResrtiction = Number(inputForm.dataset.length);

inputForm.addEventListener("blur", validateInput);

function validateInput(event) {
	if (Number(event.currentTarget.value.length) === inputResrtiction) {
		event.currentTarget.classList = "valid";
		return;
	}
	event.currentTarget.classList = "invalid";
	return;
}
