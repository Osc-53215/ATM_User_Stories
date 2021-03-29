'use strict'

const atm = require('./atm');

const PromptSync = require('prompt-sync')();


showMenu();

function showMenu(){
    let counter = 0;
    let userName = PromptSync('Welcome, what is your name? ');
    console.log('\n')
    console.log('Hello, ' + userName + ' thank you for choosing OCS Credit Union!\n');
    let validatedId = parseInt(PromptSync('Please enter your ID: '));
    atm.ValidatePin(validatedId);
    console.log('What can we do for you today? \n');
    console.log('A. Check your balance \n B. Make a withdrawl \n C. Make a deposit \n D. Exit \n \n');
    

do {
    
    console.log('Enter A, B, C, D ' + '\n');
    let userInput1 = PromptSync('');
    let userInput = userInput1.toUpperCase();

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
            console.log('Enter Amount to deposit: \n');
            var amountToDeposit = parseInt(PromptSync(''));
            atm.Deposit(amountToDeposit);
            var amount3 = atm.Getbalance(amount3);
            console.log('Here is your new balance $' + amount3);
            break;
        case 'D':
            console.log('==================================================');
            console.log('Thank you for banking with OCS Credit Union!');
            return ++counter;
        default:
            console.log('Error: invalid option. Please enter A, B, C, D')
            break;
        }
    } while(counter = 1);
    
}