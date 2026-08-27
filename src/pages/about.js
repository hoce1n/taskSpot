import vector from '/Vector.png'
import hamberger from '/hamberger.png'

const values = [
    {
        title: "سرعت در ارسال",
        text: "متعهدیم سفارش شما را در سریع‌ترین زمان ممکن و در کمتر از ۳۰ دقیقه تحویل دهیم.",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 24h36l-4 13a4 4 0 0 1-4 3H14a4 4 0 0 1-4-3z"/>
                <path d="M6 24c0-7 8-12 18-12s18 5 18 12"/>
            </svg>`
    },
    {
        title: "کیفیت تضمین‌شده",
        text: "همه رستوران‌ها با معیارهای سخت‌گیرانه انتخاب می‌شوند تا بهترین کیفیت را تجربه کنید.",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M24 4l6 12 12 1.5-9 8.5 2.5 12L24 32l-11.5 6L15 26l-9-8.5L18 16z"/>
            </svg>`
    },
    {
        title: "پشتیبانی ۲۴ ساعته",
        text: "تیم پشتیبانی ما در تمام ساعات شبانه‌روز آماده پاسخگویی به سوالات شماست.",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 40v-6H8a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4h-16l-8 6z"/>
                <path d="M16 20h.01M24 20h.01M32 20h.01"/>
            </svg>`
    },
    {
        title: "پرداخت امن",
        text: "پرداخت‌های آنلاین از طریق درگاه‌های امن بانکی انجام می‌شود و اطلاعات شما محرمانه می‌ماند.",
        icon: `
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <rect x="6" y="18" width="36" height="24" rx="4"/>
                <path d="M6 24h36"/>
                <path d="M14 32h8"/>
                <path d="M14 18V12a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6"/>
            </svg>`
    },
]

export function AboutPage() {
    const about = document.createElement("section");
    about.innerHTML = `
    <section class="max-w-[1170px] mx-auto px-4 lg:px-2 pt-10 pb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div class="flex flex-col items-start">
                <span class="inline-flex items-center gap-2 rounded-full bg-secondary/20 text-primary px-4 py-1.5 text-xs font-semibold">
                    <svg class="w-4 h-4"><use href="#ship-wheel"></use></svg>
                    درباره ما
                </span>
                <h1 class="mt-6 text-[1.9rem] md:text-[2.5rem] leading-[1.35] font-extrabold text-neutral-800">
                    قصه ما از یک
                    <span class="text-primary">سفارش ساده</span>
                    شروع شد
                </h1>
                <p class="mt-5 max-w-md text-gray text-sm md:text-base leading-8 font-medium">
                    سرویس آنلاین سفارش غذا در سال ۱۳۹۹ با یک هدف ساده آغاز به کار کرد: رساندن غذای خوشمزه و داغ به سفره شما، بدون هیچ دردسری. امروز با افتخار به بیش از ۵۰۰ رستوران و ۱۵ هزار کاربر فعال در سراسر کشور خدمت می‌رسانیم.
                </p>
                <p class="mt-4 max-w-md text-gray text-sm md:text-base leading-8 font-medium">
                    ما به دنبال آن هستیم که تجربه سفارش غذا را برای همه ساده، سریع و لذت‌بخش کنیم؛ چه در خانه، چه محل کار و چه مهمانی‌ها.
                </p>
                <div class="mt-8 grid grid-cols-3 gap-6 w-full max-w-md">
                    <div class="flex flex-col">
                        <span class="text-2xl font-extrabold text-primary">۱۳۹۹</span>
                        <span class="text-xxs text-gray font-medium mt-1">سال تاسیس</span>
                    </div>
                    <div class="flex flex-col border-r border-neutral-200 pr-6">
                        <span class="text-2xl font-extrabold text-primary">+۵۰۰</span>
                        <span class="text-xxs text-gray font-medium mt-1">رستوران</span>
                    </div>
                    <div class="flex flex-col border-r border-neutral-200 pr-6">
                        <span class="text-2xl font-extrabold text-primary">+۱۲۰</span>
                        <span class="text-xxs text-gray font-medium mt-1">کارمند</span>
                    </div>
                </div>
            </div>
            <div class="relative flex justify-center">
                <img src="${vector}" alt="" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-[560px] opacity-80 -z-10">
                <img src="${hamberger}" alt="همبرگر" class="w-[78%] max-w-[400px] drop-shadow-2xl">
                <div class="absolute top-10 right-0 md:right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                    <span class="w-10 h-10 rounded-full bg-secondary/25 flex items-center justify-center text-xl font-extrabold text-primary">۴.۹</span>
                    <span class="text-xs font-bold text-neutral-800">رضایت کاربران</span>
                </div>
            </div>
        </div>

        <div class="mt-20">
            <div class="text-center mb-10">
                <span class="text-primary text-xxs font-bold tracking-wide">چرا ما؟</span>
                <h2 class="text-xl md:text-2xl font-extrabold text-neutral-800 mt-3">ارزش‌هایی که به آن پایبندیم</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${values.map(v => `
                    <div class="rounded-3xl bg-white border border-neutral-100 shadow-sm p-6 flex flex-col items-start hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <span class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">${v.icon}</span>
                        <h3 class="text-sm font-bold text-neutral-800 mt-4">${v.title}</h3>
                        <p class="text-xs text-gray font-medium mt-2 leading-6">${v.text}</p>
                    </div>
                `).join("")}
            </div>
        </div>

        <div class="mt-20 rounded-3xl bg-primary px-8 py-12 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div class="absolute -top-12 -left-12 w-52 h-52 rounded-full bg-secondary/20 blur-2xl"></div>
            <div class="relative z-10 flex flex-col items-start">
                <h2 class="text-white text-xl md:text-2xl font-extrabold">آماده شروع یک ماجراجویی خوشمزه هستید؟</h2>
                <p class="text-white/80 text-xs md:text-sm font-medium mt-3">همین حالا ثبت‌نام کنید و اولین سفارش خود را با تخفیف ویژه تجربه کنید.</p>
            </div>
            <a href="/" data-route="home" class="relative z-10 bg-white text-primary text-sm font-bold py-3 px-8 rounded-[100px] hover:bg-secondary transition-colors">
                بازگشت به صفحه اصلی
            </a>
        </div>
    </section>
    `
    return about;
}
