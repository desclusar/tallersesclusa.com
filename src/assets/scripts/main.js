/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import Swal from 'sweetalert2';
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

const navToggle = document.querySelector(".burger");
const header = document.querySelector(".header");
const navList = document.querySelector(".header__nav-list");

if (header && navToggle && navList) {

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("burger--is-active");
    header.classList.toggle("header--menu-open", isOpen);
    navList.classList.toggle("header__nav-list--is-open", isOpen); // ← ara sí
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    navToggle.setAttribute("aria-label", isOpen ? "Tancar menú principal" : "Obrir menú principal");
  });
}


document.querySelectorAll(".footer__link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    Swal.fire({
      title: this.dataset.title || "Missatge",
      text: this.dataset.text || "Acció no disponible.",
      icon: this.dataset.icon || "info",
      confirmButtonText: "OK"
    });
  });
});