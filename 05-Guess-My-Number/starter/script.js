'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// to insert some text to html element with class 'message'
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// run fuction when click on button with class 'click'
// assign input value to 'guess' and convert to number type
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // if input dont exist
    if (!guess) {
        displayMessage('Choose your destiny!!');

        // if guess is write
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'; // insert text to 'message' html
        displayMessage('Correct Number!'); // run function with attribute
        document.querySelector('.number').textContent = secretNumber; // 'make visible secretNumber' insert it instead of '?'

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            // refresh high score if its better then before in game session
            highscore = score;
            document.querySelector('.highscore').textContent = highscore; // to display new hignscore value
        }

        // if guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // if you have attempts
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!'); // ternary for displaymessage function
            score--;
            document.querySelector('.score').textContent = score; // set new score vallue
        } else {
            displayMessage('You lost the game!'); // if u dont have attempts - you loose
            document.querySelector('.score').textContent = 0; // set score to '0'
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    // call function on click button with class '.again'
    score = 20; // reset score to starter value
    secretNumber = Math.trunc(Math.random() * 20) + 1; // renew secretNumber

    displayMessage('Start guessing...'); // reset start message
    document.querySelector('.score').textContent = score; // score 20
    document.querySelector('.number').textContent = '?'; // '?' insteed of secretNumber in html
    document.querySelector('.guess').value = ''; // input field must be empty

    document.querySelector('body').style.backgroundColor = '#222'; // reset background and number width with inline styles
    document.querySelector('.number').style.width = '15rem';
});
