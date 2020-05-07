var scores, roundScore, activePlayer, dice, gamePlaying;
let diceDom1 = document.querySelector('#dice-1');
let diceDom2 = document.querySelector('#dice-2');

init();
let lastDise;

let btnRoll = document.querySelector('.btn-roll');

btnRoll.addEventListener('click', function() {
    if(gamePlaying) {
        //1. Random number generator
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        diceDom1.style.display = 'block';
        diceDom2.style.display = 'block';
        diceDom1.src = 'src/img/dice-' + dice1 + '.png';
        diceDom2.src = 'src/img/dice-' + dice2 + '.png';
        
        //3. Update the round score if the rolled score was not a 1
        if(dice1 !== 1 && dice2 !== 1) {
            //add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            Nextplayer();
        }

        /*
        if (dice === 6 && lastDise === 6) {
            //Player loses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            Nextplayer();
        } else if(dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            Nextplayer();
        }
        lastDise = dice;
        */
    }
});



let btnHold = document.querySelector('.btn-hold');

    btnHold.addEventListener('click', function() {
        if(gamePlaying) {
            //add current score to global score
           scores[activePlayer] = scores[activePlayer] + roundScore;
    
            // update the ui
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            
            let input = document.querySelector('.final-score').value;

            //Undifined, 0, null or "" are COERCED to false
            //anything else is COERCED to true
            if(input) {
                winScore = input;
            } else {
                winScore = 20;
            }

            // check if player won the game
            if(scores[activePlayer] >= winScore) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                diceDom1.style.display = 'none';
                diceDom2.style.display = 'none';
                gamePlaying = false;
            } else {
    
                //Nextplayer
                Nextplayer()
            }
        }
    })


    
function Nextplayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-0').textContent = roundScore;
    document.querySelector('#current-1').textContent = roundScore;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceDom1.style.display = 'none';
    diceDom2.style.display = 'none';
}


let btnNew = document.querySelector('.btn-new');
    btnNew.addEventListener('click', init);


function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    let score0 = document.querySelector('#score-0');
        score0.textContent = '0';
    let current0 = document.querySelector('#current-0');
        current0.textContent = '0';
    let score1 = document.querySelector('#score-1');
        score1.textContent = '0';
    let current1 = document.querySelector('#current-1');
        current1.textContent = '0';
    
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    diceDom1.style.display = 'none';
    diceDom2.style.display = 'none';
}

