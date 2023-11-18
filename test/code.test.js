const gte = require("../code");

describe("gte", () => {
  it("should return true if a is greater than b", () => {
    const result = gte(10, 5);
    expect(result).toBe(true);
  });

  it("should return false if a is less than b", () => {
    const result = gte(5, 10);
    expect(result).toBe(false);
  });

  it("should return true if a is equal to b", () => {
    const result = gte(5, 5);
    expect(result).toBe(true);
  });
});
