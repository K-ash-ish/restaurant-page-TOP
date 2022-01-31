import './styles.css'
import { createhome } from "./home";
import {createMenu} from "./menu"

const body = document.querySelector("body");
const contentPage = document.querySelector("#content");

// for foooter
const footer = document.createElement("footer");
const footerEl = `
        <p>Made With ❤️ <a href="https://github.com/K-ash-ish">Kashish</a></p>
    `;
footer.insertAdjacentHTML("afterbegin",footerEl)
body.appendChild(footer);

//creating nav
function createNav(){
    const nav = document.createElement('nav');
    const navEl = `
            <ul id = "navbar">
                <h1>Eat<span class = "color">Treat</span></h1>
                <button class="nav-items home-btn" data-id = "home" >Home</button>
                <button class="nav-items menu-btn" data-id = "menu">Menu</button>
            </ul>
        `;
        nav.insertAdjacentHTML('afterbegin',navEl);
        contentPage.append(nav)
}
//
createNav();
createhome();
createMenu();


