
import { test, expect, describe } from "bun:test";
import {
    escapeHtml,
    isValidDateKey,
    toDateKey,
    getDateKeyOffset,
    calculateStreak,
    getGreeting,
    matchesSection,
} from "./utils";

describe("escapeHtml", () => {
    test("escapes HTML special characters", () => {
        expect(escapeHtml(`<div>"Hello" & 'World'</div>`))
            .toBe("&lt;div&gt;&quot;Hello&quot; &amp; &#39;World&#39;&lt;/div&gt;");
    });
});

describe("isValidDateKey", () => {
    test("accepts valid date format", () => {
        expect(isValidDateKey("2026-10-30")).toBe(true);
    });

    test("rejects invalid date formats", () => {
        expect(isValidDateKey("30-10-2026")).toBe(false);
        expect(isValidDateKey("2026/10/30")).toBe(false);
        expect(isValidDateKey("invalid")).toBe(false);
    });
});

describe("toDateKey", () => {
    test("converts date to YYYY-MM-DD", () => {
        const date = new Date(2026, 9, 30);

        expect(toDateKey(date)).toBe("2026-10-30");
    });
});

describe("calculateStreak", () => {
    test("returns zero for empty array", () => {
        expect(calculateStreak([])).toBe(0);
    });

    test("counts today as one", () => {
        expect(calculateStreak([getDateKeyOffset(0)])).toBe(1);
    });

    test("counts consecutive days", () => {
        expect(calculateStreak([
            getDateKeyOffset(0),
            getDateKeyOffset(-1),
            getDateKeyOffset(-2),
        ])).toBe(3);
    });

    test("starts from yesterday when today is missing", () => {
        expect(calculateStreak([
            getDateKeyOffset(-1),
            getDateKeyOffset(-2),
        ])).toBe(2);
    });

    test("stops at a missing day", () => {
        expect(calculateStreak([
            getDateKeyOffset(0),
            getDateKeyOffset(-2),
        ])).toBe(1);
    });
});

describe("getGreeting", () => {
    test("returns morning", () => {
        expect(getGreeting(8)).toBe("morning");
    });

    test("returns afternoon", () => {
        expect(getGreeting(14)).toBe("afternoon");
    });

    test("returns evening", () => {
        expect(getGreeting(19)).toBe("evening");
    });

    test("returns sleep message at night", () => {
        expect(getGreeting(23)).toBe("sleep make your day better.");
    });
});

describe("matchesSection", () => {
    const today = getDateKeyOffset(0);

    test("matches today's tasks", () => {
        expect(matchesSection({
            dueDate: today,
            isDone: false,
        }, "today")).toBe(true);
    });

    test("matches tomorrow's tasks", () => {
        expect(matchesSection({
            dueDate: getDateKeyOffset(1),
            isDone: false,
        }, "tomorrow")).toBe(true);
    });

    test("matches upcoming tasks", () => {
        expect(matchesSection({
            dueDate: getDateKeyOffset(2),
            isDone: false,
        }, "upcoming")).toBe(true);
    });

    test("matches overdue incomplete tasks", () => {
        expect(matchesSection({
            dueDate: getDateKeyOffset(-1),
            isDone: false,
        }, "overdue")).toBe(true);
    });

    test("does not match completed overdue tasks", () => {
        expect(matchesSection({
            dueDate: getDateKeyOffset(-1),
            isDone: true,
        }, "overdue")).toBe(false);
    });

    test("matches backlog tasks without due date", () => {
        expect(matchesSection({
            dueDate: null,
            isDone: false,
        }, "backlog")).toBe(true);
    });

    test("matches completed tasks", () => {
        expect(matchesSection({
            dueDate: null,
            isDone: true,
        }, "done")).toBe(true);
    });
});
