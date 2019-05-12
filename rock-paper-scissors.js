/*****
REQUIREMENTS
1. Function that randomly returns `rock`, `paper`, or `scissors` ---DONE---
2. Function that plays a single round. It takes 2 parameters (playerSelection and computerSelection and returns a string declaring the winner) ---DONE---
3. Write a function called game() that plays a 5 round game and keeps score and reports a winner or loser at the end ---DONE---
4. The results of each round should be console.logged ---DONE---
5. Use prompt() to get input from the user ---DONE---
*****/

let playerScore = 0;
let computerScore = 0;

function computerPick() {
  let choices = [`rock`, `paper`, `scissors`];
  let randomNumber = Math.floor( Math.random() * 3 ) ;
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  let winningMessage = `You win, ${playerSelection} beats ${computerSelection}. -`;
  let losingMessage = `You lose, ${computerSelection} beats ${playerSelection}. -`;

  if (playerSelection == computerSelection) {
    return `It's a tie! - The score is: Player: ${playerScore} Computer: ${computerScore}`;

  } else if (playerSelection == `rock` && computerSelection == `paper`) {
    playerScore+= 1;
    return `${winningMessage} The score is: Player: ${playerScore} Computer: ${computerScore}`;

  } else if (playerSelection == `rock` && computerSelection == `scissors`) {
    computerScore+= 1;
    return `${losingMessage} The score is: Player: ${playerScore} Computer: ${computerScore}`;

  } else if (playerSelection == `paper` && computerSelection == `rock`) {
    playerScore+= 1;
    return `${winningMessage} The score is: Player: ${playerScore} Computer: ${computerScore}`;

  } else if (playerSelection == `paper` && computerSelection == `scissors`) {
    computerScore+= 1;
    return `${losingMessage} The score is: Player: ${playerScore} Computer: ${computerScore}`;

  } else if (playerSelection == `scissors` && computerSelection == `paper`) {
    playerScore+= 1;
    return `${winningMessage} The score is: Player: ${playerScore} Computer: ${computerScore}`;

  } else if (playerSelection == `scissors` && computerSelection == `rock`) {
    computerScore+= 1;
    return `${losingMessage} The score is: Player: ${playerScore} Computer: ${computerScore}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerPick = prompt('Rock, Paper, or Scissors?').toLocaleLowerCase();
    console.log( playRound( playerPick, computerPick() ) );
  }

  let winner = '';
  if (playerScore > computerScore) {
    winner = `You`;
  } else if (computerScore > playerScore) {
    winnder = `the Computer`;
  } else {
    winner = `neither of you. It was a tie`;
  }

  console.log(`GAME OVER! The winner is ${winner}. - The final score is: Player: ${playerScore}  Computer: ${computerScore}`);
}