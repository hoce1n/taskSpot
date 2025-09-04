import hamberger from '/hamberger.png'

export function Hero() {
    const hero = document.createElement("hero");
    hero.innerHTML = `
        <section class="max-w-[1171px]">
            <div class="w-170">
                <div>
                    <div class="">
                        <img src="${hamberger}" width="526px" height="687px" alt="">
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    `
    return hero;
}