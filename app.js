// globarl imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";

// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { store, setUpStore } from "./src/store.js";

const init = async () => {
  const products = await fetchProducts();
  setUpStore(products);
};

window.addEventListener("DOMContentLoaded", init);
