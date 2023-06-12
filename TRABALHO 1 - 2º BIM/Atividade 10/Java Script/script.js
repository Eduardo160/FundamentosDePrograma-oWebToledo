function calcular() {
    var inputNmrDias = document.getElementById('inputNmrDias').value;
    var anos = Math.floor(inputNmrDias / 365);
    var meses = Math.floor((inputNmrDias % 365) / 30);
    var dias = (inputNmrDias % 365) % 30;

    var resultado = "&Aacute f&aacutebrica est&aacute sem acidentes a "
        + anos + " anos, " + meses + " meses, " + dias + " dias.";
    document.getElementById('h3ResultadoAtv10').innerHTML = resultado;
}