document.getElementById("btnCalcular").addEventListener("click", function(event) {
    event.preventDefault();
    
    var valor = parseInt(document.getElementById("inputValor").value);
    
    var notas100 = Math.floor(valor / 100);
    valor = valor % 100;
    
    var notas50 = Math.floor(valor / 50);
    valor = valor % 50;
    
    var notas10 = Math.floor(valor / 10);
    valor = valor % 10;
    
    var notas5 = Math.floor(valor / 5);
    valor = valor % 5;
    
    var notas1 = valor;
    
    var resultado = "Valor lido: R$" + document.getElementById("inputValor").value + "<br>";
    resultado += "Notas de R$100: " + notas100 + "<br>";
    resultado += "Notas de R$50: " + notas50 + "<br>";
    resultado += "Notas de R$10: " + notas10 + "<br>";
    resultado += "Notas de R$5: " + notas5 + "<br>";
    resultado += "Notas de R$1: " + notas1;
    
    document.getElementById("resultado").innerHTML = resultado;
  });