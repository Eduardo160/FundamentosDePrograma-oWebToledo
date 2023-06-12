let inputCVL = document.querySelector("#inputCVL");
let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");


function verificarCalculo(){
    let vlr1 = Number(inputCVL.value)

    h3Resultado.innerHTML = "S&atildeo necess&aacuterias " + vlr1 * 4 + " ferraduras.";
}

btVerificar.onclick = function(){
    verificarCalculo();
}