import lgo from '/logo/lgo.svg'

export function Nav() {
    const nav = document.createElement("nav");
    nav.innerHTML = `
        <nav class="flex justify-center items-center max-w-[1171px] mx-auto px-4 lg:px-0">
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
    
    `;
    return nav;
}