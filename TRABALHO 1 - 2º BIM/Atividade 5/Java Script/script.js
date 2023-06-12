let inputReais = document.querySelector("#inputReais");
let inputVlrGasolina = document.querySelector("#inputVlrGasolina");
let h3ResultadoAtv5 = document.querySelector("#h3ResultadoAtv5");
let btExibirAtv5 = document.querySelector("#btExibirAtv5");

function exibirLitros(){
    let reais = Number(inputReais.value);
    let gasolina = Number(inputVlrGasolina.value);

    h3ResultadoAtv5.innerHTML = "Voc&ecirc p&ocircs " + (reais / gasolina).toFixed(2) + " litros de gasolina.";
}

btExibirAtv5.onclick = function(){
    exibirLitros();
}