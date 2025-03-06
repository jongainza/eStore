const getElement = (attribute) => {
  const element = document.querySelector(attribute);
  if (element) return element;
  throw new Error(`problem with the element selected ${attribute}`);
};

export default getElement;
