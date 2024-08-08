/* Abrir e fechar menu
---------------------------------*/

let button = document.querySelector('.header-abrir');

button.addEventListener('click', function (){ 
  document.querySelector('.header-mobile').classList.add('menu-active');
});

let fecharMenu = document.querySelector('.header-fechar');

fecharMenu.addEventListener('click', function (){ 
  document.querySelector('.header-mobile').classList.remove('menu-active');
});

/* Perguntas frequentes
---------------------------------*/
let perguntas_triggers = document.querySelectorAll('.perguntas-item');
console.log(perguntas_triggers);

perguntas_triggers.forEach(function(trigger) {
  trigger.addEventListener('click', function() {
    let content = this.querySelector('.perguntas-conteudo');
    
    content.classList.toggle('perguntas-active');
  });
});