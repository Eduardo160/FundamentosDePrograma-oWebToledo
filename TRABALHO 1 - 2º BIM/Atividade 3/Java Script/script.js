let inputPaes = document.querySelector("#inputPaes");
let inputBroas = document.querySelector("#inputBroas");
let h3ResultadoAtv3 = document.querySelector("#h3ResultadoAtv3");
let btExibirAtv3 = document.querySelector("#btExibirAtv3");

function paesBroas(){
    let paes = Number(inputPaes.value);
    let broas = Number(inputBroas.value);
    let total = paes * 0.12 + broas * 1.50; 
    let cotacao10Prc = total + (total * (10/100)) 

    h3ResultadoAtv3.innerHTML = "O valor arrecadado hoje com a venda de p&atildees e broas, foi:" + " R$" + 
        (paes * 0.12 + broas * 1.50).toFixed(2) + "." + "<br>" + "Ent&atildeo, o valor que voc&ecirc deve guardar em sua conta poupança &eacute: " + "R$" +
        (cotacao10Prc - total).toFixed(2) +".";
}

btExibirAtv3.onclick = function(){
    paesBroas();
}