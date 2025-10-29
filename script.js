let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to your cart!`);
}

function loadCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
    cartContainer.appendChild(div);
    total += item.price;
  });

  totalElement.textContent = total.toFixed(2);
}

function submitOrder(event) {
  event.preventDefault();
  alert("🎉 Order placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

window.onload = loadCart;
