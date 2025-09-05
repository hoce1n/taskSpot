import lgo from '/logo/lgo.svg'
import avatar from '/avatar.jpg'

const menuItems = [{
        icon: "#home",
        label: "خانه",
        link: "/",
        group: "main"
    },
    {
        icon: "#pizza",
        label: "منو",
        link: "menu",
        group: "main"
    },
    {
        icon: "#sparkles",
        label: "تخفیف ها",
        link: "",
        group: "main"
    },
    {
        icon: "#news",
        label: "اخبار",
        link: "news"
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
        link: "setting",
        group: "setting"
    },
    {
        icon: "#question",
        label: "سوالات",
        link: "",
        group: "footer"
    },
    {
        icon: "#logout",
        label: "خروج از حساب",
        link: "",
        group: "footer"
    },
]


function renderItems(group) {
    return menuItems
        .filter(item => item.group === group)
        .map(item => `
            <a href="${item.link}" class="p-3"><li class="flex items-center text-sm space-x-3"><svg class="w-5 h-5"><use href="${item.icon}"></use></svg><span>${item.label}</span></li></a>
        `).join("");
}


export function Nav() {
    const nav = document.createElement("nav");

    nav.innerHTML = `
        <nav class="hidden md:flex justify-center items-center max-w-[1171px] mx-auto px-4 lg:px-0">
            <section class="flex items-center w-161 space-x-10">
                <img src="${lgo}" width="54px" height="56px" alt="Logo">
                <ul class="flex *:text-gray space-x-12">
                    <li class="font-semibold !text-primary"><a href="#" data-route="home">خانه</a></li>
                    <li><a href="">منو</a></li>
                    <li><a href="">تخفیف ها</a></li>
                    <li><a href="">اخبار</a></li>
                    <li><a href="#" data-route="about">درباره ما</a></li>
                </ul>
            </section>
            <section class="flex gap-4">
                <button class=" w-21 h-10 rounded-[100px] border-1 border-primary text-primary hover:bg-primary hover:text-white transition-colors">ثبت نام</button>
                <button class="w-21 h-10 rounded-[100px] bg-primary text-white">ورود</button>
            </section>
        </nav>

        <section class="md:hidden flex w-full justify-between items-center h-14 px-4">
            <img src="${lgo}" width="45px" alt="logo">
            <section class="w-47 flex justify-between items-center">
                <button class=" w-21 h-10 rounded-[100px] border-1 border-primary text-primary hover:bg-primary hover:text-white transition-colors">ثبت نام</button>
                <button class="w-21 h-10 rounded-[100px] bg-primary text-white">ورود</button>
            </section>
            <span id="toggleBtn" class="cursor-pointer"><svg class="w-9 h-9"><use href="#hamberger"></use></svg></span>
        </section>

        <section class="md:hidden fixed top-0 bottom-0 left-0 p-6 w-64 flex flex-col space-y-6 bg-[#FFFDE6] shadow-2xl transition-all z-10">
            <section class="relative flex items-center space-x-3">
                <div><img src="${avatar}" class="rounded-full" width="44px" alt="Avatar"></div>
                <div class="flex flex-col space-y-1">
                    <span class="text-neutral-500 text-xxs font-medium">مدیر کل</span>
                    <span class="text-sm font-medium">حسین دانش</span>
                </div>
                <button class="absolute w-7 h-7 bg-[#FFFDE6] flex justify-center items-center -right-8 shadow rounded cursor-pointer">
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
            <section>
                <ul>
                ${renderItems("footer")}
                </ul>
            </section>
        </section>
        <div class="overlay md:hidden fixed inset-0 backdrop-blur-xs"></div>
    `;
    return nav;


}

