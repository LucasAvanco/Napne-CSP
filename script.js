let button = document.querySelector('.header-abrir');

button.addEventListener('click', function (){ 
  document.querySelector('.header-mobile').classList.add('menu-active');
});

let fecharMenu = document.querySelector('.header-fechar');

fecharMenu.addEventListener('click', function (){ 
  document.querySelector('.header-mobile').classList.remove('menu-active');
});

