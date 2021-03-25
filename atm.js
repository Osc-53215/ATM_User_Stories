const data = require('./account');


withdraw();

function getBalance(amount){
    amount = data[1].balance

};

function withdraw(amount){
    if (amount != 0){
        balance = data[1].balance - amount;
    }
};

console.log(amount);

function deposit(amount){
    if(amount !=0 ){
        balance = data[1].balance + amount;

    }
};

function validatePin(people){
    let foundPerson = people[data.id].filter(function(person){
        if(data.id == id){
            return true;
        }
        else{
            return false;
        }
    
    })
    return foundPerson; 
};

module.exports.Getbalance = getBalance;
module.exports.Withdraw = withdraw;
module.exports.Deposit = deposit;
module.exports.ValidatePin = validatePin;