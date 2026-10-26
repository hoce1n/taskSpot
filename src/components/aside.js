import { 
    getCompletedTasksDate,
    getTodayLeftTasks, 
    getUserName, 
    isCurrentSection, 
    setSection, 
    setUserName, 
    subscribe 
} from '#lib/store';
import { calculateStreak, getGreeting } from '#lib/utils';
import { 
    createIcons, 
    Sun, Calendar, 
    Clock, 
    Form, 
    CircleCheck, 
    Flame,
    CircleQuestionMark,
    RedoDot
} from 'lucide';

const data = {
    list: [
        {
            icon: "sun",
            label: "today"
        },
        {
            icon: "calendar",
            label: "tomorrow"
        },
        {
            icon: "clock",
            label: "upcoming"
        },
        {
            icon: "form",
            label: "backlog"
        },
        {
            icon: "redo-dot",
            label: "overdue"
        },
        {
            icon: "circle-check",
            label: "done",
            hadBorder: true
        },
    ]
}

const shortcuts = [
    { key: "n", label: "New task" }
];

function createShortcutItem(shortcut) {
    return `
        <div class="flex items-center justify-between gap-8">
            <span class="text-sm">${shortcut.label}</span>
            <kbd class="border px-2 py-0.5 text-xs">${shortcut.key}</kbd>
        </div>
    `
}

function createSidebarItem(item) {
    return `
        <li
            class="flex items-center gap-3 py-2 px-3 cursor-pointer ${item.hadBorder ? "border mt-6 mb-10" : ""}"
            data-section="${item.label}"
        >
            <i data-lucide="${item.icon}" class="size-5"></i>
            <span class="text-sm capitalize">${item.label}</span>
        </li>
    `;
}

function renderSidebarList(list) {
    return list.map(createSidebarItem).join("");
}

function renderTaskCount(taskCountElement) {
    const count = getTodayLeftTasks()
    taskCountElement.textContent = count.length;
}

function renderActiveSection(listElement) {
    listElement.querySelectorAll("li").forEach((li) => {
        const isActive = isCurrentSection(li.dataset.section);
        li.classList.toggle("bg-accent", isActive);
    })
}
 
function renderUserName(userNameElement) {
    userNameElement.textContent = getUserName();
}

function renderStreakCount(streakCountElement) {
    streakCountElement.textContent = calculateStreak(getCompletedTasksDate());
}

function handleSidebarClick(event, listElement, dialogElement) {
    const item = event.target.closest("li");
    
    if (!item || !listElement.contains(item)) return;
    if (item.dataset.action === "shortcuts") {
        dialogElement.showModal();
        return;
    }
    if (!item.dataset.section) return;

    setSection(item.dataset.section);     
}

function handleSetUserName () {
    const name = prompt("tell me about ur name.", getUserName());
    const result = setUserName(name);
    if (!result.success) {
        alert(result.message);
    }
}

export function aside() {
    const element = document.createElement("aside");
    element.className = "w-1/3";
    element.innerHTML = `
        <div class="space-y-4 mt-4 hidden md:block">
            <div>
                <div class="flex items-center justify-between">
                    <h4 class="font-bold">Good ${getGreeting(new Date().getHours())}, <span data-user-name class="cursor-pointer" title="Click on me."></span></h4>
                    <span class="flex items-center gap-x-0.5">
                        <i data-lucide="flame" class="w-4 h-4 text-orange-500 fill-orange-500"></i> 
                        <b class="font-bold mt-0.5" data-streak></b>
                    </span>
                    </div>
                <p class="text-muted-foreground text-sm">${new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} - <span data-task-left></span> left today</p>
            </div>
            <div>
                <ul class="space-y-3">
                    ${renderSidebarList(data.list)}
                    <li class="flex items-center gap-3 py-2 px-3 z-1 cursor-pointer" data-action="shortcuts">
                        <i data-lucide="circle-question-mark" class="text-muted-foreground"></i>
                        <span class="text-sm text-muted-foreground">Keyboard shortcuts</span>
                    </li>
                </ul>
            </div>
            <dialog data-shortcuts-dialog class="m-auto p-6 border bg-background text-foreground backdrop:bg-black/50">
                <h2 class="font-bold mb-4">Keyboard shortcuts</h2>
                <div class="space-y-2 mb-6">
                    ${shortcuts.map((shortcut) => createShortcutItem(shortcut)).join("")}
                </div>
                <form method="dialog">
                    <button class="border px-3 py-1 cursor-pointer">Close</button>
                </form>
            </dialog>
        </div>
    `;

    const listElement = element.querySelector("ul");
    const taskCountElement = element.querySelector('[data-task-left]')
    const userNameElement = element.querySelector('[data-user-name]');
    const streakCountElement = element.querySelector('[data-streak]');
    const dialogElement = element.querySelector('[data-shortcuts-dialog]');
    
    renderTaskCount(taskCountElement);
    renderActiveSection(listElement);
    renderUserName(userNameElement);
    renderStreakCount(streakCountElement);

    subscribe(() => renderTaskCount(taskCountElement));
    subscribe(() => renderActiveSection(listElement));
    subscribe(() => renderUserName(userNameElement));
    subscribe(() => renderStreakCount(streakCountElement));
    
    createIcons({
        icons: {
            Sun,
            Calendar,
            Clock,
            Form,
            CircleCheck,
            Flame,
            CircleQuestionMark,
            RedoDot
        },
        root: element
    });

    listElement.addEventListener("click", (event) => handleSidebarClick(event, listElement, dialogElement));
    userNameElement.addEventListener("click", (event) => handleSetUserName());
    
    return element;
}

