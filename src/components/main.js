import { 
    createIcons, 
    Plus, 
    ListChevronsUpDown, 
    Check, 
    X,
    Trash
} from "lucide";

import { button } from "./ui/button";
import { escapeHtml } from "#lib/utils";

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

// 2. State
let currentFilter = "all";

//3. Helper Function
function getFilteredTasks() {
    switch (currentFilter) {
        case "active":
            return tasks.filter((task) => !task.isDone);
        case "done":
            return tasks.filter((task) => task.isDone);   
        case "all":
        default:
            return tasks;
    }
}

function getNextId() {
    if (tasks.length === 0) return 1;
    return Math.max(...tasks.map((task) => task.id)) + 1;
}

function createTaskElement(task) {
    return `
        <div class="flex items-center justify-between px-8 py-3 rounded-lg shadow-sm">
            <i data-lucide="list-chevrons-up-down" class="size-4"></i>
            <h6 class="text-sm font-semibold ${task.isDone ? "line-through opacity-60" : ""}">
                ${escapeHtml(task.title)}
            </h6>
            <span class="text-sm">${task.priority}</span>
            <button class="status-task" data-id="${task.id}">
                ${task.isDone 
                    ? `<i data-lucide="check" class="size-4"></i>` 
                    : `<i data-lucide="x" class="size-4"></i>`
                }
            </button>
            <button class="delete-task cursor-pointer" data-id="${task.id}">
                <i data-lucide="trash" class="size-4"></i>
            </button>
        </div>    
    `;
}

// 4. Render Functions
function renderTasks(taskListElement) {
    const filtered = getFilteredTasks();

    if (filtered.length === 0) {
        taskListElement.innerHTML = `<div class="text-muted-foreground text-sm">No tasks found.</div>`;
        return;
    }

    taskListElement.innerHTML = filtered.map(createTaskElement).join("");

    createIcons({
        icons: {
            ListChevronsUpDown,
            Check,
            X,
            Trash
        },
        root: taskListElement
    });
}

function renderFilters(filtersElement) {
    filtersElement.innerHTML = "";
    filtersElement.append(
        button("all", { dataset: { filter: "all" } }),
        button("done", { dataset: { filter: "done" } }),
        button("active", { dataset: { filter: "active" } })
    );

    renderActiveFilter(filtersElement);
}

function renderActiveFilter(filtersElement) {
    const filterButtons = filtersElement.querySelectorAll("button");

    filterButtons.forEach((filterButton) => {
        const isActive = filterButton.dataset.filter === currentFilter;
        
        filterButton.classList.toggle("bg-primary!", isActive);
        filterButton.classList.toggle("text-primary-foreground", isActive);
    })
}

// 5. Event Handlers
function handleAddTask(event, input, taskListElement) {
    event.preventDefault();

    const title = input.value.trim();
    if (!title || title.length < 3) return;

    tasks.push({
        id: getNextId(),
        title,
        priority: "low",
        isDone: false
    });

    input.value = "";
    renderTasks(taskListElement);
}

function handleTaskClick(event, taskListElement) {
    const statusButton = event.target.closest(".status-task");
    const deleteButton = event.target.closest(".delete-task");

    if (statusButton) {
        const taskId = Number(statusButton.dataset.id);
        const task = tasks.find((t) => t.id === taskId);
        if (!task) return;

        task.isDone = !task.isDone;
        renderTasks(taskListElement);
        return;
    }

    if (deleteButton) {
        const taskId = Number(deleteButton.dataset.id);
        const index = tasks.findIndex((t) => t.id === taskId);
        if (index === -1) return;

        tasks.splice(index, 1);
        renderTasks(taskListElement);
    }
}

function handleFilterClick(event, taskListElement, filtersElement) {
    const filter = event.target.dataset.filter;
    
    if (!filter) return;

    currentFilter = filter;
    
    renderTasks(taskListElement);
    renderActiveFilter(filtersElement)
}

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

            <div class="mt-5 space-y-4 task-list"></div>
        </section>
    `;

    // DOM references
    const taskListElement = element.querySelector(".task-list");
    const form = element.querySelector("form");
    const input = form.querySelector("input");
    const filtersElement = element.querySelector(".filters");

    // Initial render
    renderFilters(filtersElement);
    renderActiveFilter(filtersElement);
    renderTasks(taskListElement);

    createIcons({
        icons: { Plus },
        root: element
    });

    // Event Listeners
    form.addEventListener("submit", (e) => handleAddTask(e, input, taskListElement));
    taskListElement.addEventListener("click", (e) => handleTaskClick(e, taskListElement));
    filtersElement.addEventListener("click", (e) => handleFilterClick(e, taskListElement, filtersElement));

    return element;
}
