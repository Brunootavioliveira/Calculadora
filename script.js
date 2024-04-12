var resultado = document.getElementById('resultado')

function soma(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var soma = n1 + n2
    resultado.innerHTML = soma
}

function subtracao(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var subtracao = n1 - n2
    resultado.innerHTML = subtracao
}

function multiplicacao(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var multiplicacao = n1 * n2
    resultado.innerHTML = multiplicacao
}

function divisao(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var divisao = n1 / n2
    resultado.innerHTML = divisao
}