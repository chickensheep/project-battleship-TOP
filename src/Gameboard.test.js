const Ship = require("./Ship");
const Gameboard = require("./Gameboard");

test("Placing a normal ship return true", () => {
	const ship1 = new Ship(5);
	const ship2 = new Ship(5);
	const gameboard = new Gameboard();
	expect(gameboard.placeShip(ship1, 5, 0, "Horizontal")).toBe(true);
	expect(gameboard.placeShip(ship2, 2, 1, "Vertical")).toBe(true);
});

test("Placing ship outside of gameboard return false", () => {
	const ship1 = new Ship(5);
	const gameboard = new Gameboard();
	expect(gameboard.placeShip(ship1, 6, 1, "Horizontal")).toBe(false);
});

test("Placing overlapping ships return false", () => {
	const ship1 = new Ship(5);
	const ship2 = new Ship(5);
	const gameboard = new Gameboard();
	expect(gameboard.placeShip(ship1, 5, 0, "Horizontal")).toBe(true);
	expect(gameboard.placeShip(ship2, 6, 0, "Vertical")).toBe(false);
});

test("receiveAttack increases hits", () => {
	const ship1 = new Ship(5);
	const gameboard = new Gameboard();
	gameboard.placeShip(ship1, 5, 0, "Horizontal");
	gameboard.receiveAttack(7, 0);
	gameboard.receiveAttack(8, 0);
	expect(ship1.hits).toBe(2);
});

test("receiveAttack sink the boat", () => {
	const ship1 = new Ship(5);
	const gameboard = new Gameboard();
	gameboard.placeShip(ship1, 5, 0, "Horizontal");
	gameboard.receiveAttack(5, 0);
	gameboard.receiveAttack(6, 0);
	gameboard.receiveAttack(7, 0);
	gameboard.receiveAttack(8, 0);
	gameboard.receiveAttack(9, 0);
	expect(ship1.isSunk()).toBe(true);
});

test("allShipSunk work", () => {
	const ship1 = new Ship(5);
	const ship2 = new Ship(2);
	const gameboard = new Gameboard();
	gameboard.placeShip(ship1, 5, 0, "Horizontal");
	gameboard.placeShip(ship2, 3, 0, "Horizontal");
	gameboard.receiveAttack(3, 0);
	gameboard.receiveAttack(4, 0);
	gameboard.receiveAttack(5, 0);
	gameboard.receiveAttack(6, 0);
	gameboard.receiveAttack(7, 0);
	gameboard.receiveAttack(8, 0);
	gameboard.receiveAttack(9, 0);
	expect(gameboard.allShipSunk()).toBe(true);
});
