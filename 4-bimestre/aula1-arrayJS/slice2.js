// A melhor forma de se usar slice() é atribui-lo a uma nova variável

let mensagem = 'congratulations'
const abbrv = mensagem.slice(0, 7) + 's!'
console.log(abbrv) // retorna "congrats" (abreviação)