import { isValidDateKey, matchesSection } from "./utils";

const STORAGE_KEY = "taskspot:tasks";
const MIN_TITLE_LENGTH = 3;

let tasks = loadTasks();

let currentFilter = "all";
let currentSection = "today";

const listeners = [];

const sections = ["today", "tomorrow", "upcoming", "backlog", "overdue", "done"];

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

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function addTask(title, dueDate) {
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
    const task = {
        id: getNextId(),
        title: title.trim(),
        dueDate,
        priority: "low",
        isDone: false
    };
    tasks.push(task);
    commit();
    return {
        success: true
    }
}

export function toggleTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    task.isDone = !task.isDone;

    commit();
}

export function deleteTask(id) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return;

    tasks.splice(index, 1);
    commit();
}

