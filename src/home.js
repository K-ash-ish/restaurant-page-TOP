const contentPage = document.querySelector("#content");

function createNav(){
    const nav = document.createElement('nav');
    const navEl = `
            <ul id = "navbar">
                <h1>Eat<span class = "color">Treat</span></h1>
                <li class = "nav-items"><a class="home-btn" src = "#home" data-id = "home" >Home</a></li>
                <li class = "nav-items"><a class="menu-btn" src = "#menu" data-id = "menu" >Menu</a></li>
            </ul>
        `;
        nav.insertAdjacentHTML('afterbegin',navEl);
        contentPage.append(nav)
}
function createhome (){
    const homeSection = document.createElement("section");
    homeSection.setAttribute("id", "home")
    const homeEl = `
            <article class="left-home">
                <h2>Welcome to Eat<span class = "color">Treat</span></h1>
                <p>Lorem Ipsum Lorem Lorem Ipsum LoremLorem Ipsum LoremLorem Ipsum Lorem</p>
                <button class = "order-btn">Order Online</button>
            </article>
            <figure class ="right-home">
                <img class= "food-image" src = "./images/burger.png" alt = "food-image">
            </figure>
            
        `
    homeSection.insertAdjacentHTML('beforeend', homeEl)
    contentPage.append(homeSection);
}
export {createNav, createhome};

