const contentPage = document.querySelector("#content");
function createNav(){
    const nav = document.createElement('div');
    const navEl = `
            <ul>
                <li><a src = "#home">Home</a></li>
                <li><a src = "#menu">Menu</a></li>
                <li><a src = "#contact">Contact</a></li>
            </ul>
        `;
        
        contentPage.append(nav)
        nav.insertAdjacentHTML('afterbegin',navEl);
}
export {createNav};

