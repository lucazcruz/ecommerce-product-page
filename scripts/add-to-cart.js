export default class AddToCart {
  constructor(addButton, cartContent) {
    this.addbutton = document.querySelector(addButton, );
    this.cartContent = document.querySelector(cartContent);
    this.amount = document.querySelector(".amount-items");

    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  amountItems() {
    this.amount.innerText = this.cartContent.children.length
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
    if (target) {
      target.parentElement.remove()
      this.amountItems();
    }
  }

  addProduct() {
    const amount = document.querySelector(".amount-btn .amount").textContent;
    if (amount == 0) {
      return;
    }

    const product = this.productConstruct(amount);
    this.cartContent.appendChild(product);

    [...this.cartContent.children].forEach(item => {
      item.querySelector(".remove").addEventListener("click", this.removeProduct)
    })

    this.amountItems();
  }

  addCartEvents() {
    this.addbutton.addEventListener("click", this.addProduct);
  }

  init() {
    this.addCartEvents();
  }
}
