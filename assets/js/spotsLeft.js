const vagas = document.getElementById('vagas-restantes');
let timer = 11000;

var vagasRestantes = 1000;

setTimeout(() => {
  var downloadTimer = setInterval(function(){
    if(vagasRestantes <= 3){
      clearInterval(downloadTimer);
      document.getElementById("vagas-restantes").innerHTML = vagasRestantes + " vagas disponíveis de 1000.";
    } else {
      document.getElementById("vagas-restantes").innerHTML = vagasRestantes + " vagas disponíveis de 1000.";
    }
    vagasRestantes -= 1;
  }, timer);
}, 1105000);
