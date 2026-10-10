import './style.css';
import { navbar } from '#components/navbar';

const app = document.getElementById("app");
const section = document.createElement("section");
section.className = 'container mx-auto';

section.appendChild(navbar());
app.appendChild(section);