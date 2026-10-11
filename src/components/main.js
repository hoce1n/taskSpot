import { createIcons, Plus, ListChevronsUpDown, Check } from "lucide";
const tasks = [
    {
        title: "review q1 marketing strategy",
        priority: "high",
        isDone: false
    },
    {
        title: "call with design team at 2pm",
        priority: "low",
        isDone: true
    },
    {
        title: "upgrade project documentions",
        priority: "low",
        isDone: true,
    }
]

export function main() {
    const element = document.createElement("main");
    element.className = 'w-full p-5'
    element.innerHTML = `
        <section class="">
            <div class="relative">
                <i data-lucide="plus" class="absolute size-4 top-3 left-3 text-muted-foreground"></i>
                <input 
                    type="text" 
                    class="border-dashed border-2 w-full rounded-lg placeholder:text-xs pl-8 py-1.5"
                    placeholder="Add a task..."
                />
            </div>
            <div class="mt-5 space-y-4">
            ${tasks.map((task) => (
                `
                <div class="flex items-center justify-between px-8 py-3 rounded-lg shadow-sm">
                    <i data-lucide="list-chevrons-up-down" class="size-4"></i>
                    <h6 class="text-sm font-semibold">${task.title}</h6>
                    <span class="text-sm">${task.priority}</span>
                    <i data-lucide="check" class="size-4 ${task.isDone ? "" : "invisible"}"></i>
                </div>
                `
            )).join("")}
            </div>
        </section>
    `
    createIcons({
        icons: {
            Plus,
            ListChevronsUpDown,
            Check
        },
        root: element
    })
    return element;
}