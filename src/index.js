import './styles.css'
import { createhome } from "./home";
import {createMenu, pagination} from "./menu"

const body = document.querySelector("body");
const contentPage = document.querySelector("#content");

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
const homeButton = document.querySelector('.home-btn')
const menuButton = document.querySelector('.menu-btn')

menuButton.addEventListener('click',()=>{
    const homeSection = document.querySelector('.home')
    const menuSection = document.querySelector('.menu')
    if(!menuSection.classList.contains("acitve")){
        menuSection.classList.add("active")
        if(document.querySelector('.home')){
        homeSection.classList.add("inactive")
        }
    }
   
});
homeButton.addEventListener('click', ()=>{
    const homeSection = document.querySelector('.home')
    const menuSection = document.querySelector('.menu') 
    if(homeSection.classList.contains('inactive')){
        homeSection.classList.remove("inactive");
        if(document.querySelector('.menu')){
            menuSection.classList.remove('active');
        }
    }
});

// for foooter
const footer = document.createElement("footer");
const footerEl = `
        <p>Made With ❤️ by <a href="https://github.com/K-ash-ish">Kashish</a></p>
    `;
footer.insertAdjacentHTML("afterbegin",footerEl)
body.appendChild(footer);

