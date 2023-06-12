let inputPeso = document.querySelector("#inputPeso");
let h3ResultadoAtv6 = document.querySelector("#h3ResultadoAtv6");
let btExibirAtv6 = document.querySelector("#btExibirAtv6");

function valorPrato(){
    let pesokg = Number(inputPeso.value);
    let prato = 0.10;
    
    h3ResultadoAtv6.innerHTML = "A refei&ccedil&atildeo ficou " +"R$"+ ((pesokg - prato) * 12).toFixed(2) + " reais.";
}

btExibirAtv6.onclick = function(){
    valorPrato();
}