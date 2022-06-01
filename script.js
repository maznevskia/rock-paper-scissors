function computerPlay(){
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
            console.log( 'Tie!' );
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
            console.log( 'Tie!' );
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
            console.log( 'Tie!' );
            return 0;
        }
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

const div = document.querySelector('div');
const p = document.createElement('p');

let score1 = 0, score2 = 0;

btnRock.addEventListener('click', () => btnPlay('Rock'));

btnPaper.addEventListener('click', () => btnPlay('Paper'));

btnScissors.addEventListener('click', () => btnPlay('Scissors'));