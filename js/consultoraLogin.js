// aguarda o envio do formulário e redireciona para index.html se os campos obrigatórios estiverem preenchidos, mesma coisa do outro js
document.getElementById("formLoginConsultor").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = "index_consultor.html"; 
});

//pega o nome do consultor e guarda
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formLoginConsultor');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nomeConsultor').value;
        const senha = form.senhaConsultor.value;

        // simulação simples do login
        if (nome && senha) {
            localStorage.setItem('consultorLogado', nome); // salva o nome
            window.location.href = '../pages/index_consultor.html';       // redireciona
        } else {
            alert('Preencha todos os campos!');
        }
    });
});