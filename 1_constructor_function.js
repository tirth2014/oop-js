// Bank Account project
// Just for Naming convention purpose we write first letter UPPERCASE for constructor function in JS.
const allAccountsInstances = []

function BankAccount(custName, balance=0){
    this.accountNumber = allAccountsInstances.length > 0 
        ? allAccountsInstances[allAccountsInstances.length - 1].accountNumber + 1 
        : 12345;
    this.custName = custName;
    this.balance = balance;

    // Although, this is not a good way to write this bank properties functions in constructor function
    // We should use inheritance for that.

    this.deposit = function(amount){
        this.balance += amount;
    }

    this.withdraw = (amount) => { 
        this.balance -= amount;
    }
}

// create new instance or object of BankAccount
const tirthAccount = new BankAccount("Tirth Patel", 50000);
allAccountsInstances.push(tirthAccount);
console.log(tirthAccount);

const johnAccount = new BankAccount("John") // 0 balance account for john bhaiya!
allAccountsInstances.push(johnAccount);
console.log(johnAccount);

// We can also modify the properties of this BankAccount obj.
// But, this shouldn't be done or we must prevent anyone from doing it in real-world. 
// We can do it by making properties private using Encapsulation
// But, just for demo purpose here
tirthAccount.balance = 80000;
console.log(tirthAccount);

const ridAccount = new BankAccount("Rid", 500);
console.log(ridAccount);

ridAccount.deposit(400);
console.log(ridAccount);

ridAccount.withdraw(100);
console.log(ridAccount);