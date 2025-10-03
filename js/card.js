document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.querySelector(".cart-items");
  const summarySubtotal = document.querySelector(".summary-line span:nth-child(2)");
  const summaryTotal = document.querySelector(".summary-line.total span:nth-child(2)");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartItemsContainer.innerHTML = "";

    let subtotal = 0;
    let subtotalPoints = 0; 

    cart.forEach((item, index) => {
      subtotal += item.price * item.quantity;
      subtotalPoints += item.points * item.quantity; 

      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <h2>${item.name}</h2>
          <p>${item.quantity}x</p>
          <span class="price">R$ ${(item.price * item.quantity).toFixed(2)} 
            ou ${item.points * item.quantity} pontos</span> <!-- 👈 mostrando os dois -->
        </div>
        <div class="item-actions">
          <input type="number" value="${item.quantity}" min="1" data-index="${index}">
          <button class="remove-btn" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;
      cartItemsContainer.appendChild(div);
    });

    summarySubtotal.textContent = `R$ ${subtotal.toFixed(2)} ou ${subtotalPoints} pontos`; // 👈 subtotal

    const frete = 10.0;
    summaryTotal.textContent = `R$ ${(subtotal + frete).toFixed(2)} ou ${subtotalPoints} pontos`; // 👈 total

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  cartItemsContainer.addEventListener("change", (e) => {
    if (e.target.tagName === "INPUT") {
      const index = e.target.dataset.index;
      cart[index].quantity = parseInt(e.target.value);
      renderCart();
    }
  });

  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.closest(".remove-btn")) {
      const index = e.target.closest(".remove-btn").dataset.index;
      cart.splice(index, 1);
      renderCart();
    }
  });

  renderCart();
});

