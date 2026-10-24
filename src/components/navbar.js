import { createIcons, Menu } from "lucide";
import { toggleTheme } from "./toggleTheme";

export function navbar () {
    const element = document.createElement("nav");
    element.className = "flex justify-between items-center py-3 px-3 lg:px-0 shadow-xs"
    const data = {
        appName: "task",
        user: {
            name: "hocein",
        }
    }

    element.innerHTML = `
        <div class="flex items-center gap-x-2">
            <span data-lucide="menu" class="size-5"></span>
            <strong class="capitalize tracking-widest text-lg">${data.appName}</strong>
        </div>
        <div class="flex gap-x-2 items-center">
            <span class="text-sm">${data.user.name}</span>
            <span class="flex justify-center items-center size-5 text-xs bg-primary text-primary-foreground p-1">${data.user.name[0].toUpperCase()}</span>
            <span id="toggleTheme" class="flex items-center"></span>
        </div>
    `
    createIcons({
        icons: { Menu },
        root: element
    })

    document.addEventListener("DOMContentLoaded", () => {
        const theme = document.getElementById("toggleTheme");
        theme.appendChild(toggleTheme())
    })
    
    return element;
}
