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
        isDone: true
    }
];

export function main() {
    const element = document.createElement("section");
    element.className = "w-full p-5";

    element.innerHTML = `
        <section>
            <form>
                <div class="flex">
                <button
                    type="submit"
                    class="text-muted-foreground cursor-pointer z-1 flex items-center justify-center w-10"
                >
                    <i data-lucide="plus" class="size-6"></i>
                </button>
                <input
                    name="task-title"
                    type="text"
                    class="border-dashed border-2 w-full rounded-lg placeholder:text-xs pl-4 py-1.5"
                    placeholder="Add a task..."
                />

                </div>
            </form>

            <div class="mt-5 space-y-4 task-list"></div>
        </section>
    `;

    const taskList = element.querySelector(".task-list");
    const form = element.querySelector("form");
    const input = form.querySelector("input");

    function renderTasks(tasks) {
        taskList.innerHTML = tasks.map((task) => `
            <div class="flex items-center justify-between px-8 py-3 rounded-lg shadow-sm">
                <i data-lucide="list-chevrons-up-down" class="size-4"></i>
                <h6 class="text-sm font-semibold">${task.title}</h6>
                <span class="text-sm">${task.priority}</span>
                <i data-lucide="check" class="size-4 ${task.isDone ? "" : "invisible"}"></i>
            </div>
        `).join("");

        createIcons({
            icons: {
                Plus,
                ListChevronsUpDown,
                Check
            },
            root: taskList
        });
    }

    createIcons({
        icons: {
            Plus
        },
        root: element
    });

    renderTasks(tasks);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const inputValue = input.value.trim();

        if (!inputValue || inputValue.length < 3) return;

        tasks.push({
            title: inputValue,
            priority: "low",
            isDone: false
        });

        renderTasks(tasks);
        input.value = "";
    });

    return element;
}
