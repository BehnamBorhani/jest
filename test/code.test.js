const gte = require("../code");

test("gte - should return true if a is greater than b", () => {
  const result = gte(10, 5);
  expect(result).toBe(true);
});

test("gte - should return false if a is less than b", () => {
  const result = gte(5, 10);
  expect(result).toBe(false);
});

test("gte - should return true if a is equal to b", () => {
  const result = gte(5, 5);
  expect(result).toBe(true);
});
