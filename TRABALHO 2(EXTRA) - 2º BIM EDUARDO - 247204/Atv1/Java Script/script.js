document.getElementById("btnOrdenar").addEventListener("click", function(event) {
  event.preventDefault();
  
  var valores = [];
  valores.push(parseInt(document.getElementById("input1").value));
  valores.push(parseInt(document.getElementById("input2").value));
  valores.push(parseInt(document.getElementById("input3").value));
  valores.push(parseInt(document.getElementById("input4").value));
  valores.push(parseInt(document.getElementById("input5").value));
  
  valores.sort(function(a, b) {
    return b - a;
  });
  
  document.getElementById("resultado").textContent = "Valores em ordem decrescente: " + valores.join(", ");
});