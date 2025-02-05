function displaycart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelector("cart-items");
  if (cart.length === 0) {
    cart.innerhtml = "<p>Your cart is empty</p>";
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  cartItems.innerHTML = `
    <h2>Your Cart</h2>
    ${cart
      .map(
        (item) => `
      <div class="cart-item">
        <p>${item.name} - KSH ${item.price}</p>
      </div>
    `
      )
      .join("")}
    <div class="cart-total">
      <h3>Total: KSH ${total}</h3>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  displayCart();

  const form = document.getElementById("delivery-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    alert("Order placed successfully! We will contact you soon.");
    localStorage.removeItem("cart");
    form.reset();
    displayCart();
  });
});
