// aguarda o envio do formulário e redireciona para index.html se os campos obrigatórios estiverem preenchidos
document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = "index.html"; 
});