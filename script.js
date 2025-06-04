function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random()*3);
    let randomChoice = "";
    switch (randomNumber) {
        case (1):
            randomChoice = "rock"
            break;
        case (2):
            randomChoice = "paper"
            break;
        case (3):
            randomChoice = "scissors"
            break
        default:
            break;
    }
    return `The computer has chosen ${randomChoice}`
}

console.log(getComputerChoice());


