const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const form = event.target;
	const emailElement = form.elements.email;
	const passwordElement = form.elements.password;

	if (!emailElement.value || !passwordElement.value) {
		alert("All fields must be filled out!");
		return;
	}

	const formData = {};
	formData[emailElement.name] = emailElement.value;
	formData[passwordElement.name] = passwordElement.value;

	console.log(formData);

	form.reset();
}
