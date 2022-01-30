const menuItems = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 30.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      }
  ];

  //to display dynamic category button according to given data
// function displayCategoryBtn(){
//     const category  = menuItems.reduce( function(values, items){
//         if(!values.includes(items.category)){
//             values.push(items.category);
//         }
//         return values;
//     }, ['all'])
//     const categoryBtn = category.map( (item)=> {
//         return `<button class="category-btn" data-category = "${item}">${item}</button>`
//     }).join("");

//     return categoryBtn;
// }

function displayMenuItems(){
    const menu = menuItems.map( (item) =>{
        return `
        <div class = "menu-items">
            <img class = "item-img" src = ${item.img}>
            <div class = "item-detail">
                <h3 class = "item-name">${item.title}</h3>
                <p class = "item-desc">${item.desc}</p>
                <button class="order-btn">Add To Cart</button>
            </div>
        </div>
        `
    }).join("")
    return menu;
}
// function filterBtn(menu){
//     const btn = menu.querySelectorAll(".category-btn")
//     btn.forEach((button) => {
//         button.addEventListener('click', (e)=>{
//            const category = e.currentTarget.dataset.category;
//            const menuCategory = menuItems.filter(function (menuItem) {
//             // console.log(menuItem.category);
//             if (menuItem.category === category) {
//               return menuItem;
//             }
//           });
//           console.log(category)
//           console.log(menuCategory)
//           if (category === "all") {
//             menu.children[1].insertAdjacentHTML('afterbegin',displayMenuItems(menuItems);
//           } else {
//              displayMenuItems(menuCategory);
//           }
//         })
//         console.log(menu.children[1])
        
//     });
// }
function createMenu(){
    const menu = document.createElement('section');
    menu.setAttribute("id", "menu")
    const menuEl = `
    <div class = "menu-container">
    ${displayMenuItems()}
    </div>
    `;
    menu.insertAdjacentHTML("afterbegin", menuEl);
    
    // filterBtn(menu);
    return menu;
}

export{createMenu};
/// for categories 
// <ul class= "menu-btn">
//     ${displayCategoryBtn()}
// </ul>

