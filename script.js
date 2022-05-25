// computerPlay function that will randomly return 'Rock', 'Paper' or 'Scissors'

// function that plays a single round of Rock Paper Scissors
// takes 2 parameters playerSelection and computerSelection
// returns a string that declares the winner of the round 
// ex. 'You lose! Paper beats Rock'
// make playerSelection case-sensitive

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