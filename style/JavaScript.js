document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('menu-button');
    var navList = document.getElementById('nav-list');
  
    button.addEventListener('click', function() {
    
      navList.classList.toggle('show');
    
      if (navList.classList.contains('show')) {
        button.textContent = 'X';
        button.style.animation = 'changeIcon 0.5s ease forwards';
      } else {
        button.textContent = 'Menu';
      }
    });
  });