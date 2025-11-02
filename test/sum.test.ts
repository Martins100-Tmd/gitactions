import { gcd } from "../math/gcd";
import { sum } from "../math/sum";
import { test, expect, describe } from "vitest";

test("sum with argument (1,3) returns 4", () => {
    expect(sum(1, 3)).toBe(4);
});

test("sum with argument (0,0) returns 0", () => {
    expect(sum(0, 0)).toBe(0);
});

test("sum with argument (1,0.5) returns 4", () => {
    expect(sum(1, 0.5)).toBe(1.5);
});

describe("sum()", () => {
    test("basic cases", () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(-1, 1)).toBe(0);
        expect(sum(0, 0)).toBe(0);
        expect(sum(100, 200)).toBe(300);
    });

    test("handles negative and large values", () => {
        expect(sum(-5, -7)).toBe(-12);
        expect(sum(1e6, 2e6)).toBe(3e6);
        expect(sum(-1e9, 1e9)).toBe(0);
    });

    // Generate 50 random test cases
    for (let i = 0; i < 50; i++) {
        const a = Math.floor(Math.random() * 1e6 - 5e5);
        const b = Math.floor(Math.random() * 1e6 - 5e5);
        test(`random sum test #${i + 1}: sum(${a}, ${b})`, () => {
            expect(sum(a, b)).toBe(a + b);
        });
    }
});

describe("gcd()", () => {
    test("basic gcd cases", () => {
        expect(gcd(12, 8)).toBe(4);
        expect(gcd(100, 25)).toBe(25);
        expect(gcd(7, 3)).toBe(1);
        expect(gcd(0, 5)).toBe(5);
        expect(gcd(5, 0)).toBe(5);
        expect(gcd(0, 0)).toBe(0);
    });

    // test("gcd with negatives should match positive results", () => {
    //     // expect(gcd(-12, 8)).toBe(4);
    //     expect(gcd(12, -8)).toBe(4);
    //     expect(gcd(-12, -8)).toBe(4);
    // });

    test("gcd of large numbers", () => {
        expect(gcd(1_000_000_000, 500_000_000)).toBe(500_000_000);
    });

    // Generate 50 random gcd tests
    for (let i = 0; i < 50; i++) {
        const a = Math.floor(Math.random() * 1e6);
        const b = Math.floor(Math.random() * 1e6);

        const expectedGcd = (x: number, y: number): number => {
            while (y !== 0) [x, y] = [y, x % y];
            return Math.abs(x);
        };

        test(`random gcd test #${i + 1}: gcd(${a}, ${b})`, () => {
            expect(gcd(a, b)).toBe(expectedGcd(a, b));
        });
    }
});


describe("Use toBeClose for floating number bcos of rounding up error", () => {
    let arr = ["Apple", "Orange", "Mango"];
    function compileAndroidCode() {
        throw new Error('you are using the wrong JDK!');
    }

    function goodOne() {
        return new Promise((res, rej) => res("Mr Martins"));
    }

    function badOne() {
        return new Promise((res, rej) => rej("Couldn't get Mr Martins!"));
    }

    test("0.1+0.33333333333333 toBeClose to 0.4", () => {
        let a = 0.1,
            b = 0.33333333;
        expect(a + b).toBeCloseTo(0.43333333);
    });
    test("String test", () => {
        expect("Martins").contains("artins");
    });
    test("Array test", () => {
        expect(arr).includes("Orange");
        expect(arr.indexOf("Micheal")).toBeLessThan(0);
    });
    test("String test", () => {
        expect("Martins").contains("artins");
    });
    test("Function to throw error", () => {
        expect(() => compileAndroidCode()).toThrowError("you are using the wrong JDK!");
    })
    test("Async code", () => {
        expect.assertions(1);
        return goodOne().then((res) => {
            expect(res).toBe("Mr Martins");
        })
    });
    test("Async code 1", async () => {
        await expect(goodOne()).resolves.toBe("Mr Martins");
        await expect(badOne()).rejects.toBe("Couldn't get Mr Martins!");
    });
});
