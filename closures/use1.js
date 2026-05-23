function parents() {
  let bankBalance = 100000;

  function son() {
    console.log("I am son!");
  }

  function daughter() {
    console.log("I am daughter!");
    bankBalance = bankBalance - 50000;
    console.log("I took 5000 rupees");
  }

  return { son, daughter };
}

const { son, daughter } = parents();

son();
daughter();

console.dir(son);
console.dir(daughter);
