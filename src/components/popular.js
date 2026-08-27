const dishes = [
    {
        name: "برگر کلاسیک",
        desc: "گوشت گوساله، کاهو، گوجه، پنیر چدار",
        price: "۱۸۵",
        oldPrice: "۲۲۰",
        rating: "۴.۸",
        bg: "#FFF1D6",
        art: `
            <svg viewBox="0 0 120 90" fill="none">
                <path d="M14 42h92l-5 22a6 6 0 0 1-6 5H25a6 6 0 0 1-6-5z" fill="#D98A2B"/>
                <path d="M12 34c0-9 21-16 48-16s48 7 48 16H12z" fill="#F5B040"/>
                <ellipse cx="60" cy="42" rx="42" ry="6" fill="#7FB069"/>
                <path d="M14 44h92l-2 6H16z" fill="#C9501E"/>
                <circle cx="42" cy="22" r="2" fill="#fff"/><circle cx="60" cy="20" r="2" fill="#fff"/><circle cx="78" cy="22" r="2" fill="#fff"/>
            </svg>`
    },
    {
        name: "پیتزا مارگاریتا",
        desc: "سس گوجه، پنیر موزارلا، ریحان تازه",
        price: "۲۴۰",
        oldPrice: "۲۹۵",
        rating: "۴.۷",
        bg: "#FFE9E0",
        art: `
            <svg viewBox="0 0 120 90" fill="none">
                <path d="M60 14 106 68H14z" fill="#E8A33D"/>
                <path d="M60 22 96 64H24z" fill="#F6C453"/>
                <circle cx="48" cy="50" r="6" fill="#E2542B"/><circle cx="72" cy="52" r="6" fill="#E2542B"/>
                <circle cx="60" cy="38" r="5" fill="#7FB069"/><circle cx="60" cy="56" r="4" fill="#7FB069"/>
            </svg>`
    },
    {
        name: "کباب کوبیده",
        desc: "گوشت چرخ کرده، برنج زعفرانی، گوجه کبابی",
        price: "۲۶۵",
        oldPrice: "۳۱۰",
        rating: "۴.۹",
        bg: "#FFE7CC",
        art: `
            <svg viewBox="0 0 120 90" fill="none">
                <rect x="40" y="52" width="40" height="12" rx="6" fill="#FDF3E3"/>
                <path d="M40 58h40M28 70h64l3 8H25z" stroke="#D98A2B" stroke-width="4" stroke-linecap="round"/>
                <rect x="34" y="34" width="52" height="18" rx="9" fill="#B4482B"/>
                <path d="M34 36h52l-3 16H37z" fill="#C9501E"/>
                <circle cx="60" cy="43" r="4" fill="#3a3a3a"/>
            </svg>`
    },
    {
        name: "زرشک پلو با مرغ",
        desc: "برنج ایرانی، مرغ زعفرانی، زرشک و خلال پسته",
        price: "۲۹۵",
        oldPrice: "۳۵۰",
        rating: "۴.۸",
        bg: "#FFF8DC",
        art: `
            <svg viewBox="0 0 120 90" fill="none">
                <ellipse cx="60" cy="52" rx="40" ry="16" fill="#F3E1BC"/>
                <path d="M20 52C20 36 38 26 60 26s40 10 40 26" fill="#FFF6E6"/>
                <circle cx="42" cy="40" r="2.5" fill="#C1352B"/><circle cx="52" cy="34" r="2.5" fill="#C1352B"/>
                <circle cx="64" cy="38" r="2.5" fill="#C1352B"/><circle cx="74" cy="44" r="2.5" fill="#C1352B"/>
                <path d="M46 60l14-6 14 6" stroke="#C1352B" stroke-width="3" fill="none" stroke-linecap="round"/>
            </svg>`
    },
    {
        name: "سیب‌زمینی سرخ‌کرده",
        desc: "سیب‌زمینی تازه، نمک دریایی و سس مخصوص",
        price: "۹۵",
        oldPrice: "۱۲۰",
        rating: "۴.۶",
        bg: "#FFF4D6",
        art: `
            <svg viewBox="0 0 120 90" fill="none">
                <rect x="30" y="56" width="60" height="8" rx="4" fill="#F5B040"/>
                <path d="M42 30l-6 12 10 8 8-14z" fill="#E8A33D"/>
                <path d="M62 26l-4 14 10 6 6-16z" fill="#F2B84B"/>
                <path d="M80 32l-3 11 9 5 5-13z" fill="#D98A2B"/>
                <path d="M50 60l-8-6 2-8M68 60l8-6-2-8" stroke="#C9501E" stroke-width="4" fill="none"/>
            </svg>`
    },
    {
        name: "موهیتو لیمو",
        desc: "لیموی تازه، نعناع، یخ خرد شده و سودا",
        price: "۶۵",
        oldPrice: "۸۰",
        rating: "۴.۵",
        bg: "#E3F4EA",
        art: `
            <svg viewBox="0 0 120 90" fill="none">
                <path d="M46 12h28l8 58H38z" fill="#BFE3C6"/>
                <path d="M52 12h16" stroke="#6FB381" stroke-width="4"/>
                <path d="M40 30h40M38 46h44M42 62h36" stroke="#9BD3A8" stroke-width="3"/>
                <circle cx="80" cy="24" r="10" fill="#E8D44D"/>
                <path d="M74 20h12M80 14v12" stroke="#A8C339" stroke-width="3"/>
                <path d="M64 26l-8-6M58 40l-10-8" stroke="#6FB381" stroke-width="4" stroke-linecap="round"/>
            </svg>`
    },
]

function DishCard(d) {
    return `
        <div class="group rounded-3xl bg-white shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col">
            <div class="relative h-44 flex items-center justify-center overflow-hidden" style="background: ${d.bg}">
                ${d.art}
                <span class="absolute top-3 right-3 bg-primary text-white text-xxs font-bold px-3 py-1 rounded-full">تخفیف</span>
                <span class="absolute top-3 left-3 bg-white text-neutral-800 text-xxs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <svg class="w-3 h-3 text-secondary fill-secondary"><use href="#star"></use></svg>
                    ${d.rating}
                </span>
            </div>
            <div class="p-4 flex flex-col flex-1">
                <h3 class="text-sm font-bold text-neutral-800">${d.name}</h3>
                <p class="text-xxs text-gray font-medium mt-1.5 leading-5">${d.desc}</p>
                <div class="mt-auto pt-4 flex items-center justify-between">
                    <div class="flex flex-col">
                        <span class="text-xxs text-neutral-400 line-through font-medium">${d.oldPrice} هزار تومان</span>
                        <span class="text-sm font-extrabold text-primary">${d.price} هزار تومان</span>
                    </div>
                    <button class="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/85 active:scale-95 transition">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `
}

export function Popular() {
    const section = document.createElement("section");
    section.innerHTML = `
    <section class="max-w-[1170px] mx-auto px-4 lg:px-2 py-12">
        <div class="flex items-end justify-between mb-8">
            <div>
                <h2 class="text-xl md:text-2xl font-extrabold text-neutral-800">پرطرفدارترین‌ها</h2>
                <p class="text-xs text-gray font-medium mt-2">انتخاب مشتری‌های ما، محبوب‌ترین غذاهای این هفته</p>
            </div>
            <a href="#" class="text-xs font-bold text-primary flex items-center gap-1 hover:opacity-80 transition-opacity">
                مشاهده منوی کامل
                <svg class="w-4 h-4 rotate-180"><use href="#chevron-left"></use></svg>
            </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${dishes.map(DishCard).join("")}
        </div>
    </section>
    `
    return section;
}
