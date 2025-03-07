const showHello = (name) => {
	const header = document.querySelector(".header");
	const hello = document.createElement("p");
	hello.textContent = `Hello ${name},  place your ships in the grid below by clicking`;
	hello.classList.add("hello");

	header.appendChild(hello);
};

module.exports = showHello;
