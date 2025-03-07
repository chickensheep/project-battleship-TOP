const showPageFour = (winner) => {
	const header = document.querySelector(".header");
	const content = document.querySelector(".content");

	header.innerHTML = "";
	content.innerHTML = "";

	if (winner == "draw") {
		header.textContent = "It's a draw";
		header.style.fontSize = "50px";
	} else if (winner == "human") {
		header.textContent = "You won!!";
		header.style.fontSize = "50px";
	} else if (winner == "computer") {
		header.textContent = "You lost";
		header.style.fontSize = "50px";
	}
};

module.exports = showPageFour;
