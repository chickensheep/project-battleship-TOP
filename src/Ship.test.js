const Ship = require("./Ship");

test("Create a ship with correct properties", () => {
	const ship = new Ship(3);
	expect(ship.length).toBe(3);
	expect(ship.hits).toBe(0);
	expect(ship.sunk).toBe(false);
});

test("hit() and isSunk() work", () => {
	const ship = new Ship(2);
	ship.hit();
	expect(ship.hits).toBe(1);
	expect(ship.isSunk()).toBe(false);
	ship.hit();
	expect(ship.isSunk()).toBe(true);
});
