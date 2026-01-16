import {isValidEmail} from "../src/emailChecker"

describe("email checker", () => {
    test("Il doit contenir au moins @", () => {
        expect(isValidEmail("kim.bryerestudent.vinci.be")).toBe(false);
    }),
    
    test("Il doit contenir au moins un point dans le nom de domaine", () => {
        expect(isValidEmail("kimbryerestudentvincibe")).toBe(false);
    }),


})
