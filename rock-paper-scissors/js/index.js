/**
 * 1. Koppla en eventlisterner till varje knapp, användaren väljer
 * 2. Slumpa datorns val och spara i en variabel
 * 3. Med hjälp av if-satser avgör vinnare
 * 4. Skriv ut vinnare
 */

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const winnerElem = document.querySelector('.winner');

let userPoints = 0;
let computerPoints = 0;

rockButton.addEventListener('click', () => {
    console.log('You choose rock');
    const computer = Math.ceil(Math.random() * 3);
    // 1 = Rock, 2 = paper, 3 = scissors
    console.log('1 = Rock, 2 = paper, 3 = scissors');
    console.log(computer);

    if (computer === 3) {
        winnerElem.innerHTML = 'You won!';
        
        userPoints = userPoints + 1; // Ta nuvarande värde och addera 1
        console.log('Dina poäng: ' + userPoints);
        //userPoints++; // Gör samma som ovan, adderar 1
    } else if (computer === 2) {
        winnerElem.innerHTML = 'Computer won!';

        computerPoints = computerPoints + 1;
        console.log('Datorns poäng: ' + computerPoints);
    } else {
        winnerElem.innerHTML = 'It is a tie!';
    }

});

paperButton.addEventListener('click', () => {
    console.log('You choose paper');
    const computer = Math.ceil(Math.random() * 3);
    // 1 = Rock, 2 = paper, 3 = scissors
    console.log('1 = Rock, 2 = paper, 3 = scissors');
    console.log(computer);

    if (computer === 1) {
        console.log('You won!');
        winnerElem.innerHTML = 'You won!';

        userPoints = userPoints + 1;
        console.log('Dina poäng: ' + userPoints);
    } else if (computer === 3) {
        console.log('Computer won!');
        winnerElem.innerHTML = 'Computer won!';

        computerPoints = computerPoints + 1;
        console.log('Datorns poäng: ' + computerPoints);
    } else {
        console.log('It is a tie!');
        winnerElem.innerHTML = 'It is a tie!';
    }
});

scissorsButton.addEventListener('click', () => {
    console.log('You choose scissors');
    const computer = Math.ceil(Math.random() * 3);
    // 1 = Rock, 2 = paper, 3 = scissors
    console.log('1 = Rock, 2 = paper, 3 = scissors');
    console.log(computer);

    if (computer === 2) {
        console.log('You won!');
        winnerElem.innerHTML = 'You won!';

        userPoints = userPoints + 1;
        console.log('Dina poäng: ' + userPoints);
    } else if (computer === 1) {
        console.log('Computer won!');
        winnerElem.innerHTML = 'Computer won!';

        computerPoints = computerPoints + 1;
        console.log('Datorns poäng: ' + computerPoints);
    } else {
        console.log('It is a tie!');
        winnerElem.innerHTML = 'It is a tie!';
    }
});