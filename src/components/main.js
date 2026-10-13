import { 
    createIcons, 
    Plus, 
    ListChevronsUpDown, 
    Check, 
    X, 
    Trash
} from "lucide";
import { button } from "./ui/button";

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
        <section class="space-y-5">
            <div class="filters flex justify-around"></div>
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
            ${tasks.length ? `<div class="mt-5 space-y-4 task-list"></div>` : `<div>تسکی نمونده!</div>`}
        </section>
    `;

    const taskList = element.querySelector(".task-list");
    const form = element.querySelector("form");
    const input = form.querySelector("input");
    const filters= element.querySelector(".filters");
    filters.append(
        button("all",  { dataset: { filter: "all" } }),
        button("done", { dataset: { filter: "done" } }),
        button("active", { dataset: {filter: "active" }})
    );
    const b = button("x", { dataset: { taskId: 5 } });
    console.log(typeof b.dataset.taskId);
    
    
    function renderTasks(tasks) {
        taskList.innerHTML = tasks.map((task) => `
            <div class="flex items-center justify-between px-8 py-3 rounded-lg shadow-sm">
                <i data-lucide="list-chevrons-up-down" class="size-4"></i>
                <h6 class="text-sm font-semibold">${task.title}</h6>
                <span class="text-sm">${task.priority}</span>
                <button class="status-task" id="${task.id}" >
                    ${task.isDone ? 
                        `<i data-lucide="check" class="size-4"></i>` 
                    : 
                        `<i data-lucide="x" class="size-4"></i>`
                    }
                </button>
                <button class="delete-task cursor-pointer" data-id="${task.id}">
                    <i data-lucide="trash" class="size-4"></i>
                </button>
            </div>
        `).join("");

        createIcons({
            icons: {
                Plus,
                ListChevronsUpDown,
                Check,
                X,
                Trash
            },
            root: taskList
        });
    }

    taskList.addEventListener("click", (event) => {
        const statusButton = event.target.closest(".status-task");
        const deleteButton = event.target.closest(".delete-task");
        
        
        if (statusButton) {
            const taskId = Number(statusButton.id);
            const found = tasks.find((task) => task.id === taskId);

            if (!found) return;

            found.isDone = !found.isDone;
        } else if (deleteButton) {
            const taskId = Number(deleteButton.dataset.id);
            const index = tasks.findIndex((task) => task.id === taskId);
            if (index !== -1) {
                tasks.splice(index, 1);
            }
        }
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
