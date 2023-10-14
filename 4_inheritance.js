// In function constructor syntax

function BankAccount(custName, balance=0){
    this.accountNumber = Date.now();
    this.custName = custName;
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount){ 
    this.balance -= amount;
}


// SavingAccount constructor.

function SavingAccount(custName, balance){
    BankAccount.call(this, custName, balance)
    this.transactionLimit = 10000;
}

// SavingAccount.prototype = BankAccount.prototype;   ❌ Don't do like this! here, both prototype refer to same object
// Inherit prototype of parent class in child class prototype.
SavingAccount.prototype = Object.create(BankAccount.prototype);  // ✅

SavingAccount.prototype.takePersonalLoan = function(amount){
    console.log('taking personal loan of amount: ' + amount);
}

tirthAccount = new SavingAccount("Tirth", 500);
tirthAccount.takePersonalLoan(100);
console.log(tirthAccount);



function CurrentAccount(custName, balance){
    BankAccount.call(this, custName, balance)
    this.transactionLimit = 50000;
}

CurrentAccount.prototype = Object.create(BankAccount.prototype);

CurrentAccount.prototype.takeBusinessLoan = function(amount){
    console.log('taking business loan of amount: ' + amount);
}

rakeshAccount = new CurrentAccount("Rakesh", 60000);

rakeshAccount.takeBusinessLoan(10000);
// rakeshAccount.takePersonalLoan(4000);   ❌ Uncaught TypeError: rakeshAccount.takePersonalLoan is not a function
console.log(rakeshAccount);