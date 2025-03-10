// globarl imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";

// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { store, setUpStore } from "./src/store.js";
import getElement from "./src/utils/getElement.js";
import display from "./src/displayProducts.js";

const init = async () => {
  const products = await fetchProducts();
  setUpStore(products);
  const featuredProducts = () =>
    store.toSorted(() => Math.random() - 0.5).slice(0, 3);
  const featured = featuredProducts();
  display(featured, getElement(".featured-center"));
};

window.addEventListener("DOMContentLoaded", init);
