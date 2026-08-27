import hamberger from '/hamberger.png'
import vector from '/Vector.png'

export function Hero() {
    const hero = document.createElement("section");
    hero.innerHTML = `
    <section class="max-w-[1170px] mx-auto px-4 lg:px-2 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-10 lg:pt-16 pb-10">
        <div class="relative order-2 lg:order-1 flex flex-col items-start">
            <span class="inline-flex items-center gap-2 rounded-full bg-secondary/20 text-primary px-4 py-1.5 text-xs font-semibold">
                <svg class="w-4 h-4 text-primary"><use href="#pizza"></use></svg>
                سفارش آنلاین غذا
            </span>
            <h1 class="mt-6 text-[2rem] md:text-[2.75rem] leading-[1.35] font-extrabold text-neutral-800">
                گرسنه‌اید؟ بهترین غذاهای شهر را
                <span class="text-primary">همین حالا</span>
                سفارش دهید
            </h1>
            <p class="mt-5 max-w-md text-gray text-sm md:text-base leading-7 font-medium">
                با اپلیکیشن ما در کمتر از چند دقیقه از صدها رستوران معروف شهر سفارش دهید و غذای داغ را درب منزل تحویل بگیرید. سریع، ساده و خوشمزه.
            </p>
            <div class="mt-8 flex flex-wrap items-center gap-3">
                <button class="rounded-[100px] bg-primary text-white text-sm font-bold py-3 px-7 shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors">
                    سفارش غذا
                </button>
                <button class="rounded-[100px] border-2 border-primary text-primary text-sm font-bold py-3 px-7 hover:bg-primary hover:text-white transition-colors">
                    دانلود اپلیکیشن
                </button>
            </div>
            <div class="mt-10 grid grid-cols-3 gap-6 w-full max-w-md">
                <div class="flex flex-col">
                    <span class="text-2xl font-extrabold text-primary">+۵۰۰</span>
                    <span class="text-xxs text-gray font-medium mt-1">رستوران فعال</span>
                </div>
                <div class="flex flex-col border-r border-neutral-200 pr-6">
                    <span class="text-2xl font-extrabold text-primary">+۲۰۰k</span>
                    <span class="text-xxs text-gray font-medium mt-1">سفارش موفق</span>
                </div>
                <div class="flex flex-col border-r border-neutral-200 pr-6">
                    <span class="text-2xl font-extrabold text-primary">+۱۵k</span>
                    <span class="text-xxs text-gray font-medium mt-1">کاربر فعال</span>
                </div>
            </div>
        </div>

        <div class="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <img src="${vector}" alt="" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-[620px] opacity-80 -z-10">
            <img src="${hamberger}" alt="همبرگر خوشمزه" class="w-[78%] max-w-[420px] drop-shadow-2xl">
            <div class="absolute top-8 right-0 md:right-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-secondary/25 flex items-center justify-center text-xl font-extrabold text-primary">۴.۹</span>
                <div class="flex flex-col">
                    <span class="text-xs font-bold text-neutral-800">امتیاز کاربران</span>
                    <span class="text-xxs text-gray">از ۲۴۰۰+ رای</span>
                </div>
            </div>
            <div class="absolute bottom-6 left-0 md:left-10 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg class="w-5 h-5 text-primary"><use href="#ship-wheel"></use></svg>
                </span>
                <div class="flex flex-col">
                    <span class="text-xs font-bold text-neutral-800">ارسال سریع</span>
                    <span class="text-xxs text-gray">کمتر از ۳۰ دقیقه</span>
                </div>
            </div>
        </div>
    </section>
    `
    return hero;
}
