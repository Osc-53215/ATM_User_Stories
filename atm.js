const data = require('./account');


function getBalance(){
    return data.balance;

};

function withdraw(amount){
    if (amount != 0){
        data.balance = data.balance - amount;
    }
};

function deposit(amount){
    if(amount !=0 ){
        data.balance = data.balance + amount;

    }
};

function validatePin(pin){
        if(pin == data.pin){
            console.log('Correct');
            return true;
        }
        else{
            console.log('Incorrect');
            return false;
        }
};

module.exports.Getbalance = getBalance;
module.exports.Withdraw = withdraw;
module.exports.Deposit = deposit;
module.exports.ValidatePin = validatePin;