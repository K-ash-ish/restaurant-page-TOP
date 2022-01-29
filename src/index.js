import './styles.css'
import { createNav, createhome } from "./home";


const contentPage = document.querySelector("#content");
const footer = document.createElement("footer");
contentPage.append(createNav())
contentPage.append(createhome());

const footerEl = `
        <p>Made With ❤️ <a href="https://github.com/K-ash-ish">Kashish</a></p>
    `;
footer.insertAdjacentHTML("afterbegin",footerEl)
contentPage.append(footer)

