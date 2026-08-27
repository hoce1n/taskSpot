const categories = [
    {
        name: "پیتزا",
        count: "۱۲۰+",
        bg: "#C90000",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M42 12c0-4-4-6-8-6-5 0-10 2-13 6L5 41l5 5 6-15"/>
                <circle cx="28" cy="22" r="1.6" fill="#fff"/>
                <circle cx="20" cy="30" r="1.6" fill="#fff"/>
                <circle cx="24" cy="16" r="1.6" fill="#fff"/>
                <circle cx="33" cy="29" r="1.6" fill="#fff"/>
            </svg>`
    },
    {
        name: "برگر",
        count: "۸۰+",
        bg: "#FFC300",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 22h38l-4 14a4 4 0 0 1-4 3H13a4 4 0 0 1-4-3z"/>
                <path d="M5 22c0-6 8-11 19-11s19 5 19 11"/>
                <path d="M9 27h30"/>
                <path d="M15 31h5" stroke="#3a3a3a"/>
            </svg>`
    },
    {
        name: "ایرانی",
        count: "۹۰+",
        bg: "#7C4A1E",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 14c-6 2-9 8-9 14 0 6 5 10 12 10s12-4 12-10c0-6-3-12-9-14"/>
                <path d="M20 16l-3-5M28 20l7-4M24 8l2 5"/>
                <path d="M12 25h5M16 29h7"/>
            </svg>`
    },
    {
        name: "فست فود",
        count: "۱۱۰+",
        bg: "#2E7D32",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 10v6a8 8 0 0 0 16 0v-6"/>
                <path d="M8 14h32v3a16 16 0 0 1-32 0z"/>
                <path d="M12 20l2 16a4 4 0 0 0 4 3h12a4 4 0 0 0 4-3l2-16"/>
                <path d="M20 28v7M28 28v7"/>
            </svg>`
    },
    {
        name: "کباب",
        count: "۶۵+",
        bg: "#B5482E",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 40 38 10"/>
                <path d="M18 42 42 18"/>
                <path d="M12 20l-4 4M20 12l-4 4M28 20l-4 4M18 30l-4 4"/>
                <circle cx="26" cy="26" r="3.5"/>
                <circle cx="16" cy="36" r="3.5"/>
                <circle cx="36" cy="16" r="3.5"/>
            </svg>`
    },
    {
        name: "نوشیدنی",
        count: "۴۰+",
        bg: "#00838F",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 8h20v8a10 10 0 0 1-20 0z"/>
                <path d="M14 8H8v8a10 10 0 0 0 10 10"/>
                <path d="M19 38h10l2-12H17z"/>
                <path d="M24 26v12"/>
            </svg>`
    },
]

export function Categories() {
    const section = document.createElement("section");
    section.innerHTML = `
    <section class="max-w-[1170px] mx-auto px-4 lg:px-2 py-10">
        <div class="flex items-end justify-between mb-8">
            <div>
                <h2 class="text-xl md:text-2xl font-extrabold text-neutral-800">دسته‌بندی غذاها</h2>
                <p class="text-xs text-gray font-medium mt-2">از هر سلیقه‌ای که دارید، غذایی برایتان داریم</p>
            </div>
            <a href="#" class="text-xs font-bold text-primary flex items-center gap-1 hover:opacity-80 transition-opacity">
                مشاهده همه
                <svg class="w-4 h-4 rotate-180"><use href="#chevron-left"></use></svg>
            </a>
        </div>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
            ${categories.map((c, i) => `
                <a href="#" class="group flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-sm border border-transparent hover:border-secondary/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <span class="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style="background: ${c.bg}">
                        ${c.icon}
                    </span>
                    <span class="flex flex-col items-center gap-0.5">
                        <span class="text-xs font-bold text-neutral-800">${c.name}</span>
                        <span class="text-xxs text-gray font-medium">${c.count} رستوران</span>
                    </span>
                </a>
            `).join("")}
        </div>
    </section>
    `
    return section;
}
