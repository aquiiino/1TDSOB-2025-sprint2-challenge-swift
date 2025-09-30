//exibi a mensagem na pagina de index
document.addEventListener('DOMContentLoaded', () => {
    const nomeCliente = localStorage.getItem('clienteLogado');
    const mensagem = document.getElementById('mensagemCliente');

    if (nomeCliente) {
        mensagem.textContent = `Olá, ${nomeCliente}!`;
    } else {
        window.location.href = 'Cliente_Login.html'; // redireciona se não logado
    }
});


