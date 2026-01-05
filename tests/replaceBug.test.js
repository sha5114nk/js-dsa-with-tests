import replaceBug from "../src/replaceBug.js";

describe("replaceBug", () => {
  test("single occurrence", () => {
    expect(replaceBug("bug")).toBe("flower");
  });

  test("multiple occurrences", () => {
    expect(replaceBug("xxbugYYbugXX")).toBe("xxflowerYYflowerXX");
  });

  test("no match", () => {
    expect(replaceBug("hello")).toBe("hello");
  });

  test("adjacent bugs", () => {
    expect(replaceBug("bugbug")).toBe("flowerflower");
  });
});
