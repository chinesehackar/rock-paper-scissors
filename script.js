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
  return playerChoice;
}

console.log(getHumanChoice())
