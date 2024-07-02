let humanScore = 0;
let computerScore = 0;
console.log(humanScore, computerScore);

// Getting a computer choice from: rock, paper and scissors
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      console.log("You can't be here");
  }
}

// Getting a human choice from: rock, paper and scissors
function getHumanChoice() {
  const userChoice = prompt("Enter your choice: rock, paper or scissors");
  const choice = userChoice.toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  }

  console.log("Please enter one of these: rock, paper or scissors");
}

// Choose a winner in current round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    console.log("human won");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    console.log("computer won");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    console.log("human won");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    console.log("computer won");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    console.log("computer won");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    console.log("human won");
  } else {
    console.log("No one scored");
  }

  console.log(humanScore, computerScore);
}

// Check if someone has already won
function checkIsGameEnd(humanScore, computerScore) {
  if (humanScore === 5 || computerScore === 5) {
    return true;
  }
  return false;
}

// Play our game
function playGame() {
  while (!checkIsGameEnd(humanScore, computerScore)) {
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore === 5) {
      console.log("Human won the game");
    } else if (computerScore === 5) {
      console.log("Computer won the game");
    } else continue;
  }

  console.log(humanScore, computerScore);
}

playGame();