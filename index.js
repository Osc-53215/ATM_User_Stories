const atm = require('./atm');

const PromptSync = require('prompt-sync')();


showMenu();

function showMenu(){
    let userName = PromptSync('Welcome, what is your name? ');
    console.log('Hello, ' + userName + ' thank you for choosing OCS Credit Union!');
    // console.log('Please enter your ID: ' );
    // let validatedId = parseInt(PromptSync(''));
    // atm.ValidatePin(validatedId);
    console.log('What can we do for you today?');
    console.log('\n A. Check your balance \n B. Make a withdrawl \n C. Make a deposit \n D. Exit \n \n');
    

do {

    let userInput = PromptSync('Enter A, B, C, D ');
    console.log('\n')

    switch(userInput){
        case 'A':
            console.log('==================================================');
            var amount1 = atm.Getbalance(amount1);
            console.log('Here is your balance $' + amount1);
            console.log('==================================================');
            break;
        case 'B':
            console.log('Enter Amount to Withdraw: \n');
            var amountToWithdraw = parseInt(PromptSync(''));
            atm.Withdraw(amountToWithdraw);
            var amount2 = atm.Getbalance(amount2);
            console.log('Here is the remainder of your balance $' + amount2);
            break;
        case 'C':
            var amount3 = PromptSync('Enter Amount to deposit: \n');
            atm.Deposit(amount3);
            var amount3 = atm.Getbalance(amount3);
            console.log('Here is the remainder of your balance $' + amount3);
            break;
        case 'D':
            console.log('==================================================');
            break;
        default:
            console.log('Error: invalid option. Please enter A, B, C, D')
            break;
        }
    } while(userInput !== 'D');
    console.log('Thank you for banking with OCS Credit Union!');
}