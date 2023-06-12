let inputNome = document.querySelector("#inputNome");
let inputIdade = document.querySelector("#inputIdade");
let h3ResultadoAtv4 = document.querySelector("#h3ResultadoAtv4");
let btExibirAtv4 = document.querySelector("#btExibirAtv4");

function exibirDias(){
    let nome = String(inputNome.value);
    let idade = Number(inputIdade.value);

    h3ResultadoAtv4.innerHTML = nome+"," + " voc&ecirc j&aacute viveu " + idade * 365 + " dias.";
}

btExibirAtv4.onclick = function(){
    exibirDias();
}