import './style.css'
import { Nav } from './components/nav'
import { Icons } from './components/icons'
import { HomePage } from './pages/home'
import { AboutPage } from './pages/about'
import { Footer } from './components/footer'

const routes = {
    home: HomePage,
    about: AboutPage,
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("app");
    root.appendChild(Icons());
    root.appendChild(Nav());

    const content = document.createElement("div");
    content.id = "content";
    root.appendChild(content);

    function currentRoute() {
        const hash = window.location.hash.replace(/^#\/?/, "") || "home";
        return routes[hash] ? hash : "home";
    }

    function render(route) {
        const page = routes[route] || HomePage;
        content.innerHTML = "";
        content.appendChild(page());
        content.appendChild(Footer());
        window.scrollTo(0, 0);
        closeSidebar();
    }

    function closeSidebar() {
        sidebar.classList.add("!-left-66");
        overlay.classList.add("!hidden");
    }

    const sidebar = document.querySelector("#sidebar");
    const overlay = document.querySelector("#overlay");
    const toggleBtn = document.querySelector("#toggleBtn");
    const closeBtn = document.querySelector("#closeSidebar");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("!-left-66");
        overlay.classList.toggle("!hidden");
    });
    overlay.addEventListener("click", closeSidebar);
    if (closeBtn) closeBtn.addEventListener("click", closeSidebar);

    document.body.addEventListener("click", (e) => {
        const link = e.target.closest("a[data-route]");
        if (link) {
            e.preventDefault();
            const route = link.getAttribute("data-route");
            const hash = route === "home" ? "#/" : `#/${route}`;
            if (window.location.hash === hash) {
                render(route);
            } else {
                window.location.hash = hash;
            }
        }
    });

    window.addEventListener("hashchange", () => render(currentRoute()));

    render(currentRoute());
});
