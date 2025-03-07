const Player = require("./Player");
const Ship = require("./Ship");
const Gameboard = require("./Gameboard");

test("Player's attack ship", () => {
	const ship1 = new Ship(2);
	const enemyboard = new Gameboard();
	enemyboard.placeShip(ship1, 5, 0, "horizontal");
	const lebron = new Player("lebron");
	lebron.attack(enemyboard, 5, 0);
	lebron.attack(enemyboard, 6, 0);
	expect(ship1.isSunk()).toBe(true);
});

test("Player's attack miss", () => {
	const ship1 = new Ship(2);
	const enemyboard = new Gameboard();
	enemyboard.placeShip(ship1, 5, 0, "horizontal");
	const lebron = new Player("lebron");
	lebron.attack(enemyboard, 4, 0);
	expect(enemyboard.board[0][4]).toBe("miss");
});
