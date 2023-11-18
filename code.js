function gte(a, b) {
  return a >= b ? true : false;
}

function welcomeMessage(name) {
  return `Hello ${name}, welcome to jest tutorial.`;
}

function shoppingList() {
  return ["milk", "cake", "water", "apple"];
}

module.exports = { gte, welcomeMessage, shoppingList };
