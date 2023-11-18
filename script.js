const choices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let gameOver = false;

const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
const roundDiv = document.getElementById('round');

// Button Listeners
rockButton.addEventListener('click', () => playerMakesChoice('rock'));
paperButton.addEventListener('click', () => playerMakesChoice('paper'));
scissorsButton.addEventListener('click', () => playerMakesChoice('scissors'));

function playerMakesChoice(playerChoice) {
    if (gameOver) {
        return;
    }

    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);
    updateResults(roundResult);
    updateScore();
    updateRound(playerChoice, computerChoice);
    checkForWinner();
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        playerScore++;
        return `You win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`;
    } else {
        computerScore++;
        return `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}.`;
    }
}

function updateScore() {
    scoreDiv.textContent = `Computer score: ${computerScore} | Your score: ${playerScore}`;
}

function updateResults(resultMessage) {
    resultsDiv.textContent = resultMessage;
}

function updateRound(playerChoice, computerChoice) {
    roundDiv.textContent = `You picked: ${capitalizeFirstLetter(playerChoice)}, Computer picked: ${capitalizeFirstLetter(computerChoice)}`;
}

function checkForWinner() {
    if (playerScore >= 5 || computerScore >= 5) {
        gameOver = true;
        const winnerMessage = playerScore >= 5 ? 'Congratulations! You win the game!' : 'Game over! The computer wins the game!';
        resultsDiv.textContent = winnerMessage;
        // Add any logic here for what happens when the game ends, e.g., disabling buttons
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
