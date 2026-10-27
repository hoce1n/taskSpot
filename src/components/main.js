import { 
    createIcons, 
    Plus, 
    ListChevronsUpDown, 
    Check, 
    X,
    Trash,
    Edit
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
    updateTask,
    getTask,
} from "#lib/store";

const priorityColors = {
    low: 'bg-blue-400 text-background',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-destructive text-background'
};

let editingTaskId = null;

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
            <div class="flex items-center gap-x-0.5">
                <button class="delete-task cursor-pointer" data-id="${task.id}">
                    <i data-lucide="trash" class="size-4"></i>
                </button>
                <button class="cursor-pointer" data-id="${task.id}" data-update-task>
                    <i data-lucide="edit" class="size-4"></i>
                </button>
            </div>
        </div>    
    `;
}

function resetForm(formElements, addOrUpdateElement) {
    formElements.inputTitle.value = "";
    formElements.inputDate.value = "";
    formElements.selectElement.value = "low";

    editingTaskId = null;
    renderAddOrUpdateButton(addOrUpdateElement);
}

function renderAddOrUpdateButton(addOrUpdateElement) {
    const icon = editingTaskId !== null ? "edit" : "plus";
    
    addOrUpdateElement.innerHTML = `<i data-lucide="${icon}" class="size-8"></i>`
    createIcons({ icons: { Plus, Edit }, root: addOrUpdateElement });
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
            Trash,
            Edit
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

function handleAddOrUpdateTask(event, formElements, addOrUpdateElement) {
    event.preventDefault();
    const result = editingTaskId === null
        ? addTask(formElements.inputTitle.value, formElements.inputDate.value, formElements.selectElement.value)
        : updateTask(editingTaskId, {title: formElements.inputTitle.value, dueDate: formElements.inputDate.value, priority: formElements.selectElement.value});

    if (!result.success) {
        alert(result.message);
        return;
    }
    resetForm(formElements, addOrUpdateElement);
}

function handleTaskClick(event, { inputTitle, inputDate, selectElement, addOrUpdateElement }) {
    const statusButton = event.target.closest(".status-task");
    const deleteButton = event.target.closest(".delete-task");
    const editButton = event.target.closest('[data-update-task]');

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

    if (editButton) {
        const task = getTask(Number(editButton.dataset.id));
        if (!task) return;

        editingTaskId = task.id;
        inputTitle.value = task.title;
        inputDate.value = task.dueDate;
        selectElement.value = task.priority;

        renderAddOrUpdateButton(addOrUpdateElement);
        inputTitle.focus();
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
                            data-add-update
                            type="submit"
                            class="text-muted-foreground cursor-pointer border-2 border-dashed border-r-0 bg-accent flex items-center justify-center p-1"
                        >
                            
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
    const addOrUpdateElement = element.querySelector('[data-add-update]');
    const inputTitle = form.querySelector('[data-task-title]');
    const inputDate = form.querySelector('[data-task-date]')
    const selectElement = element.querySelector('[data-task-priority]');  
    const filtersElement = element.querySelector(".filters");
    const titleElement = element.querySelector('[data-title]'); 
    const formElements = { inputTitle, inputDate, selectElement, addOrUpdateElement }

    renderFilters(filtersElement);
    renderActiveFilter(filtersElement);
    renderTasks(taskListElement);
    renderTitle(titleElement);
    renderAddOrUpdateButton(addOrUpdateElement);

    subscribe(() => renderTasks(taskListElement));
    subscribe(() => renderActiveFilter(filtersElement));
    subscribe(() => renderTitle(titleElement));

    createIcons({
        icons: { Plus, Edit },
        root: element
    });

    form.addEventListener("submit", (e) => handleAddOrUpdateTask(e, formElements, addOrUpdateElement));
    taskListElement.addEventListener("click", (e) => handleTaskClick(e, formElements));
    filtersElement.addEventListener("click", (e) => handleFilterClick(e));

    document.addEventListener("keydown", (e) => {
        if (document.querySelector("dialog[open]")) return;

        if (e.key === "Escape" && editingTaskId !== null) {
            resetForm(formElements, addOrUpdateElement);
            return;
        }

        const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName);
        if (e.key !== 'n' || isTyping) return;
        if (e.ctrlKey || e.metaKey || e.altKey) return;

        e.preventDefault();
        inputTitle.focus();
    })

    return element;
}
