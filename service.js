function getUserById(id) {
  console.log("reading data from db...");
  const users = [
    { id: 1, name: "Behnam", purchasesCount: 5 },
    { id: 2, name: "Nima", purchasesCount: 3 },
    { id: 3, name: "Pouya", purchasesCount: 8 },
  ];

  return users.find((user) => user.id == id);
}

function sendEmail(name, message) {
  console.log("email sent!");
}

module.exports = { getUserById, sendEmail };
