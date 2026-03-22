/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

console.log("l'Script s'ha carregat correctament");
const navToggle = document.querySelector(".burger");
const header = document.querySelector(".header");

if (header && navToggle) {

  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("burger--is-active");
    navToggle.classList.toggle("burger--is-active", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    navToggle.setAttribute("aria-label", isOpen ? "Tancar menú principal" : "Obrir menú principal");

  });
}
