import lgo from '/logo/lgo.svg'
import avatar from '/avatar.jpg'

const menuItems = [{
        icon: "#home",
        label: "خانه",
        link: "home",
        group: "main"
    },
    {
        icon: "#pizza",
        label: "منو",
        link: "home",
        group: "main"
    },
    {
        icon: "#sparkles",
        label: "تخفیف ها",
        link: "home",
        group: "main"
    },
    {
        icon: "#news",
        label: "اخبار",
        link: "home"
    },
    {
        icon: "#ship-wheel",
        label: "درباره ی ما",
        link: "about",
        group: "main"
    },
    {
        icon: "#setting",
        label: "تنظیمات",
        link: "home",
        group: "setting"
    },
    {
        icon: "#question",
        label: "سوالات",
        link: "home",
        group: "footer"
    },
    {
        icon: "#logout",
        label: "خروج از حساب",
        link: "home",
        group: "footer"
    },
]

function renderItems(group) {
    return menuItems
        .filter(item => item.group === group)
        .map(item => `
            <a href="#/${item.link}" data-route="${item.link}" class="p-3"><li class="flex items-center text-sm space-x-3"><svg class="w-5 h-5"><use href="${item.icon}"></use></svg><span>${item.label}</span></li></a>
        `).join("");
}

export function Nav() {
    const nav = document.createElement("nav");

    nav.innerHTML = `
    <nav class="mt-4 max-w-[1170px] mx-auto grid-cols-[58px_635px_187px] justify-between items-center hidden md:grid p-2">
        <div>
            <a href="#/" data-route="home"><img src="${lgo}" alt="Logo"></a>
        </div>
        <div>
            <ul class="flex items-center gap-12 *:not-first:text-neutral-600 first:font-semibold first:text-primary *:not-first:font-medium">
                <li><a href="#/" data-route="home" class="hover:text-primary transition-colors">خانه</a></li>
                <li><a href="#/" data-route="home" class="hover:text-primary transition-colors">منو</a></li>
                <li><a href="#/" data-route="home" class="hover:text-primary transition-colors">تخفیف ها</a></li>
                <li><a href="#/" data-route="home" class="hover:text-primary transition-colors">اخبار</a></li>
                <li><a href="#/about" data-route="about" class="hover:text-primary transition-colors">ارتباط با ما</a></li>
            </ul>
        </div>
        <div class="gap-x-3">
            <button class="rounded-[100px] border-1 border-primary text-primary hover:bg-primary hover:text-white transition-colors py-2 px-4">ثبت نام</button>
            <button class="w-21 h-10 rounded-[100px] bg-primary text-white py-2 px-4">ورود</button>
        </div>
    </nav>
        <section class="md:hidden flex w-full justify-between items-center h-14 px-4">
            <a href="#/" data-route="home"><img src="${lgo}" width="45px" alt="logo"></a>
            <section class="w-47 flex justify-between items-center">
                <button class="w-21 h-10 rounded-[100px] border-1 border-primary text-primary hover:bg-primary hover:text-white transition-colors">ثبت نام</button>
                <button class="w-21 h-10 rounded-[100px] bg-primary text-white">ورود</button>
            </section>
            <span id="toggleBtn" class="cursor-pointer"><svg class="w-9 h-9"><use href="#hamberger"></use></svg></span>
        </section>

        <section id="sidebar" class="md:hidden fixed top-0 bottom-0 left-0 p-6 w-64 flex flex-col space-y-6 bg-[#FFFDE6] shadow-2xl transition-all z-10">
            <section class="relative flex items-center space-x-3">
                <div><img src="${avatar}" class="rounded-full" width="44px" alt="Avatar"></div>
                <div class="flex flex-col space-y-1">
                    <span class="text-neutral-500 text-xxs font-medium">مدیر کل</span>
                    <span class="text-sm font-medium">حسین دانش</span>
                </div>
                <button id="closeSidebar" class="absolute w-7 h-7 bg-[#FFFDE6] flex justify-center items-center -right-8 shadow rounded cursor-pointer">
                    <svg class="w-4 h-4"><use href="#chevron-left"></use></svg>
                </button>
            </section>
            <div class="bg-neutral-200 rounded-xl h-px"></div>
            <section>
                <span class="text-xxs">اصلی</span>
                <ul>
                ${renderItems("main")}
                </ul>
            </section>
            <div class="bg-neutral-200 rounded-xl h-px"></div>
            <section>
                <span class="text-xxs">تنظیمات</span>
                <ul>
                ${renderItems("setting")}
                </ul>
            </section>
            <section class="mt-auto">
                <ul>
                ${renderItems("footer")}
                </ul>
            </section>
        </section>
        <div id="overlay" class="overlay md:hidden fixed inset-0 backdrop-blur-xs !hidden"></div>
    `;

    return nav;
}
