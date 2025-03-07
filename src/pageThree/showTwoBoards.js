const showPageFour = require("../pageFour/showPageFour");

const showTwoBoards = (
	humanPlayerBoard,
	computerPlayerBoard,
	computerPlayer
) => {
	const content = document.querySelector(".content");
	content.innerHTML = "";

	const boardDiv = document.createElement("div");
	boardDiv.classList.add("boardDiv");
	content.appendChild(boardDiv);

	const humanDiv = document.createElement("div");
	const computerDiv = document.createElement("div");

	const humanHeader = document.createElement("div");
	humanHeader.classList.add("humanHeader");
	const computerHeader = document.createElement("div");
	computerHeader.classList.add("computerHeader");
	humanHeader.textContent = "Your board";
	computerHeader.textContent = "Computer's board";

	const humanBoard = document.createElement("div");
	humanBoard.classList.add("humanBoard");
	const computerBoard = document.createElement("div");
	computerBoard.classList.add("computerBoard");

	humanDiv.appendChild(humanHeader);
	computerDiv.appendChild(computerHeader);

	humanDiv.appendChild(humanBoard);
	computerDiv.appendChild(computerBoard);

	boardDiv.appendChild(humanDiv);
	boardDiv.appendChild(computerDiv);

	for (let i = 0; i < humanPlayerBoard.size; i++) {
		for (let j = 0; j < humanPlayerBoard.size; j++) {
			if (humanPlayerBoard.board[i][j] == null) {
				const cell = document.createElement("div");
				humanBoard.appendChild(cell);
				cell.classList.add("cell");
			} else if (humanPlayerBoard.board[i][j] == "hit") {
				const cell = document.createElement("div");
				humanBoard.appendChild(cell);
				cell.classList.add("cellHit");
				cell.textContent = "X";
			} else if (humanPlayerBoard.board[i][j] == "miss") {
				const cell = document.createElement("div");
				humanBoard.appendChild(cell);
				cell.classList.add("cellMiss");
			} else {
				const cell = document.createElement("div");
				humanBoard.appendChild(cell);
				cell.classList.add("cellBoat");
			}
		}
	}

	for (let i = 0; i < computerPlayerBoard.size; i++) {
		for (let j = 0; j < computerPlayerBoard.size; j++) {
			if (computerPlayerBoard.board[i][j] == "hit") {
				const cell = document.createElement("div");
				computerBoard.appendChild(cell);
				cell.classList.add("cellHit");
				cell.textContent = "X";
			} else if (computerPlayerBoard.board[i][j] == "miss") {
				const cell = document.createElement("div");
				computerBoard.appendChild(cell);
				cell.classList.add("cellMiss");
			} else {
				const cell = document.createElement("div");
				computerBoard.appendChild(cell);
				cell.classList.add("cell");

				if (
					!(humanPlayerBoard.allShipSunk() || computerPlayerBoard.allShipSunk())
				)
					cell.addEventListener("click", () => {
						computerPlayerBoard.receiveAttack(j, i);
						computerPlayer.randomAttack(humanPlayerBoard);
						showTwoBoards(
							humanPlayerBoard,
							computerPlayerBoard,
							computerPlayer
						);

						if (
							humanPlayerBoard.allShipSunk() &&
							computerPlayerBoard.allShipSunk()
						) {
							const result = document.createElement("div");
							result.classList.add("result");
							result.textContent = "Game has ended";
							content.appendChild(result);
							const resultButton = document.createElement("button");
							resultButton.textContent = "Result";
							content.appendChild(resultButton);
							resultButton.addEventListener("click", () => {
								showPageFour("draw");
							});
							cell.addEventListener("click", () => {});
						} else if (humanPlayerBoard.allShipSunk()) {
							const result = document.createElement("div");
							result.classList.add("result");
							result.textContent = "Game has ended";
							content.appendChild(result);
							const resultButton = document.createElement("button");
							resultButton.textContent = "Result";
							content.appendChild(resultButton);
							resultButton.addEventListener("click", () => {
								showPageFour("computer");
							});
							cell.addEventListener("click", () => {});
						} else if (computerPlayerBoard.allShipSunk()) {
							const result = document.createElement("div");
							result.classList.add("result");
							result.textContent = "Game has ended";
							content.appendChild(result);
							const resultButton = document.createElement("button");
							resultButton.textContent = "Result";
							content.appendChild(resultButton);
							resultButton.addEventListener("click", () => {
								showPageFour("human");
							});
						}
					});
			}
		}
	}
};

module.exports = showTwoBoards;
