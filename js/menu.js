const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 150,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
  },
  {
    id: 2,
    name: "Organic Carrots",
    price: 120,
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979",
  },
  // Add more products here if needed
];

function displayProducts() {
  const grid = document.querySelector(".products-grid");
  grid.innerHTML = ""; // Clear any existing products

  // Loop through products and create product cards
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">KSH ${product.price}/kg</p>
      <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">
        Add to Cart
      </button>
    `;
    grid.appendChild(card);
  });
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  updateCartCount();

  // Handle Add to Cart button click
  document.querySelector(".products-grid").addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const { id, name, price } = e.target.dataset;
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({ id: parseInt(id), name, price: parseInt(price) });
      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartCount();
      alert(`${name} added to cart!`);
    }
  });
});
