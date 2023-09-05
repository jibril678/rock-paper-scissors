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


let playerScore = 0
let computerScore = 0

function playRound () {
    let playerSelection = getPlayerChoice()
    let computerSelection = getComputerChoice()
    console.log(`You played '${playerSelection}' and the computer played '${computerSelection}'`)


    if (playerSelection == computerSelection) {
        return "It's a tie!" 
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        return `Computer wins this round! Score is - You: ${playerScore} vs Computer: ${computerScore}`
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        return `You win this round! Score is - You: ${playerScore} vs Computer: ${computerScore}`
    }
    else {
        return "Please enter a correct value"
    }

}

function playGame() {
while (playerScore < 5 || computerScore < 5)
    if (playerScore === 5) {
        return `You have beaten the computer. Well done! Final score is - You: ${playerScore} vs Computer: ${computerScore}`
    }
    else if (computerScore === 5) {
        return `You lost the game! Better luck next time. The Final score is - You: ${playerScore} vs Computer: ${computerScore}`
    } else {
    console.log(playRound()) }
    
}

console.log(playGame())
