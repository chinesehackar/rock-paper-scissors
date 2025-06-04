let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random()*3);
    let randomChoice = "";
    switch (randomNumber) {
        case (1):
            randomChoice = "rock";
            break;
        case (2):
            randomChoice = "paper";
            break;
        case (3):
            randomChoice = "scissors";
            break;
        default:
            break;
    }
    return randomChoice
}

function getHumanChoice() {
  let playerChoice = prompt("rock, paper, scissors: ")
  return playerChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}`);
  if (humanChoice === computerChoice) {
    console.log("It's a Tie!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock.");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors.");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock.");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beat paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beat paper");
    computerScore++;
  } else {
    console.log("Choice invalidated");
  }
}

function playGame() {
    let humanSelection;
    let computerSelection;
    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You Win the Game!");
        console.log(`Final Score = ${humanScore} (You). ${computerScore} (Computer)`)
    } else if (humanScore < computerScore) {
        console.log("You Lose the Game!");
        console.log(`Final Score = ${humanScore} (You). ${computerScore} (Computer)`)
    } else {
        console.log("Game Draw")
        console.log(`Final Score = ${humanScore} (You). ${computerScore} (Computer)`)
    }
}

playGame();