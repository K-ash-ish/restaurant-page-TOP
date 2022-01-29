function createNav(){
    const nav = document.createElement('nav');
    const navEl = `
    <ul id = "navbar">
    <h1>Eat<span class = "color">Treat</span></h1>
                <li class = "nav-items"><a src = "#home">Home</a></li>
                <li class = "nav-items"><a src = "#menu">Menu</a></li>
                <li class = "nav-items"><a src = "#contact">Contact</a></li>
            </ul>
        `;
        nav.insertAdjacentHTML('afterbegin',navEl);
        return nav;
}
function createhome (){
    const homeSection = document.createElement("section");
    homeSection.setAttribute("id", "hero-section")
    const homeEl = `
            <div class="left-home">
                <h2>Welcome to Eat<span class = "color">Treat</span></h1>
                <p>Lorem Ipsum Lorem Lorem Ipsum LoremLorem Ipsum LoremLorem Ipsum Lorem</p>
                <button class = "order-btn">Order Online</button>
            </div>
            <figure class ="right-home">
                <img class= "food-image" src = "./images/burger.png" alt = "food-image">
            </figure>
            
        `
    homeSection.insertAdjacentHTML('beforeend', homeEl)
    return homeSection;
}
export {createNav, createhome};

