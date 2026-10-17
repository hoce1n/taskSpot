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
        <strong>${data.appName}</strong>
        <div class="flex gap-x-2 items-center">
            <span class="text-sm">${data.user.name}</span>
            <span class="flex justify-center items-center size-5 text-xs bg-primary text-primary-foreground rounded-full p-1">${data.user.name[0].toUpperCase()}</span>
            <span id="toggleTheme" class="flex items-center"></span>
        </div>
    `

    document.addEventListener("DOMContentLoaded", () => {
        const theme = document.getElementById("toggleTheme");
        theme.appendChild(toggleTheme())
    })
    
    return element;
}
