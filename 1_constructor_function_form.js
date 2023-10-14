// Bank Account project

const allAccountsInstances = []

// Just for Naming convention purpose we write first letter UPPERCASE for constructor function in JS.
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

const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

accountForm.addEventListener("submit", function(ev){
    ev.preventDefault();  // prevent page from reloading on submit button.
    const newAc = new BankAccount(customerName.value, +balance.value)
    allAccountsInstances.push(newAc);
    console.log(allAccountsInstances);
})

