import lgo from '/logo/lgo.svg'

const footerLinks = {
    "دسترسی سریع": ["خانه", "منو", "تخفیف‌ها", "اخبار", "درباره ما"],
    "خدمات": ["پشتیبانی", "پیگیری سفارش", "قوانین و مقررات", "حریم خصوصی", "سوالات متداول"],
    "رستوران‌ها": ["ثبت رستوران", "پنل رستوران", "همکاری با ما", "تبلیغات"],
}

export function Footer() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
    <footer class="bg-[#28241B] text-neutral-300 mt-8">
        <div class="max-w-[1170px] mx-auto px-4 lg:px-2 pt-14 pb-8">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-10">
                <div class="md:col-span-2 flex flex-col gap-4">
                    <img src="${lgo}" alt="لوگو" class="w-12">
                    <p class="text-xs leading-6 font-medium text-neutral-400 max-w-xs">
                        سرویس آنلاین سفارش غذا؛ با بیش از ۵۰۰ رستوران فعال، غذای داغ را سریع و مطمئن به درب منزل یا محل کار شما می‌رسانیم.
                    </p>
                    <div class="flex items-center gap-3 mt-2">
                        <span class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-secondary hover:text-primary transition-colors">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                        </span>
                        <span class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-secondary hover:text-primary transition-colors">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21.95 8.79a3.1 3.1 0 0 0-2.18-2.2C18.2 6.2 12 6.2 12 6.2s-6.2 0-7.77.39a3.1 3.1 0 0 0-2.18 2.2A32.5 32.5 0 0 0 1.6 12c0 1.07.13 2.14.45 3.21a3.1 3.1 0 0 0 2.18 2.2c1.57.39 7.77.39 7.77.39s6.2 0 7.77-.39a3.1 3.1 0 0 0 2.18-2.2c.32-1.07.45-2.14.45-3.21s-.13-2.14-.45-3.21zM9.9 15.2V8.8l5.2 3.2z"/></svg>
                        </span>
                        <span class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-secondary hover:text-primary transition-colors">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/></svg>
                        </span>
                        <span class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-secondary hover:text-primary transition-colors">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                        </span>
                    </div>
                </div>
                ${Object.entries(footerLinks).map(([title, links]) => `
                    <div class="flex flex-col gap-3">
                        <h4 class="text-sm font-bold text-white">${title}</h4>
                        ${links.map(l => `
                            <a href="#" class="text-xs text-neutral-400 font-medium hover:text-secondary transition-colors">${l}</a>
                        `).join("")}
                    </div>
                `).join("")}
            </div>
            <div class="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
                <p class="text-xxs text-neutral-500 font-medium">© ۱۴۰۳ سرویس آنلاین سفارش غذا. تمامی حقوق محفوظ است.</p>
                <p class="text-xxs text-neutral-500 font-medium">طراحی‌شده برای علاقه‌مندان به غذای خوب</p>
            </div>
        </div>
    </footer>
    `
    return footer;
}
