
const choices = ['rock', 'paper', 'scissors'];
let computerChoice = '';
let playerChoice = '';
let computerScore = 0;
let playerScore = 0;
let winner = ' ';

const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');

//Button Logic

function onRockButtonClick() {
    playerChoice = 'rock';
    computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
    console.log(`Computer score: ${computerScore} | Your score: ${playerScore}`);
}

function onPaperButtonClick() {
    playerChoice = 'paper';
    computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
    console.log(`Computer score: ${computerScore} | Your score: ${playerScore}`);
}

function onScissorsButtonClick() {
    playerChoice = 'scissors';
    computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
    console.log(`Computer score: ${computerScore} | Your score: ${playerScore}`);
}

// Game Logic

function getComputerChoice() {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerChoice, computerChoice) {
    let resultMessage = ''; 

    if (playerChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        playerScore++;
        resultMessage = `You win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}.`;
    }

    checkForWinner(); 

    
    updateResults(resultMessage);
    updateScore();
}

function updateResults(resultMessage) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = resultMessage + ` Computer score: ${computerScore} | Your score: ${playerScore}`;
    checkForWinner(); 
}

function checkForWinner() {
    const resultsDiv = document.getElementById('results');
    if (playerScore >= 5 || computerScore >= 5) {
        winner = playerScore >= 5 ? 'Congratulations! You win' : 'Game over! The computer wins';
        resultsDiv.textContent = `${winner} won the game!`;
        // add logic to end game
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



rockButton.addEventListener('click', onRockButtonClick);
paperButton.addEventListener('click', onPaperButtonClick);
scissorsButton.addEventListener('click', onScissorsButtonClick);

// update results

function updateScore() {
    const results = document.getElementById('score');
    results.textContent = `Computer score: ${computerScore} | Your score: ${playerScore}`;
}

function updateResults() {
    const results = document.getElementById('results');
    results.textContent = `Winner: ${winner}`;
}

