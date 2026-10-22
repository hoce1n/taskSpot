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
import { 
    addTask, 
    deleteTask, 
    isCurrentFilter, 
    getFilteredTasks, 
    setFilter, 
    toggleTask, 
    subscribe,
    getCurrentSection,
} from "#lib/store";


function createTaskElement(task) {
    return `
        <div class="flex items-center justify-between px-8 py-3 rounded-lg shadow-sm">
            <i data-lucide="list-chevrons-up-down" class="size-4"></i>
            <h6 class="text-sm font-semibold ${task.isDone ? "line-through opacity-60" : ""}">
                ${escapeHtml(task.title)}
            </h6>
            <span class="text-sm">${task.priority}</span>
            <span>${task.dueDate ? task.dueDate : ""}</span>
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
        const isActive =  isCurrentFilter(filterButton.dataset.filter);
        
        filterButton.classList.toggle("bg-primary!", isActive);
        filterButton.classList.toggle("text-primary-foreground", isActive);
    })
}

function renderTitle(title) {
    const currentSection = getCurrentSection();
    
    title.textContent = currentSection;
    return title;
}

function handleAddTask(event, inputTitle, inputDate) {
    event.preventDefault();

    const title = inputTitle.value.trim();
    const dueDate = inputDate.value;
    if (!title || title.length < 3) return;
    addTask(title, dueDate);
    inputTitle.value = "";
    inputDate.value = "";
}

function handleTaskClick(event, taskListElement) {
    const statusButton = event.target.closest(".status-task");
    const deleteButton = event.target.closest(".delete-task");

    if (statusButton) {
        const taskId = Number(statusButton.dataset.id);
        toggleTask(taskId);

        renderTasks(taskListElement);
        return;
    }

    if (deleteButton) {
        const taskId = Number(deleteButton.dataset.id);
        deleteTask(taskId);
        return;
    }
}

function handleFilterClick(event) {
    const filter = event.target.dataset.filter;
    
    setFilter(filter);
}

export function main() {
    const element = document.createElement("section");
    element.className = "w-full p-5";

    element.innerHTML = `
        <section class="space-y-5">
            <h1 data-title class="text-2xl font-bold px-4"></h1>
            <div class="filters flex justify-around"></div>
            
            <form>
                <div class="flex items-center gap-x-2">
                    <button
                        type="submit"
                        class="text-muted-foreground cursor-pointer z-1 flex items-center justify-center w-10"
                    >
                        <i data-lucide="plus" class="size-6"></i>
                    </button>
                    <input
                        name="task-title"
                        data-task-title
                        type="text"
                        class="border-dashed border-2 w-full rounded-lg placeholder:text-xs pl-4 py-1.5"
                        placeholder="Add a task..."
                    />
                    <input
                        name="task-date"
                        data-task-date
                        type="date"
                        class="border rounded-lg pl-4 py-1.5"
                    />
                </div>
            </form>

            <div class="mt-5 space-y-4 task-list"></div>
        </section>
    `;

    const taskListElement = element.querySelector(".task-list");
    const form = element.querySelector("form");
    const inputTitle = form.querySelector('[data-task-title]');
    const inputDate = form.querySelector('[data-task-date]')
    const filtersElement = element.querySelector(".filters");
    const titleElement = element.querySelector('[data-title]');    

    renderFilters(filtersElement);
    renderActiveFilter(filtersElement);
    renderTasks(taskListElement);
    renderTitle(titleElement);

    subscribe(() => renderTasks(taskListElement));
    subscribe(() => renderActiveFilter(filtersElement));
    subscribe(() => renderTitle(titleElement));

    createIcons({
        icons: { Plus },
        root: element
    });

    form.addEventListener("submit", (e) => handleAddTask(e, inputTitle, inputDate, taskListElement));
    taskListElement.addEventListener("click", (e) => handleTaskClick(e, taskListElement));
    filtersElement.addEventListener("click", (e) => handleFilterClick(e, taskListElement, filtersElement));

    return element;
}
