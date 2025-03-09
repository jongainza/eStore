import { allProductsUrl } from "./utils/api.js";

const fetchProducts = async () => {
  try {
    const response = await fetch(allProductsUrl);

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`error fetching products with error`);
  }
};

export default fetchProducts;
