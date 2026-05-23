// Function factories
// (Closures allow dynamic function creation)

// 1,00,000 => double profit => 1,00,000 * 2

// 1,00,000 => triple profit => 1,00,000 * 3

// 1,00,000 => 10 times profit => 1,00,000 * 10

function fn(times) {
  let target = 300000;

  return function (investMoney) {
    let x = investMoney * times;

    if (x > target) {
      console.log("We closed the company...!");
    } else {
      return investMoney * times;
    }
  };
}

const c1 = fn(2);
const c2 = fn(3);
const c3 = fn(10);

console.log(c1(100000));
console.log(c2(400000));
console.log(c3(100000));
