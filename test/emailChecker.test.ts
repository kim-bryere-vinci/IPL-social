import {isValidEmail} from "../src/emailChecker"

describe("email checker", () => {
    test("Il doit contenir au moins @", () => {
        expect(isValidEmail("kim.bryerestudent.vinci.be")).toBe(false);
    })

})
