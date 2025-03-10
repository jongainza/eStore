const display = (products, element) => {
  element.innerHTML = products
    .map((product) => {
      const { id, image, title, price } = product;
      return `
  <article class="product">
          <div class="product-container">
            <img
              src=${image}
              alt="${title}"
              class="product-img img"
            />
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id=${id}>
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${title}</p>
            <h2 class="product-price">$${price}</h2>
          </footer>
        </article>
  `;
    })
    .join("");
};

export default display;
