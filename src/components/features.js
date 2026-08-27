const steps = [
    {
        num: "۱",
        title: "غذای مورد علاقه‌ات را انتخاب کن",
        desc: "از بین صدها رستوران و هزاران غذا، آنچه دوست داری را به سبد خرید اضافه کن.",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M42 12c0-4-4-6-8-6-5 0-10 2-13 6L5 41l5 5 6-15"/>
                <circle cx="28" cy="22" r="1.6" fill="currentColor"/>
                <circle cx="20" cy="30" r="1.6" fill="currentColor"/>
            </svg>`
    },
    {
        num: "۲",
        title: "آدرس و نحوه پرداخت را مشخص کن",
        desc: "نحوه پرداخت آنلاین یا نقدی را انتخاب کن و آدرس تحویل را وارد کن.",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="24" cy="24" r="18"/>
                <circle cx="24" cy="24" r="8"/>
                <circle cx="24" cy="24" r="1.6" fill="currentColor"/>
                <path d="M24 6v8M24 34v8M6 24h8M34 24h8"/>
            </svg>`
    },
    {
        num: "۳",
        title: "غذای داغت را تحویل بگیر",
        desc: "کمتر از ۳۰ دقیقه غذای داغ و خوشمزه سفارش داده شده را درب منزل تحویل بگیر.",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 24h36l-4 13a4 4 0 0 1-4 3H14a4 4 0 0 1-4-3z"/>
                <path d="M6 24c0-7 8-12 18-12s18 5 18 12"/>
                <path d="M14 24h20M19 28h4"/>
            </svg>`
    },
]

export function Features() {
    const section = document.createElement("section");
    section.innerHTML = `
    <section class="bg-white border-y border-neutral-100 py-14">
        <div class="max-w-[1170px] mx-auto px-4 lg:px-2">
            <div class="text-center mb-10">
                <span class="text-primary text-xxs font-bold tracking-wide">چطور کار می‌کند</span>
                <h2 class="text-xl md:text-2xl font-extrabold text-neutral-800 mt-3">سفارش غذا در ۳ قدم ساده</h2>
                <p class="text-xs text-gray font-medium mt-2">از انتخاب تا تحویل، همه چیز با ما آسان است</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${steps.map((s, i) => `
                    <div class="relative flex flex-col items-center text-center rounded-3xl p-7 ${i === 1 ? "bg-[#FFFDE6] shadow-sm" : ""}">
                        <span class="absolute top-4 left-4 w-8 h-8 rounded-full bg-secondary text-primary text-sm font-extrabold flex items-center justify-center">${s.num}</span>
                        <span class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">${s.icon}</span>
                        <h3 class="text-sm font-bold text-neutral-800 mt-5">${s.title}</h3>
                        <p class="text-xs text-gray font-medium mt-2 leading-6">${s.desc}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    </section>
    `
    return section;
}
