const Gameboard = require("../Gameboard");
const Player = require("../Player").Player;
const ComputerPlayer = require("../Player").ComputerPlayer;
const Ship = require("../Ship");

const startGame = require("./startGame");
// const humanPlayer = new Player(nameInputValue);

const showBoard = (BOARD, length, direction) => {
	const content = document.querySelector(".content");
	content.innerHTML = "";

	const board = document.createElement("div");
	board.classList.add("board");
	content.appendChild(board);

	for (let i = 0; i < BOARD.size; i++) {
		for (let j = 0; j < BOARD.size; j++) {
			if (BOARD.board[i][j] == null) {
				const cell = document.createElement("div");
				board.appendChild(cell);
				cell.classList.add("cell");

				cell.addEventListener("click", () => {
					const ship = new Ship(length);
					if (ship.length) {
						if (BOARD.placeShip(ship, j, i, direction)) {
							showBoard(BOARD);
							console.log(BOARD);
							if (
								BOARD.ships.filter((obj) => obj.length == 2).length == 1 &&
								BOARD.ships.filter((obj) => obj.length == 3).length == 2 &&
								BOARD.ships.filter((obj) => obj.length == 4).length == 1 &&
								BOARD.ships.filter((obj) => obj.length == 5).length == 1
							) {
								// console.log("you are ready for war");
								startGame(BOARD);
							} else {
								require("./gameController").placeShipButton(BOARD);
							}
						} else {
							alert(
								"Ship are overlapping or out-of-bounds. \nPlease place your ship again"
							);
							showBoard(BOARD, length, direction);
						}
					}
				});
			} else {
				const cell = document.createElement("div");
				board.appendChild(cell);
				cell.classList.add("cellBoat");
			}
		}
	}
};

module.exports = showBoard;
