let inputRaio = document.querySelector("#inputRaio");
let h3ResultadoAtv13 = document.querySelector("#h3ResultadoAtv13");
let btExibirAtv13 = document.querySelector("#btExibirAtv13"); 

function calcularRaio1(){
    let raio = Number(inputRaio.value);

    h3ResultadoAtv13.innerHTML = "&Aacute &aacuterea da sua pizza &eacute " + (3.14 * (raio * raio)) + " cm&sup2.";
}

btExibirAtv13.onclick = function(){
    calcularRaio1();
}