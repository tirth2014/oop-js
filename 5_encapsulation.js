// write '#' before variable or method to make it private in JS
// Private properties and methods CANNOT be accessed outside of the class it's defined in.


class BankAccount {
    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    // setter method for 'balance' private property
    set balance(amount) {
        if (isNaN(amount)) {
            throw new Error('Amount is not a valid input');
        }
        this.#balance = amount;
    }

    // getter method for 'balance' private property
    get balance() {
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    #calculateInterest(amount) {
        console.log('Calculating interest');
    }

    takeBusinessLoan(amount) {
        // Logic
        this.#calculateInterest(amount);
        console.log('Taking business loan: ' + amount);
    }
}

const tirthAccount = new CurrentAccount('Tirth', 2000);
// tirthAccount.setBalance(400);
tirthAccount.takeBusinessLoan(40000);
console.log(tirthAccount);
tirthAccount.balance = 5000;      //  ✅
// tirthAccount.balance = "Hello";    ❌ Uncaught Error: Amount is not a valid input
console.log(tirthAccount.balance);