function calcular() {
    var inputNmr = document.getElementById('inputNmr').value;
    var centena = Math.floor(inputNmr / 100);
    var dezena = Math.floor((inputNmr % 100) / 10);
    var unidade = inputNmr % 10;

    var resultado = "CENTENA = " + centena + "<br>" + "DEZENA = " + dezena + "<br>" + "UNIDADE = " + unidade + ".";
    document.getElementById('h3ResultadoAtv12').innerHTML = resultado;
}