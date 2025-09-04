import './style.css'
import { Nav } from './components/nav'
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  root.appendChild(Nav());

  const content = document.createElement("div");
  content.id = "content";
  root.appendChild(content);

  function render(route) {
    content.innerHTML = "";
    console.log("route:", route);
    if (route === "about") {
      content.appendChild(AboutPage());
    } else {
      content.appendChild(HomePage());
    }
  }

  document.body.addEventListener("click", (e) => {
    if (e.target.tagname === "A") {
      e.preventDefault();
      const route = e.target.getAttribute("data-route");
      render(route);
    }
  });
  
});