const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });

  test("returns a string", () => {
    const result = timeWord("23:23");
    expect(typeof result).toBe("string");
  });

  test("converts 24 hour format to am and pm format", () => {
    let result = timeWord("23:23");
    expect(result).toBe("eleven twenty-three pm");
    result = timeWord("11:23");
    expect(result).toBe("eleven twenty-three am");
  });

  test("converts to midnight and noon", () => {
    let result = timeWord("00:00");
    expect(result).toBe("midnight");
    result = timeWord("12:00");
    expect(result).toBe("noon");
  });

  test("adds oh if minutes are less that 10", () => {
    let result = timeWord("00:04");
    expect(result).toBe("twelve oh four am");
  });

  test("returns 'Invalid time' for invalid time", () => {
    result = timeWord("60:04");
    expect(result).toBe("Invalid time");
    result = timeWord("10:74");
    expect(result).toBe("Invalid time");
  });
});
