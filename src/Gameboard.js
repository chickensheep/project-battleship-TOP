const Ship = require("./Ship");
const showBoard = require("../src/pageTwo/showBoard");

class Gameboard {
	constructor(size = 10) {
		this.size = size;
		this.board = Array.from({ length: this.size }, () =>
			Array.from({ length: this.size }, () => null)
		);
		this.ships = [];
		this.missedShots = [];
	}

	placeShip(ship, x, y, direction) {
		if (direction === "Horizontal") {
			if (x + parseInt(ship.length) > this.size) {
				return false;
			}

			for (let i = 0; i < parseInt(ship.length); i++) {
				if (this.board[y][x + i] !== null) {
					return false;
				}
			}

			for (let i = 0; i < parseInt(ship.length); i++) {
				this.board[y][x + i] = ship;
			}

			this.ships.push(ship);
			return true;
		} else if (direction === "Vertical") {
			if (y + parseInt(ship.length) > this.size) {
				return false;
			}

			for (let i = 0; i < parseInt(ship.length); i++) {
				if (this.board[y + i][x] !== null) {
					return false;
				}
			}

			for (let i = 0; i < parseInt(ship.length); i++) {
				this.board[y + i][x] = ship;
			}

			this.ships.push(ship);
			return true;
		}

		return false;
	}

	receiveAttack(x, y) {
		if (this.board[y][x] !== null) {
			this.board[y][x].hit();
			this.board[y][x] = "hit";
		} else {
			this.missedShots.push([x, y]);
			this.board[y][x] = "miss";
		}
	}

	allShipSunk() {
		return this.ships.every((ship) => ship.isSunk());
	}
}

module.exports = Gameboard;
