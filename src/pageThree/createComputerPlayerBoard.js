const Gameboard = require("../Gameboard");
const Player = require("../Player").Player;
const ComputerPlayer = require("../Player").ComputerPlayer;
const Ship = require("../Ship");

const Gameboard2 = require("../ComputerGameboard/Gameboard2");

const createComputerPlayerBoard = () => {
	const computerPlayerBoard = new Gameboard2();

	while (
		computerPlayerBoard.ships.filter((obj) => obj.length == 2).length < 1
	) {
		const x = Math.floor(Math.random() * 10);
		const y = Math.floor(Math.random() * 10);

		const directionNumber = Math.floor(Math.random() * 2);

		if (directionNumber == 0) {
			const ship = new Ship(2);
			computerPlayerBoard.placeShip(ship, x, y, "Horizontal");
		} else if (directionNumber == 1) {
			const ship = new Ship(2);
			computerPlayerBoard.placeShip(ship, x, y, "Vertical");
		}
	}

	while (
		computerPlayerBoard.ships.filter((obj) => obj.length == 3).length < 2
	) {
		const x = Math.floor(Math.random() * 10);
		const y = Math.floor(Math.random() * 10);

		const directionNumber = Math.floor(Math.random() * 2);

		if (directionNumber == 0) {
			const ship = new Ship(3);
			computerPlayerBoard.placeShip(ship, x, y, "Horizontal");
		} else if (directionNumber == 1) {
			const ship = new Ship(3);
			computerPlayerBoard.placeShip(ship, x, y, "Vertical");
		}
	}

	while (
		computerPlayerBoard.ships.filter((obj) => obj.length == 4).length < 1
	) {
		const x = Math.floor(Math.random() * 10);
		const y = Math.floor(Math.random() * 10);

		const directionNumber = Math.floor(Math.random() * 2);

		if (directionNumber == 0) {
			const ship = new Ship(4);
			computerPlayerBoard.placeShip(ship, x, y, "Horizontal");
		} else if (directionNumber == 1) {
			const ship = new Ship(4);
			computerPlayerBoard.placeShip(ship, x, y, "Vertical");
		}
	}

	while (
		computerPlayerBoard.ships.filter((obj) => obj.length == 5).length < 1
	) {
		const x = Math.floor(Math.random() * 10);
		const y = Math.floor(Math.random() * 10);

		const directionNumber = Math.floor(Math.random() * 2);

		if (directionNumber == 0) {
			const ship = new Ship(5);
			computerPlayerBoard.placeShip(ship, x, y, "Horizontal");
		} else if (directionNumber == 1) {
			const ship = new Ship(5);
			computerPlayerBoard.placeShip(ship, x, y, "Vertical");
		}
	}

	return computerPlayerBoard;
};

module.exports = createComputerPlayerBoard;
