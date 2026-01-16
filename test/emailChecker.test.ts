import {isValidEmail} from "../src/emailChecker"

describe("email checker", () => {
    test("it should exactly one @", () => {
        expect(isValidEmail("kim.bryerestudent.vinci.be")).toBe(false);
        expect(isValidEmail("kim.bryerest@@@udent.vinci.be")).toBe(false);
    }),

    test("it should at least contain an '.' in name of the domain name", () => {
        expect(isValidEmail("kimbryerestudentvincibe")).toBe(false);
        expect(isValidEmail("kimbryerestudentvinci...be")).toBe(false);
        expect(isValidEmail("kimbryerestudentvinci...be.")).toBe(false);
    }),

    test("it should not contain any space", () => {
        expect(isValidEmail("kimbryerestudentvi    ncibe")).toBe(false);
    }),

    test("it should have text before and after '@'", () => {
        expect(isValidEmail("@")).toBe(false);
        expect(isValidEmail("@deaddd.be")).toBe(false);
        expect(isValidEmail("dafzrafgzar@")).toBe(false);
    }),

    test("valid email should pass ", () => {
        expect(isValidEmail("kim.bryere@student.vinci.be")).toBe(true);
        expect(isValidEmail("kim.bryere@gmail.be")).toBe(true)
    })
})
