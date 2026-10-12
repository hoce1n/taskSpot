import { 
    createIcons, 
    Sun, Calendar, 
    Clock, 
    Form, 
    CircleCheck, 
    Flame,
    CircleQuestionMark
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
            icon: "circle-check",
            label: "Done",
            hadBorder: true
        }
    ]
}

export function aside() {
    const element = document.createElement("aside");
    element.className = "w-1/3";
    element.innerHTML = `
        <div class="space-y-4 mt-4">
            <div>
                <div class="flex items-center justify-between">
                    <h4 class="font-bold">Good morning, hocein</h4>
                    <span class="flex items-center"><i data-lucide="flame" class="w-4 h-4 text-orange-500"></i> 7</span>
                </div>
                <p class="text-muted-foreground text-sm">Wednesday, Feb 4 - 5 left today</p>
            </div>
            <div>
                <ul class="space-y-3">
                ${data.list.map((li) => (
                    `
                        <li class="flex items-center gap-3 py-2 px-3 rounded-xl ${li.hadBorder ? "border mt-6 mb-10" : ""}">
                            <i data-lucide=${li.icon} class="size-5"></i>
                            <span class="text-sm">${li.label}</span>
                        </li>
                    `
                )).join(" ")}
                    <li class="flex items-center gap-3 py-2 px-3 rounded-xl z-1">
                            <i data-lucide="circle-question-mark" class="text-muted-foreground"></i>
                            <span class="text-sm text-muted-foreground">Keyboard shortcuts</span>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    `
    createIcons({
        icons: {
            Sun,
            Calendar,
            Clock,
            Form,
            CircleCheck,
            Flame,
            CircleQuestionMark
        },
        root: element
    });

    const list = element.querySelector("ul");
    list.addEventListener("click", (event) => {        
       const item = event.target.closest("li");

       if (!item || !list.contains(item)) return;

       item.classList.add("bg-accent");
    });
    
    return element;
}
