import { getStorageItem, setStorageItem } from "./utils/storage.js";

let store = getStorageItem("store");
const setUpStore = (products) => {
  store = products.map((product) => {
    const { category, description, id, image, price, rating, title } = product;
    return product;
  });
  setStorageItem("store", store);
};

const findProduct = () => {};
export { store, setUpStore, findProduct };
