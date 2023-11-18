const service = require("../service");
const calculateDiscount = require("../code");

describe("calculateDiscount", () => {
  it("should return 10 if user has more than 3 purchase.", () => {
    service.sendEmail = jest.fn();
    service.getUserById = jest.fn().mockReturnValue({
      id: 4,
      name: "john",
      purchasesCount: 7,
    });

    expect(calculateDiscount()).toBe(10);
  });

  it("should return 0 if user has less than 3 purchase.", () => {
    service.sendEmail = jest.fn();
    service.getUserById = jest.fn().mockReturnValue({
      id: 4,
      name: "john",
      purchasesCount: 1,
    });

    expect(calculateDiscount()).toBe(0);
  });
});
