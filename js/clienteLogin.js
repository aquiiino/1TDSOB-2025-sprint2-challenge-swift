// aguarda o envio do formulário e redireciona para index.html se os campos obrigatórios estiverem preenchidos
document.getElementById("formLoginCliente").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = "index.html"; 
});

//pega o nome do cliente e guarda
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formLoginCliente');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nomeCliente').value;
        const senha = form.senhaCliente.value;

        // Simulação simples do login
        if (nome && senha) {
            localStorage.setItem('clienteLogado', nome); // salva o nome
            window.location.href = '../pages/index.html';       // redireciona
        } else {
            alert('Preencha todos os campos!');
        }
    });
});
