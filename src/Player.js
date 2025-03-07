class Player {
	constructor(name) {
		this.name = name;
	}

	attack(enemyBoard, x, y) {
		return enemyBoard.receiveAttack(x, y);
	}
}

class ComputerPlayer extends Player {
	constructor() {
		super("Computer");
		this.previousMoves = new Set();
	}

	randomAttack(enemyBoard) {
		let x;
		let y;

		x = Math.floor(Math.random() * 10);
		y = Math.floor(Math.random() * 10);

		if (this.previousMoves.has(`${x},${y}`)) {
			return this.randomAttack(enemyBoard);
		} else {
			this.previousMoves.add(`${x},${y}`);
			return super.attack(enemyBoard, x, y);
		}
	}
}

module.exports = { Player, ComputerPlayer };
