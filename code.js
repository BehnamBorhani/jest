function gte(a, b) {
  return a >= b ? true : false;
}

function welcomeMessage(name) {
  return `Hello ${name}, welcome to jest tutorial.`;
}

function shoppingList() {
  return ["milk", "cake", "water", "apple"];
}

function getUser() {
  return { id: 1, name: "Behnam" };
}

function login(password) {
  if (password !== "1234") {
    throw new Error("password is wrong!");
  }

  return {
    jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  };
}

module.exports = { gte, welcomeMessage, shoppingList, getUser, login };
