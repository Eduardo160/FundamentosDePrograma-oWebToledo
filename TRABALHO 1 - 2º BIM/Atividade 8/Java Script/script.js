let inputPeq = document.querySelector("#inputPeq");
let inputMed = document.querySelector("#inputMed");
let inputGrand = document.querySelector("#inputGrand");
let btVerificar2 = document.querySelector("#btVerificar2");  
let h3Resultado2 = document.querySelector("#h3Resultado2");

function verificarCalculoTotal(){
    let peq = Number  (inputPeq.value);
    let med = Number (inputMed.value);
    let grand = Number (inputGrand.value);

    h3Resultado2.innerHTML = "As " + peq + " camisetas pequenas ficam: " + " R$" + (peq * 10) + "." + "<br>" +
    "As " + med + " camisetas m&eacutedias ficam: " + " R$" + (med * 12) + "." + "<br>" +
    "As " + grand + " camisetas grandes ficam: " + " R$" + (grand * 15) + "." + "<br>" +
    "O" + " Total fica: " + "R$" + (peq * 10 + med * 12 + grand * 15) + "."; 
}

btVerificar2.onclick = function(){
    verificarCalculoTotal();
}