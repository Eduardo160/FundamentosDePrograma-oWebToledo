let inputSalario = document.querySelector("#inputSalario");
let h3ResultadoAtv11 = document.querySelector("#h3ResultadoAtv11");
let btExibirAtv11 = document.querySelector("#btExibirAtv11"); 

function novoSalario(){
    let salario = Number(inputSalario.value);
    
    //Calcular 15%, 8%
    let cotacao15Prc = salario + (salario * (15/100));
    let cotacao8Prc = cotacao15Prc - (cotacao15Prc * (8/100));

    h3ResultadoAtv11.innerHTML = "O seu antigo sal&aacuterio &eacute: R$" + salario + "." + "<br>" +
        " O seu novo sal&aacuterio &eacute: R$" + (cotacao15Prc).toFixed(2) + "." + "<br>" +
        "J&aacute com desconto do imposto, ele &eacute: R$" + (cotacao8Prc).toFixed(2) + ".";
}

btExibirAtv11.onclick = function(){
    novoSalario();
}