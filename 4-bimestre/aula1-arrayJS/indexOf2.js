var nomes2 = ["Gabrielly", "Maria", "Sarah", "Ana", "Carlos"]

var nomeProcurado = "Maria"
var indice = nomes2.indexOf(nomeProcurado)

if (indice !== -1) {
    console.log("O nome '" + nomeProcurado + "' foi encontrado no índice " + indice + ".")
} else {
    console.log("O nome '" + nomeProcurado + "' não foi encontrado no vetor.")
}

/*
var nomes2 = ["Gabrielly", "Maria", "Sarah", "Ana", "Carlos"]

var nomeProcurado = "Erick"
var indice = nomes2.indexOf(nomeProcurado)

if (indice !== -1) {
    console.log("O nome '" + nomeProcurado + "' foi encontrado no índice " + indice + ".")
} else {
    console.log("O nome '" + nomeProcurado + "' não foi encontrado no vetor.")
}
*/