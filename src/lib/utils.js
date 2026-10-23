export { cn } from "cn"

export function escapeHtml(value) {
    return value
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#39;")
}

export function toDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`
}

export function isValidDateKey(value) {
   return /^\d{4}-\d{2}-\d{2}$/.test(value)
}
