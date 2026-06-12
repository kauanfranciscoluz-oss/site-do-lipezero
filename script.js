// Selecionando os elementos HTML do painel de resultados
const checkboxes = document.querySelectorAll('.pratica-sustentavel');
const barraProgresso = document.getElementById('barra-progresso');
const porcentagemTexto = document.getElementById('porcentagem-texto');
const feedbackMensagem = document.getElementById('feedback-mensagem');

// Função que calcula o nível de sustentabilidade
function calcularSustentabilidade() {
    let pontuacaoTotal = 0;

    // Passa por cada checkbox para ver se está marcada
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            // Soma o valor convertido em número (25 pontos cada)
            pontuacaoTotal += parseInt(checkbox.value);
        }
    });

    // Atualiza o visual da barra de progresso (CSS dinâmico)
    barraProgresso.style.width = pontuacaoTotal + '%';
    porcentagemTexto.innerText = pontuacaoTotal + '% Sustentável';

    // Altera a mensagem de feedback com base nos pontos
    if (pontuacaoTotal === 0) {
        feedbackMensagem.innerText = "Marque as opções para ver o diagnóstico do seu ecossistema.";
        barraProgresso.style.backgroundColor = '#2e7d32';
    } else if (pontuacaoTotal <= 25) {
        feedbackMensagem.innerText = "Início tímido! Adotar apenas uma prática ajuda, mas o ecossistema ainda precisa de equilíbrio.";
        barraProgresso.style.backgroundColor = '#e53935'; // Vermelho de alerta
    } else if (pontuacaoTotal <= 50) {
        feedbackMensagem.innerText = "Bom caminho! Sua propriedade já demonstra preocupação real com o solo ou a água.";
        barraProgresso.style.backgroundColor = '#fdd835'; // Amarelo de progresso
    } else if (pontuacaoTotal <= 75) {
        feedbackMensagem.innerText = "Ótimo nível! O equilíbrio ecológico está quase completo e a produtividade protegida.";
        barraProgresso.style.backgroundColor = '#43a047'; // Verde intermediário
    } else if (pontuacaoTotal === 100) {
        feedbackMensagem.innerText = "Excelente! Propriedade Modelo. Total equilíbrio entre produção eficiente e meio ambiente protegido! 🌱🌟";
        barraProgresso.style.backgroundColor = '#1b5e20'; // Verde escuro de sucesso
    }
}

// Adiciona o evento de monitoramento em todas as caixas de seleção
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', calcularSustentabilidade);
});
