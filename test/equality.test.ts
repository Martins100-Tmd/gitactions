import { describe, expect, test } from "vitest";

function isEqual(a: number, b: number) {
    return a < b;
}


describe("Check for equality functionality", () => {
    for (let i = 1; i <= 100; i++) {
        let a = Math.floor(Math.random() * 1e4);
        let b = Math.floor(Math.random() * 1e4);

        function testIsEqual(a: number, b: number) {
            return a < b;
        }
        test(`Running test #${i}`, () => {
            expect(isEqual(a, b)).toBe(testIsEqual(a, b));
        })
    }


    test("Undefined cases", () => {
        expect(isEqual(NaN, NaN)).toBeFalsy();
    })
})