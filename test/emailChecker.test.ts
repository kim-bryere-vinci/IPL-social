import {isValidEmail} from "../src/emailChecker"

describe("email checker", () => {
    test("Il doit contenir au moins @", () => {
        expect(isValidEmail("kim.bryerestudent.vinci.be")).toBe(false);
        expect(isValidEmail("kim.bryerest@@@udent.vinci.be")).toBe(false);
    }),

    test("Il doit contenir au moins un point dans le nom de domaine", () => {
        expect(isValidEmail("kimbryerestudentvincibe")).toBe(false);
        expect(isValidEmail("kimbryerestudentvinci...be")).toBe(false);
        expect(isValidEmail("kimbryerestudentvinci...be.")).toBe(false);
    }),

    test("Il ne peut contenir aucun espace", () => {
        expect(isValidEmail("kimbryerestudentvi    ncibe")).toBe(false);
    }),

    test("Il doit avoir du texte avant et après le @", () => {
        expect(isValidEmail("@")).toBe(false);
        expect(isValidEmail("@deaddd.be")).toBe(false);
        expect(isValidEmail("dafzrafgzar@")).toBe(false);
    }),

    test("email valide ", () => {
        expect(isValidEmail("kim.bryere@student.vinci.be")).toBe(true);
        expect(isValidEmail("kim.bryere@gmail.be")).toBe(true)
    })
})
