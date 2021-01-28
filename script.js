'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function changeBg(color) {
    document.querySelector('body').style.backgroundColor = color;
}


document.querySelector('.check').addEventListener('click', function () {


        const guess = Number(document.querySelector('.guess').value);


        //Empty input
        if (!guess) {
            displayMessage('No number! ⛔');

            //  Player guess number
        } else if (guess === secretNumber) {
            displayMessage('Correct Number🎉🏆');

            document.querySelector('.number').textContent = secretNumber;

            changeBg('#60b347');
            document.querySelector('.number').style.width = '30rem';

            if (score > highScore) {
                highScore = score;

                document.querySelector('.highScore').textContent = highScore;
            }
        }
            else if (guess !== secretNumber) {
                if (score > 1) {
                   displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📈')
                    score--;
                    document.querySelector('.score').textContent = score;
                } else {
                    displayMessage('You lost the game!💥');
                    document.querySelector('.score').textContent = 0;
                }
            }

    /*
      //number greater than guess
 }

else if (guess > secretNumber) {
     if (score > 1) {
         document.querySelector('.message').textContent = 'Too high!📈';
         score--;
         document.querySelector('.score').textContent = score;
     } else {
         document.querySelector('.message').textContent = 'You lost!💥';
         document.querySelector('.score').textContent = 0;
     }

     //     number less than guess
 } else if (guess < secretNumber) {
     if (score > 1) {
         document.querySelector('.message').textContent = 'Too low!📈';
         score--;
         document.querySelector('.score').textContent = score;
     } else {
         document.querySelector('.message').textContent = 'You lost the game!💥';
         document.querySelector('.score').textContent = 0;
     }

 }
*/

    }
)

// to reset game
document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('.score').textContent= score;
    document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value = '';


    displayMessage('Start Guess...!💥');

    changeBg('#222');
    document.querySelector('.number').style.width = '15rem';
});

