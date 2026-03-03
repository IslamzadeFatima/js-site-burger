var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

let productList = document.getElementById("productList");
let cardContainer = document.getElementById("cardContainer");
let listContainer = document.getElementById("listContainer");
let price = document.getElementById("price");
let count = document.getElementById("count");
let count2 = document.getElementById("count2");
let sebet = [];
let list = [];

function opencart() {
  let modal = document.getElementById('modal')
  modal.style.display === 'none' ? modal.style.display = 'block' : modal.style.display = 'none'
}

function openlist() {
  let modal2 = document.getElementById('modal2')
  modal2.style.display === 'none' ? modal2.style.display = 'block' : modal2.style.display = 'none'
}

class Product {
  constructor(id, ad, yemek, qiymet, category, img) {
    this.id = id;
    ((this.name = ad), (this.food = yemek), (this.price = qiymet), (this.category = category));
    this.img = img;
  }


  showProduct() {
    return `  
        <div  onclick="showId(${this.id})"  id=${this.id} class="bg-gray-800 cursor-pointer rounded-2xl max-w-full">
          <a href="javascript:void(0)" class="block">
            <div class="sm:aspect-[140/84] aspect-[140/100] w-full overflow-hidden mx-auto bg-gray-100 rounded-bl-[50px] rounded-tl-2xl rounded-tr-2xl">
              <img src="${this.img}" alt="product1"
                class="w-[70%] h-[70%] object-contain hover:scale-[1.1] transition-all mx-auto mt-10" />
            </div>
            <div class="text-left p-4">
              <h3 class="text-2xl font-semibold text-white">${this.name}</h3>
              <p class="text-md font-semibold text-white mt-3 mb-7">${this.category}</p>
              <div class="flex items-center justify-between">
                <h4 class="text-lg text-white font-bold">${this.price} $</h4>
              <div class="flex items-center justify-between gap-3">
                <p onclick="addList(event, ${this.id}, this)" class="text-red-600 text-2xl"><i class="fa-regular fa-heart"></i></p>
                <p onclick="addBasket(${this.id})" class="bg-[#ffbe33] w-10 h-10 rounded-[50%] flex justify-center items-center"><i class="fa-solid fa-cart-shopping text-white"></i></p>
              </div>
              </div>
            </div>
          </a>
        </div>
          `;
  }
}

function addBasket(id) {
  let existingProduct = sebet.find(item => item.id === id)
  if (existingProduct) {
    existingProduct.count += 1
  } else {
    sebet.push({ id: id, count: 1 });
    console.log(sebet);
  }
  showsebet()
  count.innerHTML = sebet.length
}

function addList(event, id, element) {
    if (event) event.stopPropagation();
    let existingProduct = list.find(item => item.id === id);
    if (!existingProduct) {
        list.push({ id: id });
    }
    showlist();
    count2.innerHTML = list.length;
    let icon = element.tagName === 'I' ? element : element.querySelector('i');
    
    if (icon) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
    }
}

let AllProduct = [
  new Product(1, "Delicious Pizza", "Pizza", 20, "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f1.png"),
  new Product(2, "Delicious Burger", "Burger", 15, "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f2.png"),
  new Product(3, "Delicious Pizza", "Pizza", 17, "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f3.png"),
  new Product(4, "Delicious Pasta", "Pasta", 18, "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f4.png"),
  new Product(5, "French Fries", "Fries", 10, "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f5.png"),
  new Product(6, "Delicious Pizza", "Pizza", 15, "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f6.png"),
  new Product(7, "Tasty Burger", "Burger", 12, "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f7.png"),
  new Product(8, "Tasty Burger", "Burger", 14, "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f8.png"),
  new Product(9, "Delicious Pasta", "Pasta", 10, "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f9.png")
];

for (let i = 0; i < AllProduct.length; i++) {
  productList.innerHTML += AllProduct[i].showProduct();
}

function showsebet() {
  cardContainer.innerHTML = "";
  let totalPay = 0;
  cardContainer.innerHTML = sebet.map((item, index) => {
    const prdct = AllProduct.find(p => p.id === item.id)
    totalPay += prdct.price * item.count
    return `
      <div class="grid md:grid-cols-4 items-center md:gap-4 gap-6 py-4">
        <div class="col-span-2 flex items-center gap-6">
          <div class="w-20 h-20 shrink-0">
            <img src='${prdct.img}'
              class="w-full h-full object-contain" />
          </div>
          <div>
            <h3 class="text-[15px] font-semibold text-slate-900">${prdct.name}</h3>
            <h6 class="text-sm text-slate-500 mt-1">Food: <span class="ml-2 font-semibold">${prdct.food}</span>
            </h6>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="updateCount(${index},'minus')"  class="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full font-bold cursor-pointer">-</button>
          <span class="text-sm font-bold">${item.count}</span>
          <button onclick="updateCount(${index},'plus')"   class="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full font-bold cursor-pointer">+</button>
        </div>
        <div class="flex items-center">
          <h4 class="text-[15px] font-semibold text-slate-900">${(prdct.price * item.count)}$</h4>
          <svg onclick="removBasket(${index})" xmlns="http://www.w3.org/2000/svg" class="w-3 cursor-pointer shrink-0 fill-red-500 ml-auto"
            viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </div>
      </div>    
     `
  })
    .join("")
  price.innerHTML = `
   <li class="flex flex-wrap gap-4 text-sm py-3 font-bold text-blue-600">
      Total <span class="ml-auto">${totalPay} $</span>
    </li>
  `
}
function showlist() {
    listContainer.innerHTML = "";
    listContainer.innerHTML = list.map((item, index) => {
    const prdct = AllProduct.find(p => p.id === item.id)

    return `
      <div class="grid md:grid-cols-4 items-center md:gap-4 gap-6 py-4">
        <div class="col-span-2 flex items-center gap-6">
          <div class="w-20 h-20 shrink-0">
            <img src='${prdct.img}'
              class="w-full h-full object-contain" />
          </div>
          <div>
            <h3 class="text-[15px] font-semibold text-slate-900">${prdct.name}</h3>
            <h6 class="text-sm text-slate-500 mt-1">Food: <span class="ml-2 font-semibold">${prdct.food}</span>
            </h6>
          </div>
        </div>
        <div class="flex items-center">
          <h4 class="text-[15px] font-semibold text-slate-900">${prdct.price}$</h4>
          <svg onclick="removList(${index})" xmlns="http://www.w3.org/2000/svg" class="w-3 cursor-pointer shrink-0 fill-red-500 ml-auto"
            viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </div>
      </div>    
     `
  }).join("")
}

function removBasket(index) {
  let modal = document.getElementById('modal')
  sebet.splice(index, 1)
  showsebet()
  count.innerHTML = sebet.length
  sebet.length == 0 ? modal.style.display = 'none' : modal.style.display = 'block'
}

function removList(index) {
  let modal2 = document.getElementById('modal2')
    list.splice(index, 1);
    showlist();
    count2.innerHTML = list.length
    list.length == 0 ? modal2.style.display = 'none' : modal2.style.display = 'block'
}
function updateCount(index, action) {
  if (action === 'plus') {
    sebet[index].count += 1
  } else if (action === 'minus') {
    if (sebet[index].count > 1) {
      sebet[index].count -= 1
    }
  } else {
    sebet.splice(item, 1)
  }
  showsebet()
}