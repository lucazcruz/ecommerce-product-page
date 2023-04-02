export default function openMenu() {
  const openButton = document.querySelector(".menu-btn");
  const menu = document.querySelector(".header-menu");
  const overlayer = document.querySelector(".overlayer");

  function openMenu() {
    menu.classList.add("active");
    overlayer.classList.add("active");

    setTimeout(()=> document.addEventListener("click", closeMenu));
  }

  function closeMenu({ target }) {
    if (target == overlayer || target !== menu) {
      menu.classList.remove("active");
      overlayer.classList.remove("active");

      document.removeEventListener("click", closeMenu);
    };
  }

  openButton.addEventListener("click", openMenu);
}