let inputComprimento = document.querySelector("#inputComprimento");
let inputLargura = document.querySelector("#inputLargura");
let h3Resultado = document.querySelector("#h3Resultado");
let btExibir = document.querySelector("#btExibir");

function areaTerreno(){
    let valor1 = Number(inputComprimento.value);
    let valor2 = Number(inputLargura.value);

    h3Resultado.innerHTML = "A &aacuterea &eacute " + valor1 * valor2 + "m&sup2.";
}

btExibir.onclick = function(){
    areaTerreno();
}