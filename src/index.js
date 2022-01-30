import './styles.css'
import { createNav, createhome } from "./home";
import {createMenu} from "./menu"

const contentPage = document.querySelector("#content");
const footer = document.createElement("footer");
contentPage.append(createNav())
contentPage.append(createhome());
console.log(contentPage)

const footerEl = `
        <p>Made With ❤️ <a href="https://github.com/K-ash-ish">Kashish</a></p>
    `;
footer.insertAdjacentHTML("afterbegin",footerEl)
contentPage.append(footer)

