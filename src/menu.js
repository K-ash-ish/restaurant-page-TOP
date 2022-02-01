const contentPage = document.querySelector("#content");
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

function displayMenuItems(){
    const menuSection = document.createElement('section')
    const menuContainer = document.createElement("div");
   
    menuSection.classList.add("menu")
    menuContainer.classList.add("menu-container")
    menuContainer.setAttribute("id", "menu")
    // //FOR PAGES
    // const pageNo = document.createElement('div');// for page button
    // pageNo.classList.add('pagination'); // adding calss to page number section
    // let page = 1;
    // let rows_per_page = 6;
    // page--;
    // let start = rows_per_page  * page;
    // let end = rows_per_page + start
    // let pageCount = Math.ceil((menuItems.length)/rows_per_page)
   
    // for(let i = start ; i< pageCount; i++){
    //   let btn = document.createElement('button');
    //   btn.classList.add('page-btn')
    //   btn.dataset.pageId = i +1;
    //   btn.textContent = i+1;
    //   pageNo.appendChild(btn)
    // }
    // const pageBtn = pageNo.querySelectorAll('.page-btn');
    //   pageNo.addEventListener('click', (e)=>{
    //   start = e.target.dataset.pageId;
      
    // })
    // let paginatedItems = menuItems.slice(start, end);
    let menu = menuItems.map( (item) =>{
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
      }).join("");

      menuContainer.innerHTML = menu;
      menuSection.appendChild(menuContainer);
      contentPage.append(menuSection) ;
    
}

function createMenu(){
  displayMenuItems();
}

export{createMenu};

