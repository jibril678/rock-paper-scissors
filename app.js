function getComputerChoice () {
    let computerChoice = ["r", "p", "s"]
    let randomChoice = Math.floor(Math.random() * computerChoice.length + 1)
    
    if (randomChoice === 1) {
        return "rock"
    } else if (randomChoice === 2) {
        return "paper" 
    } else 
        return "scissors"
}

function getPlayerChoice () {
    let playerChoice = prompt("What do you draw?: Enter 'rock', 'paper, or 'scissors'")
    let response = playerChoice.toLowerCase()
    return response
    }


function playRound () {
    let playerSelection = getPlayerChoice()
    let computerSelection = getComputerChoice()
    console.log(`You played '${playerSelection}' and the computer played '${computerSelection}'`)


    if (playerSelection == computerSelection) {
        return "It's a tie!" 
    }
    else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        return "Computer Wins!"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win!"
    }
    else {
        return "Please enter a correct value"
    }
}

console.log(playRound())