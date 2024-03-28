const botao = document.getElementById('botao');
const contador = document.getElementById('contador');

// Variável para armazenar o número de cliques
let cliques = 0;

// Define o evento de clique do botão
botao.addEventListener('click', function() {
    
    cliques++;

    contador.textContent = cliques + (cliques === 1 ? ' clique' : ' cliques');
})