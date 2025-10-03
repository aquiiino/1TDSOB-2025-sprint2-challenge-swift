document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.querySelector(".cart-items");
  const subtotalPrice = document.querySelector(".subtotal-value .price");
  const subtotalPoints = document.querySelector(".subtotal-value .points");
  const totalPrice = document.querySelector(".total-value .price");
  const totalPoints = document.querySelector(".total-value .points");
  const usePointsCheckbox = document.getElementById("usePoints");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let subtotal = 0;
    let subtotalPts = 0;

    cart.forEach((item, index) => {
      subtotal += item.price * item.quantity;
      subtotalPts += item.points * item.quantity;

      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <h2>${item.name}</h2>
          <p>${item.quantity}x</p>
          <span class="price">R$ ${(item.price * item.quantity).toFixed(2)}</span>
          <span class="points">ou ${item.points * item.quantity} pontos</span>
        </div>
        <div class="item-actions">
          <input type="number" value="${item.quantity}" min="1" data-index="${index}">
          <button class="remove-btn" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;
      cartItemsContainer.appendChild(div);
    });

    subtotalPrice.textContent = `R$ ${subtotal.toFixed(2)}`;
    subtotalPoints.textContent = `ou ${subtotalPts} pontos`;
    const frete = 10;
    totalPrice.textContent = `R$ ${(subtotal + frete).toFixed(2)}`;
    totalPoints.textContent = `ou ${subtotalPts} pontos`;

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  cartItemsContainer.addEventListener("change", e => {
    if (e.target.tagName === "INPUT") {
      const index = e.target.dataset.index;
      cart[index].quantity = parseInt(e.target.value);
      renderCart();
    }
  });

  cartItemsContainer.addEventListener("click", e => {
    if (e.target.closest(".remove-btn")) {
      const index = e.target.closest(".remove-btn").dataset.index;
      cart.splice(index, 1);
      renderCart();
    }
  });

  usePointsCheckbox.addEventListener("change", () => {
    if (usePointsCheckbox.checked) alert("Você escolheu usar seus pontos!");
    else alert("Você não vai usar pontos.");
  });

  renderCart();
});



