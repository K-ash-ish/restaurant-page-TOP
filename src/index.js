import './styles.css'
import { createNav, createhome } from "./home";
import {createMenu} from "./menu"

const body = document.querySelector("body");
createNav();
createhome();
createMenu();



// for foooter
const footer = document.createElement("footer");
const footerEl = `
        <p>Made With ❤️ <a href="https://github.com/K-ash-ish">Kashish</a></p>
    `;
footer.insertAdjacentHTML("afterbegin",footerEl)
body.appendChild(footer);

