const {
  gte,
  welcomeMessage,
  shoppingList,
  getUser,
  login,
} = require("../code");

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

describe("welcomeMessage", () => {
  it("should return welcome message containing the name", () => {
    const result = welcomeMessage("Behnam");
    expect(result).toContain("Behnam");
  });
});

describe("shoppingList", () => {
  it("should pass if the shopping list has milk on it", () => {
    const result = shoppingList();
    expect(result).toContain("milk");
  });
});

describe("getUser", () => {
  it("should return the user properly.", () => {
    const result = getUser();
    //  expect(result).toBe({ id: 1, name: "Behnam" });
    //  expect(result).toEqual({ id: 1, name: "Behnam" });
    //  expect(result).toMatchObject({ id: 1 });
    expect(result).toHaveProperty("id", 1);
  });
});

describe("login", () => {
  it("should return an error if password is wrong", () => {
    expect(() => login("9876")).toThrow();
  });

  it("should return jwt if password is correct", () => {
    const result = login("1234");
    expect(result).toHaveProperty("jwt");
  });
});
