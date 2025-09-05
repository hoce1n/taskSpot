import { Hero } from "../components/hero";
export function HomePage() {
    const home = document.createElement("section");
    home.appendChild(Hero());
    return home;
}