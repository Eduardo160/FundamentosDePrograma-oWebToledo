let btExibir = document.querySelector("#btExibir");
let h3Result = document.querySelector("#h3Result");

function calcularDias(){
  let dia = parseInt(document.getElementById('dia').value);
  let mes = parseInt(document.getElementById('mes').value);
  
  let diasPassados = (mes - 1) * 30 + dia;
  
  h3Result.innerHTML = "Dias passados desde o início do ano: " + diasPassados;
}

btExibir.onclick =  function(){
    calcularDias();
}