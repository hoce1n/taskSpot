import { test, expect } from "bun:test";
import { calculateStreak, escapeHtml, getDateKeyOffset } from "./utils";

test("escapeHtml turns < into &lt;", () => {
    expect(escapeHtml("<")).toBe("&lt;");
})

test("escapeHtml escapes & first, so entities are not double-escaped wrongly", () => {
    expect(escapeHtml("&lt;")).toBe("&amp;lt;");
});

test("empty array should return zero", () => {
    expect(calculateStreak([])).toBe(0);
});

test("only today, should return one", () => {
    expect(calculateStreak([getDateKeyOffset(0)])).toBe(1);
});

test("three days in a row should return three", () => {
    expect(calculateStreak([getDateKeyOffset(0), getDateKeyOffset(-1), getDateKeyOffset(-2)])).toBe(3);
});

test("not today, but one and two days before", () => {
    expect(calculateStreak([getDateKeyOffset(-1), getDateKeyOffset(-2)])).toBe(2);
});

test("with one day distance", () => {
    expect(calculateStreak([getDateKeyOffset(0), getDateKeyOffset(-2)])).toBe(1);
});

test("giving same inputs", () => {
    expect(calculateStreak([getDateKeyOffset(-1), getDateKeyOffset(-1)])).toBe(1);
});

test("add null to array", () => {
    expect(calculateStreak([null, getDateKeyOffset(-1), getDateKeyOffset(-2)])).toBe(2);
})