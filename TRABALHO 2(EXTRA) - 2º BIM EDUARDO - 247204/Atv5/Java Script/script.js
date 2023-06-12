document.getElementById("btnCalcular").addEventListener("click", function(event) {
    event.preventDefault();
    
    var salarioAtual = parseFloat(document.getElementById("inputSalario").value);
    var cargo = document.getElementById("inputCargo").value;
    var novoSalario = 0;
    var aumento = 0;
    
    switch (cargo) {
      case "101":
        aumento = 0.1;
        break;
      case "102":
        aumento = 0.2;
        break;
      case "103":
        aumento = 0.3;
        break;
      default:
        aumento = 0.4;
        break;
    }
    
    novoSalario = salarioAtual + (salarioAtual * aumento);
    var diferenca = novoSalario - salarioAtual;
    
    var resultado = "Salário antigo: R$" + salarioAtual.toFixed(2) + "<br>";
    resultado += "Novo salário: R$" + novoSalario.toFixed(2) + "<br>";
    resultado += "Diferença: R$" + diferenca.toFixed(2);
    
    document.getElementById("resultado").innerHTML = resultado;
  });