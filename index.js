const buttonsList = document.querySelector(".buttons-list");
const winner = document.querySelector(".winner");
const score = document.querySelector(".score span");
const round = document.querySelector(".round span");
const roundWinner = document.querySelector(".round-winner");

buttonsList.addEventListener("click", playGame);

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

// Play the game
function playGame(e) {
  if (!checkIsGameEnd(humanScore, computerScore)) {
    playRound(getHumanChoice(e), getComputerChoice());

    if (humanScore === 5) {
      winner.textContent = winner.textContent + " Human won the game";
    } else if (computerScore === 5) {
      winner.textContent = winner.textContent + " Computer won the game";
    }
  }
}

// Check if someone has already won
function checkIsGameEnd(humanScore, computerScore) {
  if (humanScore === 5 || computerScore === 5) {
    return true;
  }
  return false;
}

// Getting a human choice from: rock, paper and scissors
function getHumanChoice(e) {
  const choice = e.target.id;

  return choice;
}

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
      break;
  }
}

// Choose a winner in current round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    roundWinner.textContent = "Human won";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    roundWinner.textContent = "Computer won";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    roundWinner.textContent = "Human won";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    roundWinner.textContent = "Computer won";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    roundWinner.textContent = "Computer won";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    roundWinner.textContent = "Human won";
  } else {
    roundWinner.textContent = "Tide";
  }

  roundCount += 1;
  round.textContent = `${roundCount}`;
  score.textContent = ` ${humanScore} : ${computerScore}`;
  roundWinner.style.display = "block";
}
