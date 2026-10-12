import { 
    createIcons, 
    Plus, 
    ListChevronsUpDown, 
    Check, 
    X 
} from "lucide";

const tasks = [
    {
        id: 1,
        title: "review q1 marketing strategy",
        priority: "high",
        isDone: false
    },
    {
        id: 2,
        title: "call with design team at 2pm",
        priority: "low",
        isDone: true
    },
    {
        id: 3,
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
                <button class="task-status" id="${task.id}" >
                    ${task.isDone ? 
                        `<i data-lucide="check" class="size-4"></i>` 
                    : 
                        `<i data-lucide="x" class="size-4"></i>`
                    }
                </button>
            </div>
        `).join("");

        createIcons({
            icons: {
                Plus,
                ListChevronsUpDown,
                Check,
                X
            },
            root: taskList
        });
    }

    taskList.addEventListener("click", (event) => {
        const button = event.target.closest(".task-status");

        if (!button) return;
        const taskId = Number(button.id);
        const found = tasks.find((task) => task.id === taskId);

        if (!found) return;

        found.isDone = !found.isDone;
        renderTasks(tasks);
    })


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
            id: tasks.length + 1,
            title: inputValue,
            priority: "low",
            isDone: false
        });

        renderTasks(tasks);
        input.value = "";
    });

    return element;
}
