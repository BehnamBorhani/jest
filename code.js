const service = require("./service");

function calculateDiscount(id) {
  let discount = 0;
  const user = service.getUserById(id);

  if (user.purchasesCount > 3) {
    discount = 10;
  }

  service.sendEmail(user.name, `You have got ${discount} percent discount`);
  return discount;
}

module.exports = calculateDiscount;
