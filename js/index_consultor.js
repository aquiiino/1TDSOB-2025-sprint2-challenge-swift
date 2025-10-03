//exibe a mensagem na pagina de index_consultor
document.addEventListener('DOMContentLoaded', () => {
    const nomeConsultor = localStorage.getItem('consultorLogado');
    const mensagem = document.getElementById('mensagemConsultor');

    if (nomeConsultor) {
        mensagem.textContent = `Olá, ${nomeConsultor}!`;
    } else {
        window.location.href = 'index_consultor.html'; // redireciona se não logado
    }
});