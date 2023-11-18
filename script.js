
const choices = ['rock', 'paper', 'scissors'];
let computerChoice = '';
let playerChoice = '';
let computerScore = 0;
let playerScore = 0;
let winner = ' ';

function getComputerChoice() {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getPlayerChoice() {
  let playerChoice = prompt('Please choose rock, paper, or scissors:').toLowerCase();
  if (choices.includes(playerChoice)) {
    return playerChoice;
  } else {
    alert('Invalid choice. Please choose rock, paper, or scissors.');
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    playerScore++;
    return "You win! Rock beats scissors.";
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerScore++;
    return "You win! Paper beats rock.";
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    playerScore++;
    return "You win! Scissors beats paper.";
  } else if (!choices.includes(playerChoice)) {
    
    return "Please choose rock, paper, or scissors.";
  }
  computerScore++;
  return "You lose!";
}

function game() {
  for (let i = 0; playerScore < 5 && computerScore < 5; i++) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    winner = playRound(playerChoice, computerChoice);
    alert(winner);
    alert(`Computer score: ${computerScore} | Your score: ${playerScore}`);
  }
  if (computerScore > playerScore) {
    alert('You lose the game!');
  } else if (computerScore < playerScore) {
    alert('You win the game!');
  }
}

computerChoice = getComputerChoice() ;
playerChoice = getPlayerChoice();


game()