export function navbar () {
    const element = document.createElement("nav");
    const data = {
        appName: "task",
        user: {
            name: "hocein",
        }
    }

    element.className = "flex justify-between align-items py-3 px-3 lg:px-0 shadow-xs"

    element.innerHTML = `
        <strong>${data.appName}</strong>
        <div class="flex gap-x-2">
            <span>${data.user.name}</span>
            <span class="flex justify-center items-center w-6 h-6 bg-primary text-primary-foreground rounded-full p-1">${data.user.name[0].toUpperCase()}</span>
        </div>
    `
    return element;
}
