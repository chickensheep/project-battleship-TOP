const showOptions = require("./showOptions.js");
const showPlaceShip = require("./showPlaceShip");
const showBoard = require("./showBoard");

function options(board) {
	showOptions(board);
}

function placeShipButton(board) {
	showPlaceShip(board);
}

function renderBoard(BOARD, length, direction) {
	showBoard(BOARD, length, direction);
}

module.exports = { options, placeShipButton, renderBoard };
