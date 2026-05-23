// Data Privacy / Encapsulation
// (closures help to create private variables)

function createBankAccount(miniBalance) {
  let bankBalance = miniBalance;

  function backgroundVerification() {
    // api..
    return true;
  }

  function kycVerification() {
    // api..
    return false;
  }

  function checkAccountStatus() {
    let bgv = backgroundVerification();
    let kyc = kycVerification();

    if (bgv && kyc) {
      console.log("Account is Active");
    } else {
      console.log("We are unable to process your application");
    }
  }

  return { checkAccountStatus };
}

const myAccount = createBankAccount(500);
myAccount.checkAccountStatus();

console.dir(myAccount);

// Function Factories
// (Closures allow dynamic function creation)

// Memoization (Performance Optimization)
// (Closures help cache expensive computations)
