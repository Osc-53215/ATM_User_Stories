const atm = require('./atm');
const data = require('./account');
const PromptSync = require('prompt-sync')();


showMenu();

function showMenu(){
    // let userName = PromptSync('Welcome, what is your name?');
    // console.log();
    console.log('Hello thank you for choosing OCS Credit Union!');
    console.log();
    let userId = PromptSync('Please enter your ID: ');
    atm.ValidatePin = userId;
    console.log();
    console.log('What can we do for you today? ' + data.firstname);
    console.log();
    console.log('A. Check your balance \n B. Make a withdrawl \n C. Make a deposit \n D. Exit');


// do{
//     let userInput = PromptSync('A. Check your balance \n B. Make a withdrawl \n C. Make a deposit \n D. Exit');

//     switch(userInput){
//         case 'A':
//             console.log('Here is your balance $' + atm.Getbalance);
//             break;
//         case 'B':
//             var amount = prompt('Enter Amount to Withdraw: ');
//             atm.Withdraw(amount);
//             break;
//         case 'C':
//             var amount = prompt('Enter Amount to deposit: ');
//             atm.Deposit(amount);
//             break;
//         case 'D':
//             break;
//         default:
//             console.log('Error: invalid option. Please enter A, B, C, D')
//             showMenu();
//             break;
//         }
//     } while(userInput != 'D');
//     console.log('Thank you for banking with OCS Credit Union!');   
}