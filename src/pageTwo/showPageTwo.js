const Gameboard = require("../Gameboard");
const Player = require("../Player").Player;
const ComputerPlayer = require("../Player").ComputerPlayer;
const Ship = require("../Ship");

const showHello = require("./showHello");
const showBoard = require("./showBoard");
const showPlaceShip = require("./showPlaceShip");

const humanPlayerBoard = new Gameboard();

const showPageTwo = (nameInputValue) => {
	const header = document.querySelector(".header");
	header.innerHTML = "";

	showHello(nameInputValue);
	showBoard(humanPlayerBoard);
	showPlaceShip(humanPlayerBoard);
};

module.exports = showPageTwo;
