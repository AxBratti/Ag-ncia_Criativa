// 1. Mapeia os elementos do HTML
const btnMenu = document.getElementById('btn-menu');
const menuJanela = document.getElementById('menu-janela');
const btnFechar = document.getElementById('btn-fechar');

// 2. Função para ABRIR: Adiciona a classe de modificador BEM
btnMenu.addEventListener('click', () => {
    menuJanela.classList.add('menu--aberto');
});

// 3. Função para FECHAR: Remove a classe de modificador BEM
btnFechar.addEventListener('click', () => {
    menuJanela.classList.remove('menu--aberto');
});