// script.js
'use strict'
const botao = document.querySelector('.btn');

botao.addEventListener('click', () => {
    alert('Você clicou no botão!');
});

const btn = document.querySelector('.btn');
const modal = document.getElementById('modal');
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function()   
 {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";   

  }
}

