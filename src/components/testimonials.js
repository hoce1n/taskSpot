const testimonials = [
    {
        name: "مهدی رضایی",
        role: "کاربر اپلیکیشن",
        text: "خیلی از خدمات غذا خواستم ولی این یکی واقعا سرعتش فوق‌العاده است. غذا همیشه داغ به دستم می‌رسد و پشتیبانی عالی است.",
        color: "#C90000",
        initials: "م"
    },
    {
        name: "نگار احمدی",
        role: "کاربر اپلیکیشن",
        text: "رستوران‌های متنوع و تخفیف‌های همیشگی! هر هفته از این اپلیکیشن سفارش می‌دهم و تا حالا تجربه بدی نداشته‌ام.",
        color: "#00838F",
        initials: "ن"
    },
    {
        name: "سعید کریمی",
        role: "کاربر اپلیکیشن",
        text: "رابط کاربری ساده و روانی دارد. پرداخت آنلاین امن است و کد رهگیری سفارش همیشه در دسترس است.",
        color: "#7C4A1E",
        initials: "س"
    },
]

export function Testimonials() {
    const section = document.createElement("section");
    section.innerHTML = `
    <section class="max-w-[1170px] mx-auto px-4 lg:px-2 py-12">
        <div class="text-center mb-10">
            <h2 class="text-xl md:text-2xl font-extrabold text-neutral-800">مشتری‌ها درباره ما چه می‌گویند</h2>
            <p class="text-xs text-gray font-medium mt-2">بیش از ۱۵۰۰۰ مشتری راضی از سراسر کشور</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${testimonials.map(t => `
                <figure class="rounded-3xl bg-white border border-neutral-100 shadow-sm p-6 flex flex-col">
                    <div class="flex gap-1 text-secondary">
                        <svg class="w-4 h-4 fill-current"><use href="#star"></use></svg>
                        <svg class="w-4 h-4 fill-current"><use href="#star"></use></svg>
                        <svg class="w-4 h-4 fill-current"><use href="#star"></use></svg>
                        <svg class="w-4 h-4 fill-current"><use href="#star"></use></svg>
                        <svg class="w-4 h-4 fill-current"><use href="#star"></use></svg>
                    </div>
                    <blockquote class="text-xs text-neutral-600 font-medium leading-7 mt-4 flex-1">${t.text}</blockquote>
                    <figcaption class="mt-6 flex items-center gap-3">
                        <span class="w-11 h-11 rounded-full text-white text-sm font-extrabold flex items-center justify-center" style="background: ${t.color}">${t.initials}</span>
                        <span class="flex flex-col">
                            <span class="text-xs font-bold text-neutral-800">${t.name}</span>
                            <span class="text-xxs text-gray font-medium">${t.role}</span>
                        </span>
                    </figcaption>
                </figure>
            `).join("")}
        </div>
    </section>
    `
    return section;
}
