//User part
const getUserChoice = (userInput) => {
	userInput = userInput.toLowerCase();
	if (
		userInput === "rock" ||
		userInput === "scissors" ||
		userInput === "paper"
	) {
		return userInput;
	} else {
		return "Error";
	}
};

console.log(getUserChoice("paper")); //test

//Computer part
function getComputerChoice() {
	const compNum = Math.floor(Math.random() * 3);
	switch (compNum) {
		case 0:
			return "paper";
			break;
		case 1:
			return "rock";
			break;
		case 2:
			return "scissors";
	}
}

console.log(getComputerChoice());

//Finding the winner
function determineWinner(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		return "tie";
	}
	if (userChoice === "rock") {
		if (computerChoice === "paper") {
			return "computer won";
		} else {
			return "user won";
		}
	}
	if (userChoice === "paper") {
		if (computerChoice === "scissors") {
			return "computer won";
		} else {
			return "user won";
		}
	}
	if (userChoice === "scissors") {
		if (computerChoice === "rock") {
			return "computer won";
		} else {
			return "user won";
		}
	}
}

console.log(determineWinner());

//Start the game and log the results
function playGame(userChoice, computerChoice) {
	var userChoice = getUserChoice("rock");
	console.log(userChoice);
	var computerChoice = getComputerChoice();
	console.log(computerChoice);
	console.log(determineWinner(userChoice, computerChoice));
}

playGame();


/*Adding a cheat code (if player types bomb he will always win):

In getUserChoice(), add a fourth condition that checks if the userInput is 'bomb'.

At the beginning of determineWinner(), add another if statement that makes the user win if the userChoice is 'bomb' */
