// items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu);
  displayMenuButtons();
});

function displayMenu(menuItems) {
  let displayMenuItems = menuItems.map(function (item) {
    return `<article class="menu-item">
              <img src=${item.img} alt=${item.title} class="photo" />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
              </div>
            </article>`;
  });
  displayMenuItems = displayMenuItems.join("");
  document.querySelector(".section-center").innerHTML = displayMenuItems;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const container = document.querySelector(".btn-container");
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
                ${category}
              </button>`;
    })
    .join("");

  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === "all") {
        displayMenu(menu);
      } else {
        displayMenu(menuCategory);
      }
    });
  });
}

// load items
// window.addEventListener("DOMContentLoaded", function (){
//     displayMenu = (menu);
//     displayMenuButtons();
// });


// function displayMenuItems(menuItems) {
//   let displayMenu = menuItems.map(function (item) {
    // console.log(item);

//     return `<article class="menu-item">
//           <img src=${item.img} class="photo" alt=${item.title} />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//   });
//   displayMenu = displayMenu.join("");

//   sectionCenter.innerHTML = displayMenu;
// }



// function displayMenuButtons(){
//     const categories = menu.reduce(function(values,item){
//         if (!values.includes(item.category)){
//             values.push(item.category);
//         }
//         return values;
//     },['all']);

//    const categoryBtns = categories.map(function(category){
//     return `<button class="filter-btn" type="button" 
//     data-id=${category}>
//     ${category}
//     </button>`
//    }).join("");
//    container.innerHTML = categoryBtns;
//     const filterBtns = document.querySelectorAll(".filter-btn");
//     // filter items
//     filterBtns.forEach(function(btn){
//         btn.addEventListener("click", function(e){
//             const category = e.currentTarget.dataset.id;
//             const menuCategory = menu.filter(function (menuItem){
//                 if (menuItem.category === category){
//                     return menuItem;
//                 }
//             });
//             // menuCategory
//             if (category === "all"){
//                 displayMenu(menu);
//             } else {
//                 displayMenuItems(menuCategory);
//             }
//         });
//     });
// }

// function displayMenuButtons() {
    // Get all unique categories, starting with "all"
    // const categories = menu.reduce(function(values, item) {
    //     if (!values.includes(item.category)) {
    //         values.push(item.category);
    //     }
    //     return values;
    // }, ['all']);

    // // Create buttons dynamically
    // const categoryBtns = categories.map(function(category) {
    //     return `<button class="filter-btn" type="button" data-id="${category}">
    //                 ${category}
    //             </button>`;
    // }).join("");

    // container.innerHTML = categoryBtns;

    // Select all buttons
    // const filterBtns = document.querySelectorAll(".filter-btn");

    // Filter items based on button click
//     filterBtns.forEach(function(btn) {
//         btn.addEventListener("click", function(e) {
//             const category = e.currentTarget.dataset.id;

//             if (category === "all") {
//                 displayMenuItems(menu); 
//             } else {
//                 const menuCategory = menu.filter(function(menuItem) {
//                     return menuItem.category === category;
//                 });
//                 displayMenuItems(menuCategory); 
//             }
//         });
//     });
// }









// using selectors inside the element
// const questions = document.querySelectorAll('.question');

// questions.forEach(function (question){
//     // console.log(question);
//     const btn = question.querySelector('.question-btn');
//     // console.log(btn);
// btn.addEventListener('click', function(){

//     questions.forEach(function(item){
//         if (item !== question){
//             item.classList.remove("show-text");
//         }
//     });

//     question.classList.toggle("show-text");
// })
// });


const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');
    
    btn.addEventListener('click', function () {
        // Close other open questions
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
                const otherBtn = item.querySelector('.question-btn');
                otherBtn.textContent = "+"; // reset to plus
            }
        });

        // Toggle current question
        question.classList.toggle("show-text");

        // Change button text
        if (question.classList.contains("show-text")) {
            btn.textContent = "–"; // minus sign
        } else {
            btn.textContent = "+"; // plus sign
        }
    });
});






// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//       const question = e.currentTarget.parentElement.parentElement;
//       question.classList.toggle("show-text"); 
//     }); 
// });
