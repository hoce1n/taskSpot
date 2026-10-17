import { createIcons, Moon, Sun } from "lucide";

export function toggleTheme() {
    const element = document.createElement("button");
    element.type = "button";
    element.setAttribute("aria-label", "Toggle theme");

    function render(isDark) {
        element.innerHTML = `
            <i data-lucide="${isDark ? 'sun' : 'moon'}" class="size-5"></i>
        `
        createIcons({
            icons: { Sun, Moon },
            root: element
        });
    }

    const root = document.documentElement;

    element.addEventListener("click", () => {
        root.classList.toggle("dark");
        render(root.classList.contains("dark"));
    });

    render(root.classList.contains("dark"));

    return element;
}

