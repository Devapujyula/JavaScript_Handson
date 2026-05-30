// Stale Closure
/**
 * we can stale closure by 2 ways
 * 1. update the varibale immediately
 */

function parents() {
  let savings = 100000;
  let mySaving = `Hello your current savings ${savings} /-`;

  function familyDinner() {
    savings = savings - 5000;

    console.log("You went for dinner and spent 5000");
  }

  function checkMySavings() {
    // 1. updating the varibale immediately
    mySaving = `Hello your current savings ${savings} /-`;
    return mySaving;
  }

  return { familyDinner, checkMySavings };
}

const myFamily = parents();

myFamily.familyDinner(); // 5000
myFamily.familyDinner(); // 5000
myFamily.familyDinner(); // 5000
myFamily.familyDinner(); // 5000

console.log(myFamily.checkMySavings()); // still logs 100000
