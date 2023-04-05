export default class Cart {
  constructor(cartButton, cartModal) {
    this.cartButton = document.querySelector(cartButton);
    this.cartModal = document.querySelector(cartModal);
    this.cartContent = this.cartModal.querySelector(".cart-content")
    this.checkoutButton = this.cartModal.querySelector(".checkout-btn");

    this.openCart = this.openCart.bind(this);
    this.close = this.close.bind(this);
  }

  isEmpty(empty) {
    if (!this.cartContent.children.length) {
      this.cartContent.innerHTML = `<span class="empty">Your cart is empty.</span>`;
      this.checkoutButton.style.display= "none";
    }

    if (empty == 2) {
      const empty = document.querySelector(".empty")
      this.checkoutButton.style.display = "block";
      if (empty) empty.remove();
    }
  }

  openCart() {
    this.cartModal.classList.toggle("active")
    this.isEmpty();
    
    setTimeout(() => {
      document.addEventListener("click", this.close)
      if (!this.cartModal.classList.contains("active")) {
        document.removeEventListener("click", this.close)
      }
    });
  }

  close({ target }) {
    if (!this.cartModal.contains(target)) {
      this.isEmpty(2)
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
