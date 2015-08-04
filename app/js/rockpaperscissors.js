////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove;
var computerMove;
function getPlayerMove(move) {
    var move = getInput();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === null || 0) {
        getInput();
    } else {
        console.log("Player picked " + move + ".");
        playerMove = move;
        getComputerMove();
    } 

}

function getComputerMove(move) {
    var move = randomPlay();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === null || 0) {
        randomPlay();
    } else {
        console.log("Computer picked " + move + ".");
        computerMove = move;
        getWinner(playerMove, computerMove);
    }
}

var winner;
function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    if (playerMove === 'rock' && computerMove === 'scissors') {
         winner = 'Player';
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'Computer';
      } else if (playerMove === 'paper' && computerMove === 'rock') {
          winner = 'Player';
        } else if (playerMove === 'paper' && computerMove === 'scissors') {
            winner = 'Computer';
          } else if (playerMove === 'scissors' && computerMove === 'paper') {
              winner = 'Player';
            } else if (playerMove === 'scissors' && computerMove === 'rock') {
                winner = 'Computer';
              }   else { 
                    winner = "Tie";
                    console.log("It's a tie!");
                    return winner;
    }
    console.log(winner + " wins!");
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

    for (var x = 0; x < 30; x += 1) {
        if (playerWins === 5 || computerWins === 5) {
            console.log("GAME OVER. " + "Player: " + playerWins + " | " + "Computer: " + computerWins);
            break;
        } 
         else {
            if (winner === 'Player') {
              playerWins += 1;
              console.log("SCORE: Player - " + playerWins + " | " + "Computer - " + computerWins);
            }   else if (winner === 'Computer') {
                computerWins += 1;  
                console.log("SCORE: Player - " + playerWins + " | " + "Computer - " + computerWins);
                }
        } getPlayerMove();
    } return [playerWins, computerWins];
}
playToFive();

