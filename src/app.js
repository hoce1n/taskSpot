import './style.css';
import { navbar } from '#components/navbar';
import { aside } from '#components/aside';

const app = document.getElementById("app");
const section = document.createElement("section");
const main = document.createElement("main");
section.className = 'container mx-auto';

section.appendChild(navbar());
section.appendChild(main);
main.appendChild(aside());
app.appendChild(section);