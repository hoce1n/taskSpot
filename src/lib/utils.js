export { cn } from "cn"

export function escapeHtml(value) {
    return value
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#39;")
}

export function isValidDateKey(value) {
   return /^\d{4}-\d{2}-\d{2}$/.test(value)
}

export function toDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    
    return `${year}-${month}-${day}`
}

export function getDateKeyOffset(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return toDateKey(date);   
}

export function calculateStreak(dateKeys) {
    const set = new Set(dateKeys);
    let offset = set.has(getDateKeyOffset(0)) ? 0 : 1;
    let count = 0;

    while (set.has(getDateKeyOffset(-offset))) {
        count++;
        offset++;
    }

    return count;
}

export function matchesSection(task, section) {
    const today = getDateKeyOffset(0);
    const tomorrow = getDateKeyOffset(1);
    const { dueDate, isDone } = task;
    const hasDate = dueDate !== null;

    if (isDone && section !== "done") return false;

    switch (section) {
        case "today":
            return dueDate === today;
        case "tomorrow":
            return dueDate === tomorrow;
        case "upcoming":
            return hasDate && dueDate > tomorrow;
        case "overdue":
            return hasDate && dueDate < today;
        case "backlog":
            return !hasDate;
        case "done":
            return isDone;
        default:
            return false;
    }
}

export function getGreeting(hour) {
    if (hour >= 5 && hour < 12) {
        return 'morning';
    }

    if (hour >= 12 && hour < 17) {
        return 'afternoon';
    }

    if (hour >= 17 && hour < 21) {
        return 'evening';
    }

    return 'sleep make your day better.';
}
