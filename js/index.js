//exibe a mensagem na pagina de index
document.addEventListener('DOMContentLoaded', () => {
    const nomeCliente = localStorage.getItem('clienteLogado');
    const mensagem = document.getElementById('mensagemCliente');

    if (nomeCliente) {
        mensagem.textContent = `Olá, ${nomeCliente}!`;
    } else {
        window.location.href = 'Cliente_Login.html'; // redireciona se não logado
    }
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("body"); 

  container.addEventListener("click", (e) => {
    if (e.target.closest(".add-to-cart")) {
      const btn = e.target.closest(".add-to-cart");
      const name = btn.getAttribute("data-name");
      const price = parseFloat(btn.getAttribute("data-price"));
      const image = btn.getAttribute("data-image");

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItem = cart.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, image, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${name} foi adicionado à sacola!`);
    }
  });
});

