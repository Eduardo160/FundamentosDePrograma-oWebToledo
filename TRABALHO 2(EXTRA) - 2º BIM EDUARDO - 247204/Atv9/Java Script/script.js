document.getElementById('formPagamento').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var preco = parseFloat(document.getElementById('inputPreco').value);
    var condicao = document.getElementById('inputCondicao').value;
    var resultadoElement = document.getElementById('resultado');
    
    var valorFinal = 0;
    
    switch (condicao) {
      case 'a':
        valorFinal = preco * 0.9; // 10% de desconto à vista em dinheiro ou cheque
        break;
      case 'b':
        valorFinal = preco * 0.85; // 15% de desconto à vista no cartão de crédito
        break;
      case 'c':
        valorFinal = preco; // Em duas vezes sem juros
        break;
      case 'd':
        valorFinal = preco * 1.1; // Em duas vezes com 10% de juros
        break;
      default:
        resultadoElement.innerHTML = 'Condição de pagamento inválida.';
        return;
    }
    
    resultadoElement.innerHTML = 'Valor a ser pago: R$ ' + valorFinal.toFixed(2);
  });