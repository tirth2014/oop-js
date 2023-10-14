class BankAccount {                  
    custName;
    balance;

    constructor(custName, balance=0, accountType){
        this.custName = custName;
        this.balance = balance;
        this.accountType = accountType
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Hello ${this.custName}, Amount ${amount} credited to your ${this.accountType} account.`);
    }

    withdraw(amount){
        this.balance -= amount;
        console.log(`Hello ${this.custName}, Amount ${amount} has been withdrawn from your ${this.accountType} account.`)
    }

}

class SavingAccount extends BankAccount {
    
    transactionLimit = 10000;

    constructor(custName, balance=0){
        super(custName, balance, 'saving');
    }

    takePersonalLoan(amount){
        console.log('taking personal loan of amount: ' + amount);
    }
}

class CurrentAccount extends BankAccount {
    
    transactionLimit = 50000;

    constructor(custName, balance=0){
        super(custName, balance, 'current');
    }

    takeBusinessLoan(amount){
        console.log('taking business loan of amount: ' + amount);
    }
}

tirthSavingAc = new SavingAccount("Tirth Saving AC", 5000);
tirthSavingAc.deposit(500);
tirthSavingAc.takePersonalLoan(1000);

tirthCurrentAc = new CurrentAccount("Tirth Current AC", 60000);
tirthCurrentAc.withdraw(4000);
tirthCurrentAc.takeBusinessLoan(50000);


console.log(tirthSavingAc);
console.log(tirthCurrentAc);