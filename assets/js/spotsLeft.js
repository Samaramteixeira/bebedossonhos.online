const vagas = document.getElementById('vagas-restantes');
let timer = 11000;

var vagasRestantes = 18;

setTimeout(() => {
  var downloadTimer = setInterval(function(){
    if(vagasRestantes <= 3){
      clearInterval(downloadTimer);
      document.getElementById("vagas-restantes").innerHTML = '<h3 class="text-danger timer">ATENÇÃO</h3><p><span class="text-danger">' + vagasRestantes +'</span> vagas disponíveis de 1000.</span>';
    } else {
      document.getElementById("vagas-restantes").innerHTML = '<h3 class="text-danger timer">ATENÇÃO</h3><p><span class="text-danger">' + vagasRestantes +'</span> vagas disponíveis de 1000.</span>';
    }
    vagasRestantes -= 1;
  }, timer);
}, 1105000);
