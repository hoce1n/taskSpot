import { 
    getTodayLeftTasks, 
    isCurrentSection, 
    setSection, 
    subscribe 
} from '#lib/store';
import { getGreeting } from '#lib/utils';
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

function handleSidebarClick(event, listElement) {
    const item = event.target.closest("li");
    
    if (!item || 
        !listElement.contains(item) || 
        !item.dataset.section) return;
    
    setSection(item.dataset.section);     
    return;
}

export function aside() {
    const element = document.createElement("aside");
    element.className = "w-1/3";
    element.innerHTML = `
        <div class="space-y-4 mt-4 hidden md:block">
            <div>
                <div class="flex items-center justify-between">
                    <h4 class="font-bold">Good ${getGreeting(new Date().getHours())}, hocein</h4>
                    <span class="flex items-center"><i data-lucide="flame" class="w-4 h-4 text-orange-500"></i> 7</span>
                </div>
                <p class="text-muted-foreground text-sm">${new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} - <span data-task-left></span> left today</p>
            </div>
            <div>
                <ul class="space-y-3">
                    ${renderSidebarList(data.list)}
                    <li class="flex items-center gap-3 py-2 px-3 z-1">
                        <i data-lucide="circle-question-mark" class="text-muted-foreground"></i>
                        <span class="text-sm text-muted-foreground">Keyboard shortcuts</span>
                    </li>
                </ul>
            </div>
        </div>
    `;

    const listElement = element.querySelector("ul");
    const taskCountElement = element.querySelector('[data-task-left]')
    
    renderTaskCount(taskCountElement);
    renderActiveSection(listElement);

    subscribe(() => renderTaskCount(taskCountElement));
    subscribe(() => renderActiveSection(listElement));
    
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

    listElement.addEventListener("click", (event) => handleSidebarClick(event, listElement));
    
    return element;
}
