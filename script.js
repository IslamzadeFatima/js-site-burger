let productList = document.getElementById("productList");
let cardContainer = document.getElementById("cardContainer");

class Product {
  constructor(id, ad, qiymet, category, img) {
    this.id = id;
    ((this.name = ad), (this.price = qiymet), (this.category = category));
    this.img = img;
  }
  showProduct() {
    return `
        
        <div onclick="showId(${this.id})"  id=${this.id} class="bg-gray-800 cursor-pointer rounded-2xl max-w-full">
          <a href="javascript:void(0)" class="block">
            <div class="sm:aspect-[140/84] aspect-[140/100] w-full overflow-hidden mx-auto bg-gray-100 rounded-bl-[50px] rounded-tl-2xl rounded-tr-2xl">
              <img src="${this.img}" alt="product1"
                class="w-[70%] h-[70%] object-contain hover:scale-[1.1] transition-all mx-auto mt-10" />
            </div>
            <div class="text-left p-4">
              <h3 class="text-2xl font-semibold text-white">${this.name}</h3>
              <p class="text-md font-semibold text-white mt-3 mb-7">${this.category}</p>
              <div class="flex items-center justify-between">
                <h4 class="text-lg text-white font-bold">${this.price}</h4>
                <p class="bg-[#ffbe33] w-10 h-10 rounded-[50%] flex justify-center items-center"><i class="fa-solid fa-cart-shopping text-white"></i></p>
              </div>
            </div>
          </a>
        </div>
          `;
  }
}


let AllProduct = [
  new Product(1, "Delicious Pizza", "$20", "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f1.png"),
  new Product(2, "Delicious Burger", "$15", "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f2.png"), 
  new Product(3, "Delicious Pizza", "$17", "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f3.png"),
  new Product(4, "Delicious Pasta", "$18", "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f4.png"),
  new Product(5, "French Fries", "$10", "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f5.png"),
  new Product(6, "Delicious Pizza", "$15", "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f6.png"),
  new Product(7, "Tasty Burger", "$12", "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f7.png"),
  new Product(8, "Tasty Burger", "$14", "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f8.png"),
  new Product(9, "Delicious Pasta", "$10", "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", "https://themewagon.github.io/feane/images/f9.png")
];

for (let i = 0; i < AllProduct.length; i++) {
  productList.innerHTML += AllProduct[i].showProduct();
}

