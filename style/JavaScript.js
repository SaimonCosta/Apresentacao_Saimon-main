document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('menu-button');
    var navList = document.getElementById('nav-list');
  
    button.addEventListener('click', function() {
      // Alternar a visibilidade da lista de navegação ao clicar no botão
      navList.classList.toggle('show');
    });
  });