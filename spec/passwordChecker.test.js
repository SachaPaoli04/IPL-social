const Main = require('../src/passwordChecker');

describe("Password Checker", () => {
  let main;

  beforeEach(() => {
    main = new Main();
  });

  it("should return false if the password is shorter than 8 characters", () => {
    expect(main.validPasswordLength("short")).toBe(false);
  });

  it("should return true if the password has at least 8 characters", () => {
    expect(main.validPasswordLength("longenough")).toBe(true);
  });

  it("should return false if the password does not contain a special character", () => {
    expect(main.validPasswordSpecialChar("Password1")).toBe(false);
  });

  it("should return true if the password contains a special character", () => {
    expect(main.validPasswordSpecialChar("Password1!")).toBe(true);
  });

  it("should return false if the password does not contain a digit", () => {
    expect(main.validPasswordDigit("Password!")).toBe(false);
  });

  it("should return true if the password contains a digit", () => {
    expect(main.validPasswordDigit("Password1!")).toBe(true);
  });

  it("should return false if the password contains 'IPL' (case insensitive)", () => {
    expect(main.validPasswordNoIPL("Password1!IPL")).toBe(false);
    expect(main.validPasswordNoIPL("Password1!ipl")).toBe(false);
  });

  it("should return true if the password does not contain 'IPL'", () => {
    expect(main.validPasswordNoIPL("Password1!")).toBe(true);
  });

  it("should return false if the password does not meet all criteria", () => {
    expect(main.validPassword("short")).toBe(false); // Too short
    expect(main.validPassword("longenough")).toBe(false); // No special character, no digit
    expect(main.validPassword("Password1")).toBe(false); // No special character
    expect(main.validPassword("Password!")).toBe(false); // No digit
    expect(main.validPassword("Password1!IPL")).toBe(false); // Contains 'IPL'
  });

  /*it("should return true if the password meets all criteria", () => {
    expect(main.validPassword("Valid1!")).toBe(true);
  });
  */
});