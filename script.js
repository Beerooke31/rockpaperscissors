function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const randNum = Math.floor(Math.random() * 3)
    const compChoice = options[randNum]
    return compChoice   
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie! You both chose rock."
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie! You both chose scissors."
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie! You both chose paper."
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors."
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors cut paper"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper covers rock."
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper covers rock."
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats scissors."
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors cut paper."
    }

  }   
  
const playGame = () => {
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Make your move:", "Rock, Paper, Scissors").toLowerCase()
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    console.log(playRound(playerSelection, computerSelection))
    }
}

playGame()






