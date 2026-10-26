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

const priorityColors = {
    low: 'bg-blue-400 text-background',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-destructive text-background'
};

function createTaskElement(task) {
    const colorClass = priorityColors[task.priority];
    
    return `
        <div class="flex items-center justify-between px-8 py-3 shadow-sm border h-15">
            <i data-lucide="list-chevrons-up-down" class="size-4"></i>
            <h6 class="text-sm font-semibold ${task.isDone ? "line-through opacity-60" : ""}">
                ${escapeHtml(task.title)}
            </h6>
            <span class="text-sm p-1 ${colorClass || ""}">${escapeHtml(task.priority)}</span>
            <span>${task.dueDate ? escapeHtml(task.dueDate) : ""}</span>
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
        button("all", { dataset: { filter: "all" }, className: "w-full" }),
        button("done", { dataset: { filter: "done" }, className: "w-full" }),
        button("active", { dataset: { filter: "active" }, className: "w-full" })
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

function handleAddTask(event, inputTitle, inputDate, selectElement) {
    event.preventDefault();
    
    const result = addTask(inputTitle.value, inputDate.value, selectElement.value);
    if (!result.success) {
        alert(result.message)
    } else {
        inputTitle.value = "";
        inputDate.value = "";
        selectElement.value = "low";
    }
}

function handleTaskClick(event) {
    const statusButton = event.target.closest(".status-task");
    const deleteButton = event.target.closest(".delete-task");

    if (statusButton) {
        const taskId = Number(statusButton.dataset.id);
        toggleTask(taskId);

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
            <h1 data-title class="text-3xl font-bold px-4 tracking-widest uppercase"></h1>
            <div class="filters flex justify-around"></div>
            
            <form>
                <div class="flex flex-col gap-y-2 md:flex-row *:w-full items-center gap-x-2">
                    <div class="flex">
                        <button
                            type="submit"
                            class="text-muted-foreground cursor-pointer border-2 border-dashed border-r-0 bg-accent flex items-center justify-center p-1"
                        >
                            <i data-lucide="plus" class="size-8"></i>
                        </button>
                        <input
                            name="task-title"
                            data-task-title
                            type="text"
                            required
                            class="border-dashed border-2 w-full placeholder:text-xs pl-4 py-1.5"
                            placeholder="Add a task..."
                        />
                    </div>
                    <input
                        name="task-date"
                        data-task-date
                        type="date"
                        class="border pl-4 py-1.5"
                    />
                    <select 
                        name="task-priority"
                        data-task-priority
                        class="border pl-4 py-1.5"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>                    
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
    const selectElement = element.querySelector('[data-task-priority]');    

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

    form.addEventListener("submit", (e) => handleAddTask(e, inputTitle, inputDate, selectElement));
    taskListElement.addEventListener("click", (e) => handleTaskClick(e));
    filtersElement.addEventListener("click", (e) => handleFilterClick(e));
    document.addEventListener("keydown", (e) => {
        const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName);
        if (e.key !== 'n' || isTyping) return;
        if (e.ctrlKey || e.metaKey || e.altKey) return;

        e.preventDefault();
        inputTitle.focus();
    })

    return element;
}
