class ProductExist {
   static verify() {
    this.cartContent = document.querySelector(".cart-content");
    if (!this.cartContent.children[0]) {
      this.cartContent.innerHTML = `<span class="empty">Your cart is empty.</span>`;
    }
  }
}

export default class Cart {
  constructor(cartButton, cartModal) {
    this.cartButton = document.querySelector(cartButton);
    this.cartModal = document.querySelector(cartModal);

    this.openCart = this.openCart.bind(this);
    this.close = this.close.bind(this);
  } 

  openCart() {
    // ProductExist.verify();
    this.cartModal.classList.toggle("active")

    setTimeout(() => {
      document.addEventListener("click", this.close)
      if (!this.cartModal.classList.contains("active")) {
        document.removeEventListener("click", this.close)
      }
    });
  }

  close({ target }) {
    if (!this.cartModal.contains(target)) {
      this.cartModal.classList.remove("active")
      document.removeEventListener("click", this.close)
    }
  }

  addClickEvent() {
    this.cartButton.addEventListener("click", this.openCart);
  }

  init() {
    this.addClickEvent();
  }
}
