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
    // game logic if player chooses Scissors
    
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
            console.log( 'Tie!' );
            return 0;
        }
    }
    
    else if ( playerSelection == 'Paper' ) {
        // game logic if player chooses Paper
        
        if ( computerSelection == 'Rock' ) {
            console.log('You Win! Rock beats Paper');
            return 1;
        }
        
        else if ( computerSelection == 'Scissors' ) {
            console.log('You Lose! Scissors beats Paper');
            return 2;
        }
        
        else {
            console.log( 'Tie!' );
            return 0;
        }
    }
    
    else if ( playerSelection == 'Rock' ) {
        // game logic if player chooses Rock

        if ( computerSelection == 'Scissors' ) {
            console.log('You Win! Rock beats Scissors');
            return 1;
        }

        else if ( computerSelection == 'Paper' ) {
            console.log('You Lose! Paper beats Rock');
            return 2;
        }

        else {
            console.log( 'Tie!' );
            return 0;
        }
    }

    // if players input is invalid

    else {
        console.log( 'Typo!' );
    }
}

const btnPlay = (choice) => {
    const result = playRound(choice);
    if ( result == 1 ) score1++;
    else if ( result == 2 ) score2++;
    p.innerText = `Player: ${score1} - Computer: ${score2}`;
    div.append(p);
    if ( score1 == 5 ) {
        p.innerText = `Player Won!`
        score1 = 0;
        score2 = 0;
        div.append(p);
    }

    else if ( score2 == 5 ) {
        p.innerText = `Computer Won!`
        score1 = 0;
        score2 = 0;
        div.append(p);
    }

    
};

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

let score1 = 0, score2 = 0;

btnRock.addEventListener('click', () => {
    btnPlay('Rock');
});

btnPaper.addEventListener('click', () => {
    btnPlay('Paper');
});

btnScissors.addEventListener('click', () => {
    btnPlay('Scissors');
});

const div = document.querySelector('div');

const p = document.createElement('p');

// click of button starts play round

// in play round we change the result which will be displayed on screen

// in the event listener function we will change the 

// lastly the score will be updated