import { createIcons, SunMoon } from "lucide";

export function toggleTheme() {
    const element = document.createElement("button");
    element.type = "button";
    element.setAttribute("aria-label", "Toggle theme")
    element.innerHTML = `
        <i data-lucide="sun-moon" class="size-5"></i>
    `
    createIcons({ icons: { SunMoon }, root: element });

    element.addEventListener("click", () => {
        const html = document.querySelector("html");
        html.classList.toggle("dark");
    })

    return element;
}

