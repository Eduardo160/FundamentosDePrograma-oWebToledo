// script.js
function calcularDivisao() {
    var total = parseFloat(document.getElementById("total").value);
    
  var valorPorPessoa = Math.floor(total / 3);
    var resto = total % 3;
    
  var carlos = valorPorPessoa;
    
  var andre = valorPorPessoa;
    var felipe = valorPorPessoa + resto;
    

  document.getElementById("result").innerHTML = "Carlos vai pagar: R$" + carlos.toFixed(2) + "<br>" + 
  "Andr&eacute vai pagar: R$" + andre.toFixed(2) + "<br>" + 
  "Felipe vai pagar: R$" + felipe.toFixed(2);
  } 

