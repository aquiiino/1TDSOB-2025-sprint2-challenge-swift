// aguarda o envio do formulário e redireciona para index.html se os campos obrigatórios estiverem preenchidos, mesma coisa do outro js
document.getElementById("formLoginConsultor").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = "index_consultor.html"; 
});
