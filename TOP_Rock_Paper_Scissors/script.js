// Rock, Paper, Scissors Set-up: 
// Variables/Functions

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    randomNumber = "ROCK";
  } else if (randomNumber === 1) {
    randomNumber = "PAPER";
  } else {
    randomNumber = "SCISSORS";
  }
  console.log(`Computer Choice: ${randomNumber}`)
  return randomNumber;
}
function getHumanChoice() {
   let choice = prompt("Please choose Rock, Paper, or Scissors!").toUpperCase();
   console.log(`Human Choice: ${choice}`);
   return choice; 
}
let humanScore = 0;
let compScore = 0;

function playRound() {
    // getComputerChoice();
    // getHumanChoice();
    const humanChoice = getHumanChoice();
    const compChoice = getComputerChoice();
    if (humanChoice === "ROCK" && compChoice === "SCISSORS") {
        console.log(`You WIN! ${humanChoice} beats ${compChoice}!`);
        humanScore++; 
    } else if (humanChoice === "PAPER" && compChoice === "ROCK") {
        console.log(`You WIN! ${humanChoice} beats ${compChoice}!`);
        humanScore++;
    } else if (humanChoice === "SCISSORS" && compChoice === "PAPER") {
        console.log(`You WIN! ${humanChoice} beats ${compChoice}!`);
        humanScore++;
    } else if (humanChoice === compChoice) {
        console.log('Tie! No points!')
    } else {
        console.log(`You LOSE! ${compChoice} beats ${humanChoice}!`);
        compScore++;
    }
    console.log(`Your score: ${humanScore},  Comp Score: ${compScore}`);
    console.log('---------------------------------------------------------');
}

function playGame() {
    for (let round = 0; round < 5; round++) {
        playRound();
    }
    if (humanScore > compScore) {
        console.log("You WIN! You are a lucky Genius!");
    } else if (compScore > humanScore) {
        console.log(" You LOSE! Work on your throws!");
    } else {
        console.log("Tie Game! Not too shabby!");
    }
}

playGame();