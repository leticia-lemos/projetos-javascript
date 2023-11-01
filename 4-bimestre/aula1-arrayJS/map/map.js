var numeros = [1, 2, 3, 4, 5]

var numerosDobrados = numeros.map(function(numero) {
    return numero * 2
})

var resultadoElemento = document.querySelector('#resultado')
resultadoElemento.innerHTML = numerosDobrados