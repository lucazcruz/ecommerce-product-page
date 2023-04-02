import Cart from './cart.js';
const cart = new Cart(".cart-btn", ".cart-modal");

export default class AddToCart {
  constructor(addButton, cartContent) {
    this.addbutton = document.querySelector(addButton, );
    this.cartContent = document.querySelector(cartContent);

    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);

  }
  
  productConstruct(amount) {
    const div = document.createElement("div");
    div.classList.add("cart-product");
    div.innerHTML = `
      <img class="product-img" src="./assets/image-product-1-thumbnail.jpg" alt="" width="60" height="60">
      <div class="cart-product-info">
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 x ${amount} <b>$${125*amount}.00</b></p>
      </div>
      <img class="remove" src="./assets/icon-delete.svg" alt="">
    `;
    return div;
  }

  removeProduct({ target }) {
    target.parentElement.remove()
  }

  addProduct() {
    const amount = document.querySelector(".amount-btn .amount").textContent;
    if (amount == 0) {
      return;
    }

    document.querySelector(".empty").remove()

    const product = this.productConstruct(amount);
    this.cartContent.appendChild(product);
    cart.openCart();

    this.data = [...this.cartContent.children]
    console.log(this.data)
    this.data.forEach(item => {
      item.querySelector(".remove").addEventListener("click", this.removeProduct)
    })
  }

  addCartEvents() {
    this.addbutton.addEventListener("click", this.addProduct);

  }

  init() {
    this.addCartEvents();
  }
}
