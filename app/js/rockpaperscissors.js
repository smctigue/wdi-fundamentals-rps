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

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === "rock") {
        return "rock";
    } else if (move === "paper") {
        return "paper";
    } else if (move === "scissors") {
        return "scissors";
    } else (move === 'null');
        return  'getInput()';
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === "rock") {
        return "rock";
    } else if (move === "paper") {
        return "paper";
    } else if (move === "scissors") {
        return "scissors";
    } else (move === 'null');
        return  'randomPlay()';
}

function getWinner(playerMove,computerMove) {
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
    while (playerMove === "rock") {
    if (computerMove === "rock") {
        return "tie";
    } else if (computerMove === "paper") {
        return "computer";
    } else if (computerMove === "scissors") {
        return "player";
    }
}
    while (playerMove === "paper") {
    if (computerMove === "rock") {
        return "player";
    } else if (computerMove === "paper") {
        return "tie";
    } else if (computerMove === "scissors") {
        return "computer";
    }
}
    while (playerMove === "scissors") {
    if (computerMove === "rock") {
        return "computer";
    } else if (computerMove === "paper") {
        return "player";
    } else if (computerMove === "scissors") {
        return "tie";
    }
}
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

