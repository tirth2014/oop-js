// The constructor that we made for BankAccount class...was just syntactic sugar
// From ES6, there's class keyword also introduced and we use that for creating classes.

// Also, in classes we don't need to explicitely define methods inside prototype. We can define in class and 
// it'll automatically come in prototype.

// const myAccount = new BankAccount("Tirth", 500);     <--- ❌ Hoisting doesn't work with classes!
// Uncaught ReferenceError: Cannot access 'BankAccount' before initialization


// const BankAccount = class {....}     <---- ✅ This is also valid and same as below. but in this case class is unnamed.
                                           // constuctor: class           
                                           // But, constructor function name will be same in both the cases which is: "BankAccount"                               

class BankAccount {                        // constuctor: class BankAccount
    custName;
    balance;

    constructor(custName, balance=0){
        this.custName = custName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }

}

const tirthAccount = new BankAccount("Tirth", 500);
console.log(tirthAccount);

// Another thing to NOTE:
// In classes, the hoisting doesn't work unlike functions. So, functions ne upar niche game tyathi call karaiye to pan 
// work karse and output malse because of hoisting.
// but if we try to create new instance of BankAccount class ABOVE the class declaration then it'll throw ReferenceError!