function tocaSom(seletorAudio) {
  const elemento  = document.querySelector(seletorAudio);

  if(elemento === null){
    alert('elemento nao encontrado');
  }

  if(elemento != null){
    elemento.play();
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const intrumento = tecla.classList[1];
  const idAudio = `#som_${intrumento}`; //template String

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  tecla.onkeydown = function (evento) {
    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

/*

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();
}
*/

/*
document.querySelector('.tecla_pom').onclick = tocaSomPom;

document.querySelector('.tecla_clap').onclick = tocaSomClap;

document.querySelector('.tecla_tim').onclick = tocaSomTim;
*/

/*
let botao = document.querySelector('button');
botao.addEventListener('click', function(){
    alert('Fui clicado');
})
*/
