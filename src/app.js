import './style.css';
import { navbar } from '#components/navbar';
import { aside } from '#components/aside';
import { main } from '#components/main';

const app = document.getElementById("app");
const section = document.createElement("section");
const page = document.createElement("main");
section.className = 'container mx-auto';
page.className = 'flex items-center gap-x-12'

section.appendChild(navbar());
section.appendChild(page);
page.appendChild(aside());
page.appendChild(main());
app.appendChild(section);