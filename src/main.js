import './style.css'
import { Nav } from './components/nav'
import { Icons } from './components/icons'
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  root.appendChild(Icons());
  root.appendChild(Nav());

  const content = document.createElement("div");
  content.id = "content";
  root.appendChild(content);

  function render(route) {
    content.innerHTML = "";
    if (route === "about") {
      content.appendChild(AboutPage());
    } else {
      content.appendChild(HomePage());
    }
  }

  document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const route = e.target.getAttribute("data-route");
      render(route);
    }
  });

    render("home");

    

  const sidebar = document.querySelector(".fixed");
  const toggleBtn = document.querySelector("#toggleBtn");
  const overlay = document.querySelector(".overlay");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("!-left-66")
    overlay.classList.toggle("!hidden")
  });
  overlay.addEventListener("click", () => {
    sidebar.classList.toggle("!-left-66")
    overlay.classList.toggle("!hidden")
  })


});