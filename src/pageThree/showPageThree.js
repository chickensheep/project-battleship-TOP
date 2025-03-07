const players = require("../Player");

const createComputerPlayerBoard = require("./createComputerPlayerBoard");
const showTwoBoards = require("./showTwoBoards");

const showPageThree = (humanPlayerBoard) => {
	const header = document.querySelector(".header");
	const content = document.querySelector(".content");

	header.innerHTML = "";
	content.innerHTML = "";

	//header

	const instruction = document.createElement("p");
	instruction.textContent = "Attack enemy (computer) by clicking on his board";
	instruction.classList.add("instruction");
	header.appendChild(instruction);

	//create computers board and player
	const computerPlayerBoard = createComputerPlayerBoard();
	let computerPlayer = new players.ComputerPlayer();

	console.log(computerPlayerBoard);

	// show human and computer board
	showTwoBoards(humanPlayerBoard, computerPlayerBoard, computerPlayer);
};

module.exports = showPageThree;
