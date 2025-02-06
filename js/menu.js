// Sample product data
const products = [
  {
    id: 1,
    name: "Fresh Potatoes",
    price: 150,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
  },
  {
    id: 2,
    name: "Organic Carrots",
    price: 120,
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979",
  },
  {
    id: 3,
    name: "Fresh watermelon",
    price: 350,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/fresh-ripe-watermelon-slices-on-wooden-table-royalty-free-image-1684966820.jpg?crop=0.6673xw:1xh;center,top&resize=640:*",
  },
  {
    id: 4,
    name: "fresh Kales",
    price: 50,
    image: "https://specialtyproduce.com/sppics/7631.png",
  },
  {
    id: 5,
    name: "Organic spinach",
    price: 70,
    image:
      "https://greenspoon.co.ke/wp-content/uploads/2022/02/Greenspoon-Spinach-Mlango-Farm-1.jpg",
  },
  {
    id: 6,
    name: "Cabbage",
    price: 40,
    image:
      "https://safiorganics.co.ke/wp-content/uploads/2022/07/GettyImages-523635727-scaled-1.webp",
  },
  {
    id: 7,
    name: "Eggs",
    price: 220,
    image:
      "https://d27p2a3djqwgnt.cloudfront.net/wp-content/uploads/2021/06/22103517/eggs-3216878_1280-e1624372615573.jpg",
  },
  {
    id: 8,
    name: "Onions",
    price: 100,
    image: "https://m.media-amazon.com/images/I/51DJ-9xkuQL.jpg",
  },
  {
    id: 9,
    name: "Tomatoes",
    price: 70,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5WBizPvflD-zJWENuLSWHKZrEbKkJscblg&s",
  },
  {
    id: 10,
    name: "Bell Pepper",
    price: 120,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/640px-Green-Yellow-Red-Pepper-2009.jpg",
  },
  {
    id: 11,
    name: "Red Pepper",
    price: 60,
    image:
      "https://www.foodrepublic.com/img/gallery/how-to-actually-cut-the-spice-out-of-a-pepper-hint-its-not-all-in-the-seeds/l-intro-1688680916.jpg",
  },

  // Add more products here
];

function displayProducts() {
  const grid = document.querySelector(".products-grid");
  grid.innerHTML = "";

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
