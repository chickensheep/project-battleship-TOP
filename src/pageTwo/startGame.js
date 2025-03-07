const showPageThree = require("../pageThree/showPageThree");

const startGame = (humanPlayerBoard) => {
	const content = document.querySelector(".content");

	const startGameDiv = document.createElement("div");
	startGameDiv.classList.add("startGameDiv");
	const readyForWar = document.createElement("p");
	const startGameButton = document.createElement("button");
	startGameButton.classList.add("startGameButton");

	content.appendChild(startGameDiv);
	startGameDiv.appendChild(readyForWar);
	startGameDiv.appendChild(startGameButton);

	readyForWar.textContent = "You are ready for war...";
	readyForWar.style.fontSize = "50px";
	startGameButton.textContent = "Start game";

	startGameButton.addEventListener("click", () => {
		showPageThree(humanPlayerBoard);
	});
};

module.exports = startGame;
