document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('menu-button');
    var navList = document.getElementById('nav-list');
  
    button.addEventListener('click', function() {
      // Alternar a visibilidade da lista de navegação ao clicar no botão
      navList.classList.toggle('show');
      // Alternar o ícone do botão entre "Menu" e "X" com animação
      if (navList.classList.contains('show')) {
        button.textContent = 'X';
        button.style.animation = 'changeIcon 0.5s ease forwards';
      } else {
        button.textContent = 'Menu';
        button.style.animation = 'none'; // Remover a animação quando o texto voltar para "Menu"
      }
    });
  });