const atm = require('./atm');

const prompt = require('prompt-sync');

showMenu();

function showMenu(){
    let userName = prompt('Welcome, what is your name? \n\n');

    console.log('Hello, ' + userName + 'thank you for choosing OCS Credit Union!');
    console.log('Please enter your ID: ' );
    console.log();
    console.log('What can we do for you today?');
    console.log();
    let userInput = prompt('A. Check your balance \n B. Make a withdrawl \n C. Make a deposit \n D. Exit');

    switch(userInput){
        case 'A':
            console.log('Here is your balance $' + atm.Getbalance);
            break;
        case 'B':
            console.log(atm.Withdraw);
            break;
        case 'C':
            console.log(atm.Deposit);
            break;
        case 'D':
            break;
        default:
            showMenu();
    }

}