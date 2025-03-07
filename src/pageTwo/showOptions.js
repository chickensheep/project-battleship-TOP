const Gameboard = require("../Gameboard");
const Player = require("../Player").Player;
const ComputerPlayer = require("../Player").ComputerPlayer;
const Ship = require("../Ship");

const showOptions = (board) => {
	const container = document.querySelector(".container");

	const selectDialog = document.createElement("dialog");
	selectDialog.classList.add("selectDialog");

	container.appendChild(selectDialog);

	// question

	const question = document.createElement("div");
	question.textContent = "Choose your ship:";

	selectDialog.appendChild(question);

	// length

	const lengthDiv = document.createElement("div");
	lengthDiv.classList.add("selectContainer");

	const lengthLabel = document.createElement("label");
	lengthLabel.textContent = "Ship length: ";
	lengthLabel.htmlFor = "lengthSelect";

	const lengthSelect = document.createElement("select");
	lengthSelect.id = "lengthSelect";

	const lengthTwoOption = document.createElement("option");
	lengthTwoOption.textContent = "2";

	const lengthThreeOption = document.createElement("option");
	lengthThreeOption.textContent = "3";

	const lengthFourOption = document.createElement("option");
	lengthFourOption.textContent = "4";

	const lengthFiveOption = document.createElement("option");
	lengthFiveOption.textContent = "5";

	lengthSelect.appendChild(lengthTwoOption);
	lengthSelect.appendChild(lengthThreeOption);
	lengthSelect.appendChild(lengthFourOption);
	lengthSelect.appendChild(lengthFiveOption);

	lengthDiv.appendChild(lengthLabel);
	lengthDiv.appendChild(lengthSelect);

	selectDialog.appendChild(lengthDiv);

	//ship length check

	if (board.ships.filter((obj) => obj.length == 2).length == 1) {
		lengthTwoOption.remove();
	}

	if (board.ships.filter((obj) => obj.length == 3).length == 2) {
		lengthThreeOption.remove();
	}

	if (board.ships.filter((obj) => obj.length == 4).length == 1) {
		lengthFourOption.remove();
	}

	if (board.ships.filter((obj) => obj.length == 5).length == 1) {
		lengthFiveOption.remove();
	}

	// direction

	const directionDiv = document.createElement("div");
	lengthDiv.classList.add("selectContainer");

	const directionLabel = document.createElement("label");
	directionLabel.textContent = "Direction: ";
	directionLabel.htmlFor = "directionSelect";

	const directionSelect = document.createElement("select");
	directionSelect.id = "lengthSelect";

	const directionHorizontalOption = document.createElement("option");
	directionHorizontalOption.textContent = "Horizontal";

	const directionVerticalOption = document.createElement("option");
	directionVerticalOption.textContent = "Vertical";

	directionSelect.appendChild(directionHorizontalOption);
	directionSelect.appendChild(directionVerticalOption);

	directionDiv.appendChild(directionLabel);
	directionDiv.appendChild(directionSelect);

	selectDialog.appendChild(directionDiv);

	//confirm

	const confirmButton = document.createElement("button");
	confirmButton.textContent = "Confirm";
	selectDialog.appendChild(confirmButton);

	confirmButton.addEventListener("click", () => {
		selectDialog.close();
		const length = lengthSelect.value;
		const direction = directionSelect.value;
		console.log(length, direction);
		require("./gameController").renderBoard(board, length, direction);
	});

	selectDialog.addEventListener("keydown", (event) => {
		if (event.key == "Enter") {
			selectDialog.close();
			const length = lengthSelect.value;
			const direction = directionSelect.value;
			console.log(length, direction);
			require("./gameController").renderBoard(board, length, direction);
		}
	});

	// show dialog

	selectDialog.showModal();
};

module.exports = showOptions;
