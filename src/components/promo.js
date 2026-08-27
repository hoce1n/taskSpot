export function Promo() {
    const section = document.createElement("section");
    section.innerHTML = `
    <section class="max-w-[1170px] mx-auto px-4 lg:px-2 py-12">
        <div class="relative overflow-hidden rounded-3xl bg-primary px-8 py-10 md:px-14 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="absolute -top-10 -left-10 w-52 h-52 rounded-full bg-secondary/20 blur-2xl"></div>
            <div class="absolute -bottom-16 -right-8 w-64 h-64 rounded-full bg-secondary/20 blur-3xl"></div>
            <div class="relative flex flex-col items-start z-10">
                <span class="bg-secondary text-primary text-xxs font-extrabold px-4 py-1.5 rounded-full">پیشنهاد ویژه</span>
                <h2 class="text-white text-2xl md:text-3xl font-extrabold mt-5 leading-snug">
                    تا ۵۰٪ تخفیف
                    <br>
                    روی اولین سفارش
                </h2>
                <p class="text-white/80 text-xs md:text-sm font-medium mt-4 leading-7">
                    با کد تخفیف زیر اولین سفارش خود را با تخفیف ویژه ثبت کنید
                </p>
                <div class="mt-6 flex items-center gap-3">
                    <code class="bg-white text-primary font-extrabold text-sm md:text-base px-6 py-3 rounded-2xl tracking-widest">WELCOME50</code>
                    <button class="border-2 border-white/70 text-white text-sm font-bold py-3 px-6 rounded-[100px] hover:bg-white hover:text-primary transition-colors">
                        کپی کد
                    </button>
                </div>
            </div>
            <div class="relative z-10 hidden md:flex items-center gap-5">
                <div class="text-center bg-white/15 rounded-3xl px-8 py-6 backdrop-blur">
                    <span class="text-secondary text-4xl font-extrabold">۷۲٪</span>
                    <p class="text-white text-xs font-medium mt-2">مشتری‌ها دوباره خرید کرده‌اند</p>
                </div>
            </div>
        </div>
    </section>
    `
    return section;
}
