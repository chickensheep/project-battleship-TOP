const showPageTwo = require("../pageTwo/showPageTwo");

const pageOneFunction = () => {
	const nameInput = document.querySelector("#nameInput");

	nameInput.addEventListener("keydown", (event) => {
		if (event.key == "Enter" && nameInput.value) {
			showPageTwo(nameInput.value);
		}
	});
};

module.exports = pageOneFunction;
