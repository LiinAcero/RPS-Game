let playerScore = 0;
let pcScore = 0;

function pcChoice(cChoice){
const randomPick = ["rock, paper, scissors"];
const randomNum = Math.floor(Math.random() * 3);
return randomPick[randomNum];
}

function  playerChoice(pChoice){
    const rps = ["rock, paper, scissors"]
    return rps.localeCompare(undefined, { sensitivity: "accent"}) === 0;
    if (pChoice == "rock" && pcChoice == "paper"){
        playerScore ++;
        console.log(`You win! Your score is: ${playerScore}. And computer score is: ${pcScore}`)
    }
}