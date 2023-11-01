var numeros = [1, 2, 3, 4, 5]

var numerosPares = numeros.filter(function(numero){
    return numero % 2 === 0
})

resultadoPares = document.getElementById("resultado")
// ou
// resultadoPares = document.querySelector("#resultado")
resultadoPares.innerHTML = numerosPares