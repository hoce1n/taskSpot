import './style.css';
import { navbar } from '#components/navbar';
import { aside } from '#components/aside';
import { main } from '#components/main';

const app = document.getElementById("app");
const section = document.createElement("section");
const page = document.createElement("main");
section.className = 'w-[95%] mx-auto';
page.className = 'md:flex items-center gap-x-12'

section.appendChild(navbar());
section.appendChild(page);
page.appendChild(aside());
page.appendChild(main());
app.appendChild(section);
