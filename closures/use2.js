// Data Privacy / Encapsulation
// (closures help to create private variables)

function createBankAccount(miniBalance) {
  let bankBalance = miniBalance;

  function deposit(amount) {
    bankBalance = bankBalance + amount;
    console.log(`Hello user!, your current balance = ${bankBalance}`);
  }

  function withdraw(amount) {
    bankBalance = bankBalance - amount;
    console.log(`Hello user!, your current balance = ${bankBalance} `);
  }

  function getMyBalance() {
    console.log(`Hello user!, your current balance = ${bankBalance} `);
  }

  return { deposit, withdraw, getMyBalance };
}

const myAccount = createBankAccount(500);

myAccount.deposit(100000);
myAccount.withdraw(5000);
myAccount.getMyBalance();

console.log(myAccount.bankBalance);

// Function Factories
// (Closures allow dynamic function creation)

// Memoization (Performance Optimization)
// (Closures help cache expensive computations)
