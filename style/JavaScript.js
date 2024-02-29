document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('menu-button');
    var navList = document.getElementById('nav-list');
  
    button.addEventListener('click', function() {

      navList.classList.toggle('show');
    });
  });