import { Hero } from "../components/hero";
import { Categories } from "../components/categories";
import { Popular } from "../components/popular";
import { Promo } from "../components/promo";
import { Features } from "../components/features";
import { Testimonials } from "../components/testimonials";
import { Footer } from "../components/footer";

export function HomePage() {
    const home = document.createElement("div");
    home.appendChild(Hero());
    home.appendChild(Categories());
    home.appendChild(Popular());
    home.appendChild(Features());
    home.appendChild(Promo());
    home.appendChild(Testimonials());
    home.appendChild(Footer());
    return home;
}
