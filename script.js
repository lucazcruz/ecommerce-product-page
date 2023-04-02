import openMenu from './scripts/open-menu.js';
import amountInit from './scripts/amount.js';
import Cart from './scripts/cart.js';
import AddToCart from './scripts/add-to-cart.js'
import Modal from './scripts/galeria.js';
import Slide from './scripts/slide.js';

openMenu();
amountInit();

const slide = new Slide(".navButtons");
const cart = new Cart(".cart-btn", ".cart-modal");
const addToCart = new AddToCart(".add-button", ".cart-content")
const galeria = new Modal(".product", ".image-main", ".galeria img");

slide.init()
cart.init();
galeria.init();
addToCart.init();


