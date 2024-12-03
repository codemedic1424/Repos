// Rock, Paper, Scissors Set-up: 
// Variables/Functions

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) return 'ROCK';
  if (randomNumber == 1) return 'PAPER';
  if (randomNumber == 2) return 'SCISSORS';
}
function getHumanChoice() {
   let humanChoice = prompt("Please choose Rock, Paper, or Scissors!");
   return humanChoice.toUpperCase();
}



let compChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log(compChoice);
console.log(humanChoice);


// game logic
function playGame(params) {
    
    let humanScore    = 0;
    let computerScore = 0;

function playRound(humanChoice, compChoice) {
if (humanChoice === 'ROCK' && compChoice === 'SCISSORS') {
    console.log(`You WIN! ${humanChoice} beats ${compChoice}.`);
    humanScore += 1;
} else if (humanChoice === 'PAPER' && compChoice === 'ROCK') {
    console.log(`You WIN! ${humanChoice} beats ${compChoice}.`);
    humanScore += 1;
} else if (humanChoice === 'SCISSORS' && compChoice === 'PAPER') {
    console.log(`You WIN! ${humanChoice} beats ${compChoice}.`);
    humanScore += 1;
} else if (humanChoice === compChoice) {
    console.log("Draw! Try again!")
} else {
    console.log(`You LOSE! ${compChoice} beats ${humanChoice}!`);
    computerScore += 1;
}
}
for (let round = 0; round < 5; round++) {

    playRound(humanChoice, compChoice);
    getComputerChoice();
    getHumanChoice();
    }
}

playGame();