let playerScore = 0;
let pcScore = 0;

function pcChoice() {
  const randomPick = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return randomPick[randomNum];
}

function playerChoice() {
    console.log("Welcome to Rock, Paper, Scissors game. Do you want to play? (y/n)");
    let userInput = prompt();
    while (userInput === "y") {
      let pChoice = prompt("Choose rock, paper, or scissors:");
      while (pChoice !== "rock" && pChoice !== "paper" && pChoice !== "scissors") {
        pChoice = prompt("Invalid input. Please choose rock, paper, or scissors:");
      }
      const cChoice = pcChoice();
      console.log(`You chose ${pChoice}. The computer chose ${cChoice}.`);
      const lowercasePChoice = pChoice.toLowerCase();
      if (lowercasePChoice === "rock" && cChoice === "paper") {
        pcScore++;
        console.log(`You lose! Your score is ${playerScore}. And computer score is: ${pcScore}.`);
      } else if (lowercasePChoice === "paper" && cChoice === "scissors") {
        pcScore++;
        console.log(`You lose! Your score is ${playerScore}. And computer score is: ${pcScore}.`);
      } else if (lowercasePChoice === "scissors" && cChoice === "rock") {
        pcScore++;
        console.log(`You lose! Your score is ${playerScore}. And computer score is: ${pcScore}.`);
      } else if (lowercasePChoice === cChoice) {
        console.log(`It's a tie! Your score is ${playerScore}. And computer score is: ${pcScore}.`);
      } else {
        playerScore++;
        console.log(`You win! Your score is ${playerScore}. And computer score is: ${pcScore}.`);
      }
      userInput = prompt("Do you want to play again? (y/n)");
    }
    console.log("Thanks for playing!");
  }

playerChoice();