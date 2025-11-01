import { sum } from "../math/sum"
import { test, expect } from "vitest";

test("sum with argument (1,3) returns 4", () => {
    expect(sum(1, 3)).toBe(4);
})

test("sum with argument (0,0) returns 0", () => {
    expect(sum(0, 0)).toBe(0);
})

test("sum with argument (1,0.5) returns 4", () => {
    expect(sum(1, 0.5)).toBe(1.5);
})