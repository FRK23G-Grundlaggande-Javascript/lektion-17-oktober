function greeting(greeting, name) {
    console.log(greeting + ' ' + name);
}

greeting('Hej', 'Christoffer');
greeting('Tjosan', 'Alice');

function multiply(firstNumber, secondNumber, thirdNumber, fourthNumber) {
    const sum = firstNumber * secondNumber;
    const secondSum = thirdNumber * fourthNumber;

    return secondSum;
}

function showSum(sum) {
    console.log('Summan blev: ' + sum);
}

function start() {
    const total = multiply(5, 5, 10, 2); // funktionen mulitply returnerar en summa som sparas i variabeln total
    showSum(total);
}

start();