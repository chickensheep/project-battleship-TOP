class Ship2 {
	constructor(length) {
		this.length = length;
		this.hits = 0;
		this.sunk = false;
	}

	hit() {
		this.hits++;
		this.sunk = this.isSunk();
	}

	isSunk() {
		return this.hits >= this.length;
	}
}

module.exports = Ship2;
