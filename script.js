let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const wrapper = document.querySelector(".wrapper");
let div = document.querySelector(".round-win");
let status = document.querySelector(".status");
let runningScore = document.querySelector(".running-score");

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

buttons.forEach(item => {
  item.addEventListener("click", function (e) {
    let humanChoice = e.target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();

    buttons.forEach(btn => {
      btn.classList.remove("rock-choice", "paper-choice", "scissors-choice");
    });

    if (humanChoice === "rock") {
      e.target.classList.add("rock-choice");
    } else if (humanChoice === "paper") {
      e.target.classList.add("paper-choice");
    } else if (humanChoice === "scissors") {
      e.target.classList.add("scissors-choice")
    }

    playRound(humanChoice,computerChoice);
  })
})

// function getHumanChoice(e) {
//   let playerChoice = prompt("rock, paper, scissors: ")
//   return playerChoice.toLowerCase();
// }

function playRound(humanChoice, computerChoice) {
  status.textContent = `You chose ${humanChoice}; the computer chose ${computerChoice}.`
  if (humanChoice === computerChoice) {
    div.textContent = " It's a Tie!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    div.textContent = " You lose! Paper beats Rock.";
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    div.textContent = " You win! Rock beats Scissors.";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    div.textContent = " You win! Paper beats rock.";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    div.textContent = " You lose! Scissors beat paper";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    div.textContent = " You lose! Rock beats scissors";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    div.textContent = " You win! Scissors beat paper";
    computerScore++;
  } else {
    div.textContent = " Choice invalidated";
  }
  runningScore.textContent = `first to five: You: ${humanScore}. Computer: ${computerScore}`;
  if (computerScore === 5) {
    runningScore.textContent = `You Lose! You: ${humanScore}. Computer: ${computerScore}`
    computerScore = 0;
    humanScore = 0;
  } else if (humanScore === 5) {
    runningScore.textContent = `You Win! You: ${humanScore}. Computer: ${computerScore}`
    computerScore = 0;
    humanScore = 0;
  }
}

// function playGame() {
//     let humanSelection;
//     let computerSelection;
//     for (let i = 0; i < 5; i++) {
//         humanSelection = getHumanChoice();
//         computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
//     if (humanScore > computerScore) {
//         console.log("You Win the Game!");
//         console.log(`Final Score = ${humanScore} (You). ${computerScore} (Computer)`)
//     } else ievef (humanScore < computerScore) {
//         console.log("You Lose the Game!");
//         console.log(`Final Score = ${humanScore} (You). ${computerScore} (Computer)`)
//     } else {
//         console.log("Game Draw")
//         console.log(`Final Score = ${humanScore} (You). ${computerScore} (Computer)`)
//     }
// }

// playGame();

//
//two errors: our choice is [object pointer event] and computer choice undefined.