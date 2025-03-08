// Verifica o plano do usuário ao carregar a página
const userPlan = localStorage.getItem('userPlan');
if (!userPlan) {
    window.location.href = "public/login.html"; // Redireciona para o login se não estiver autenticado
}

// Atualiza as opções com base no plano do usuário
if (userPlan === "completo") {
    document.getElementById('megasena').classList.remove('megasena');
    document.getElementById('quina').classList.remove('quina');
    document.getElementById('lotomania').classList.remove('lotomania');
} else if (userPlan === "lotofacil") {
    document.getElementById('megasena').classList.add('megasena');
    document.getElementById('quina').classList.add('quina');
    document.getElementById('lotomania').classList.add('lotomania');
}

// Restante do código da tela de apostas...