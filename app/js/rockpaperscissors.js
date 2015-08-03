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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move = getInput();
    if (move === null || 0) {
        getInput();
    } else {
        console.log("Player picked " + move + ".");
        playerMove = move;
        getComputerMove();
    } 

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var move = randomPlay();
    if (move === null || 0) {
        randomPlay();
    } else {
        console.log("Computer picked " + move + ".");
        computerMove = move;
        getWinner(playerMove, computerMove);
    }
}


function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var winner;

    if ((playerMove === 'rock') && computerMove === 'rock') {
        winner = 'tie';
    } else if ((playerMove === 'rock') && computerMove === 'scissors') {
        winner = 'player';
    } else if ((playerMove === 'rock') && computerMove === 'paper') {
        winner = 'computer';
    } else if ((playerMove === 'paper') && computerMove === 'paper') {
        winner = 'tie';
    } else if ((playerMove === 'paper') && computerMove === 'rock') {
         winner = 'player';
    } else if ((playerMove === 'paper') && computerMove === 'scissors') {
         winner = 'computer';
    } else if ((playerMove === 'scissors') && computerMove === 'scissors') {
         winner = 'tie';
    } else if ((playerMove === 'scissors') && computerMove === 'paper') {
         winner = 'player';
    } else if ((playerMove === 'scissors') && computerMove === 'rock') {
         winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
    var pMove = getPlayerMove();
    var cMove = getComputerMove();
    var winner = getWinner(pMove, cMove);
    
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    for (var x = 1; x <= 5; x += 1){
        if (winner === 'player'){
            playerWins += 1;
        }   else if (winner === 'computer'){
            computerWins += 1;  
        }
    console.log('Player chose ' + pMove + '. ' + 'Computer chose ' + cMove + '.');
    console.log('The score is currently ' + playerWins +' to ' + computerWins + '.');
    }
    return [playerWins, computerWins];
}
playToFive();
