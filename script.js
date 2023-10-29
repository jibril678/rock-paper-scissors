const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorButton = document.getElementById("scissors")
const mainSection = document.getElementById("main")


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

let playerScore = 0
let computerScore = 0

function playRound (playerSelection) {
    let computerSelection = getComputerChoice()
    console.log(`You played '${playerSelection}' and the computer played '${computerSelection}'`)

    const existingResultElement = document.getElementById("round-result");
    if (existingResultElement) {
        existingResultElement.remove();
    }

    const tieResult = document.getElementById("tie-result")
    if (tieResult) {
        tieResult.remove()
    }

    const compRound = document.getElementById("comp-round")
    if (compRound) {
        compRound.remove()
    }

    const playerRound = document.getElementById("player-round")
    if (playerRound) {
        playerRound.remove()
    }

    const playerWin = document.getElementById("player-win")
    if (playerWin) {
        playerWin.remove()
    }

    const compWin = document.getElementById("comp-win")
    if (compWin) {
        compWin.remove()
    }

    const p1 = document.createElement("p")
    p1.id = "round-result";
    const text = document.createTextNode(`You played `);
    const playerBold = document.createElement("strong");
    playerBold.textContent = playerSelection;
    const text2 = document.createTextNode(` and the computer played `);
    const computerBold = document.createElement("strong");
    computerBold.textContent = computerSelection;

    p1.appendChild(text);
    p1.appendChild(playerBold);
    p1.appendChild(text2);
    p1.appendChild(computerBold);

    
    mainSection.append(p1)
   

    if (playerSelection === computerSelection) {
        const p2 = document.createElement("p")
        p2.id = "tie-result"
        p2.textContent = `It's a tie!! Score remains - You: ${playerScore} vs Computer: ${computerScore}`
        mainSection.append(p2)
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        const p3 = document.createElement("p")
        p3.id = "comp-round"
        p3.textContent = `Computer wins this round! Score is - You: ${playerScore} vs Computer: ${computerScore}`
        mainSection.append(p3)
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        const p4 = document.createElement("p")
        p4.id = "player-round"
        p4.textContent = `You win this round! Score is - You: ${playerScore} vs Computer: ${computerScore}`
        mainSection.append(p4)
    
    }

    if (playerScore === 5) {
        const playerWin = document.createElement("p")
        playerWin.id = "player-win"
        playerWin.textContent = `You have beaten the computer. Well done! Final score is - You: ${playerScore} vs Computer: ${computerScore}`
        mainSection.append(playerWin)
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore === 5) {
        const compWin = document.createElement("p")
        compWin.id = 'comp-win'
        compWin.textContent = `You lost the game! Better luck next time. The Final score is - You: ${playerScore} vs Computer: ${computerScore}`
        mainSection.append(compWin)
        playerScore = 0
        computerScore = 0
    }
}

rockButton.addEventListener('click' , () => playRound("rock"))
paperButton.addEventListener('click' , () => playRound("paper"))
scissorButton.addEventListener('click' , () => playRound("scissors"))