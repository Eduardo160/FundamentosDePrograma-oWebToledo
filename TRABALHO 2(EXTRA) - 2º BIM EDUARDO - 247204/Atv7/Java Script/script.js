document.getElementById("btnCalcular").addEventListener("click", function(event) {
    event.preventDefault();
    
    var codigo = document.getElementById("inputCodigo").value;
    var quantidade = parseInt(document.getElementById("inputQuantidade").value);
    
    var precos = {
      "1": 11.00,
      "2": 8.50,
      "3": 8.00,
      "4": 9.00,
      "5": 10.00,
      "6": 4.50
    };
    
    if (codigo in precos) {
      var preco = precos[codigo];
      var valorTotal = preco * quantidade;
      
      document.getElementById("resultado").innerHTML = "Valor a ser pago: R$" + valorTotal.toFixed(2);
    } else {
      document.getElementById("resultado").innerHTML = "Código de item inválido.";
    }
  });