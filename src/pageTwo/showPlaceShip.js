// const controllers = ;

const showPlaceShip = (board) => {
	const content = document.querySelector(".content");

	const placeShipButton = document.createElement("button");
	placeShipButton.textContent = "Place ship";
	content.appendChild(placeShipButton);

	placeShipButton.addEventListener("click", () => {
		require("./gameController").options(board);
	});
};

module.exports = showPlaceShip;
