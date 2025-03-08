import get from "./utils/getElement.js";

const openCart = get(".toggle-container");
const cartContainer = get(".cart-overlide");
const closeCart = get(".cart-close");

openCart.addEventListener("click", () => cartContainer.classList.add("show"));

closeCart.addEventListener("click", () =>
  cartContainer.classList.remove("show")
);
