// computerPlay function that will randomly return 'Rock', 'Paper' or 'Scissors'

// function that plays a single round of Rock Paper Scissors
// takes 2 parameters playerSelection and computerSelection
// returns a string that declares the winner of the round 
// ex. 'You lose! Paper beats Rock'
// make playerSelection case-insensitive

// function game that calls playRound function 5 times
// keeps score and reports a winner or loser at the end
// console.log() the winner

function computerPlay(){
    // return random computer pick

    let picks = ['Rock', 'Paper', 'Scissors'];
    let randomPick = picks[Math.floor(Math.random() * picks.length)];

    return randomPick;
}

function playRound(playerSelection, computerSelection = computerPlay()){
    if ( playerSelection == 'Scissors' ) {
        if ( computerSelection == 'Rock' ) {
            console.log('You Lose! Rock beats Scissors');
            return 2;
        }

        else if ( computerSelection == 'Paper' ) {
            console.log('You Win! Scissors beats Paper');
            return 1;
        }

        else{
            return 0;
        }
    }

    else if ( playerSelection == 'Paper' ) {
        if ( computerSelection == 'Rock' ) {
            console.log('You Win! Rock beats Paper');
            return 1;
        }

        else if ( computerSelection == 'Scissors' ) {
            console.log('You Lose! Scissors beats Paper');
            return 2;
        }

        else {
            return 0;
        }
    }

    else if ( playerSelection == 'Rock' ) {
        if ( computerSelection == 'Scissors' ) {
            console.log('You Win! Rock beats Scissors');
            return 1;
        }

        else if ( computerSelection == 'Paper' ) {
            console.log('You Lose! Paper beats Rock');
            return 2;
        }

        else {
            return 0;
        }
    }

    else {
        return 'Typo!';
    }
}

function game() {

    let playerPoints = 0;
    let computerPoints = 0;

    let i = 0;

    while ( i < 5 ) {
        playerPlay = prompt('Rock Paper Scissors')
        playerPlay = playerPlay.charAt(0).toUpperCase() + playerPlay.slice(1);

        let output = playRound(playerPlay);
        if ( output == 1 ) {
            playerPoints++;
        }

        else if ( output == 2) {
            computerPoints++;
        }

        else {
            continue;
        }

        i++;
    }

    console.log(`Player: ${playerPoints} - Computer: ${computerPoints}`);
    if ( playerPoints > computerPoints ) {
        console.log( 'Player Wins!' );
    }
    
    else {
        console.log( 'Computer Wins!' );
    }
}