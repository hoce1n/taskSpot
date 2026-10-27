import { isValidDateKey, matchesSection, toDateKey } from "./utils";

const STORAGE_KEY = "taskspot:tasks";
const NAME_KEY = "taskspot:name";

const MIN_TITLE_LENGTH = 3;

let tasks = loadTasks();

let currentFilter = "all";
let currentSection = "today";

const listeners = [];

const sections = ["today", "tomorrow", "upcoming", "backlog", "overdue", "done"];
const priorities = ["low", "medium", "high"];


export function getUserName() {
    const name = localStorage.getItem(NAME_KEY) ?? "User";
    return name;
}

export function setUserName(name) {
    if (name === null) return { success: true }
    if (!name || name.trim().length < 2 || name.trim().length > 32) return {
        success: false, message: "name is invalid"
    }
    localStorage.setItem(NAME_KEY, name.trim());
    notify();
    return { success: true }
}

export function isCurrentSection(section) {
    return currentSection === section;
}

export function setSection(section) {
    if (!sections.includes(section)) return;
    if (currentSection === section) return;
    
    currentSection = section;
    notify();
}

export function getCurrentSection() {
    return currentSection;
}

export function subscribe(listener) {
    listeners.push(listener);

    return () => {
        const index = listeners.indexOf(listener);
        if (index > -1) {
            listeners.splice(index, 1);
        }
    };
}

function notify() {
    listeners.forEach(listener => listener());
}

function commit() {
    saveTasks();
    notify();
}

function getNextId() {
    if (tasks.length === 0) return 1;
    return Math.max(...tasks.map((task) => task.id)) + 1;
}

export function getFilteredTasks() {
    const inSection = tasks.filter((task) => matchesSection(task, currentSection));
    
    switch (currentFilter) {
        case "active":
            return inSection.filter((task) => !task.isDone);
        case "done":
            return inSection.filter((task) => task.isDone);   
        case "all":
        default:
            return inSection;
    }
}

export function getTodayLeftTasks() {
    const todayNotDone = tasks.filter((task) => matchesSection(task, "today") && task.isDone !== true);
    return todayNotDone;
}

export function isCurrentFilter(filter) {
    return filter === currentFilter;
}

export function setFilter(filter) {
    if (!filter) return;
    currentFilter = filter;

    notify();
}

export function getCompletedTasksDate() {
    let completedTasksDate = new Set([]);
    tasks.forEach((task) => {
        completedTasksDate.add(task.completedAt);
    })

    return completedTasksDate;
}

function loadTasks() {
    const item = localStorage.getItem(STORAGE_KEY);
    if (!item) return [];

    try {
        const parsed = JSON.parse(item);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.warn("Failed to parse tasks form localStorage:", e);
        return [];
    }
}

export function getTasks() {
    return [...tasks];
}

export function getTask(id) {
    const task = tasks.find((task) => task.id === id);
    if (!task) return null;
    return task;
}

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function addTask(title, dueDate, priority) {
    const result = validateTaskInput({title, dueDate, priority});
    if (!result.success) {
        return { success: result.success, message: result.message }
    }
    const task = {
        id: getNextId(),
        title: result.value.title,
        dueDate: result.value.dueDate,
        priority: result.value.priority,
        isDone: false,
        completedAt: null
    };
    tasks.push(task);
    commit();
    return {
        success: true
    }
}

export function updateTask(id, { title, dueDate, priority }) {
    const task = getTask(id);
    if (!task) {
        return {
            success: false,
            message: "Task not found!"
        }
    }
    const result = validateTaskInput({ title, dueDate, priority });
    if (!result.success) {
        return { success: result.success, message: result.message }
    }
    task.title = result.value.title.trim();
    task.dueDate = result.value.dueDate;
    task.priority = result.value.priority;
    commit();
    return {
        success: true
    }
}

export function toggleTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    task.isDone = !task.isDone;
    task.completedAt = task.isDone ? toDateKey(new Date()) : null;

    commit();
}

export function deleteTask(id) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return;

    tasks.splice(index, 1);
    commit();
}

function validateTaskInput({ title, dueDate, priority }) {
    if (title.trim().length < MIN_TITLE_LENGTH) {
        return { 
            success: false, 
            message: "title is invalid."
        }
    }
    if (dueDate === "" || dueDate == undefined) {
        dueDate = null;
    } else if (!isValidDateKey(dueDate)) {
        return {
            success: false,
            message: "date is invalid!"
        }
    }
    if (!priorities.includes(priority)) return {
        success: false,
        message: "priority is not valid."
    };

    return {
        success: true,
        value: {
            title: title.trim(), 
            dueDate, 
            priority
        }
    }
}