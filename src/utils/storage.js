const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

const getStorageItem = (item) => {
  let storegeItem = localStorage.getItem(item);
  if (storegeItem) {
    storegeItem = JSON.parse(localStorage.getItem(item));
  } else {
    storegeItem = [];
  }
  return storegeItem;
};

export { setStorageItem, getStorageItem };
