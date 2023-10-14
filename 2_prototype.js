const allAccountsInstances = [];

function BankAccount(custName, balance=0){
    this.accountNumber = allAccountsInstances.length > 0 
        ? allAccountsInstances[allAccountsInstances.length - 1].accountNumber + 1 
        : 12345;
    this.custName = custName;
    this.balance = balance;

    // this.deposit = function(amount){
    //     this.balance += amount;
    // }

    // this.withdraw = (amount) => { 
    //     this.balance -= amount;
    // }
}

const tirthAccount = new BankAccount("Tirth", 500);
allAccountsInstances.push(tirthAccount);
console.log(tirthAccount);

// const johnAccount = new BankAccount("John") // 0 balance account for john bhaiya!
// allAccountsInstances.push(johnAccount);
// console.log(johnAccount);

// PROBLEM: currently, deposit and withdraw functions of BankAccount class/constructor 
// are added at new memory space for every object of it. That's useless obviously as the function is common for all.
// Prototype solves this issue.


// Note: Functions are also objects in JS. So, we can access it's properties with '.'
// JS by default adds a property called "prototype" in a function with {}. i.e., empty object.
BankAccount.prototype.test = "I'm just a test string bruh!"
console.log(BankAccount.prototype);


// Now, deposit property will get avail to all the objects of BankAccount constructor commonly in prototype.
// NOTE: Here, we can't use arrow function as it doesn't have any context of it's own. So, in "this" inside function
// we'll get context of it's outer scope which is "window" object.
// So, we must use normal function to get the context of BankAccount constructor in "this".
BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
    console.log('--------this',this);
}

// this will work because of "prototype chain"
// JS will look for deposit function in "BankAccount" constructor function first. 
// then It'll search in protype of BankAccount function. If it's not found even there, then It'll search in prototype's prototype
// If deposit method not found even there then it'll keep looking till prototype is null. then it's the end of the prototype chain.
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
tirthAccount.deposit(400);
console.log(tirthAccount);  // 900

// Object badhano grandfather chhe
// Object and Array are default constructors in JS.
// So, arr = [] and arr = new Array()  both are same things.
// We can check all Array methods in Array.prototype
// Last prototype in "prototype chain" is Object, which doesn't have any prototype further.
