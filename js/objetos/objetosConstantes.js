// pessoa -> 123 -> {... Dadds}
const pessoa = {nome: 'João'}
pessoa.nome = 'Maria'
console.log(pessoa)
// pessoa = 'Teste'
Object.freeze(pessoa) // congela alterações no objeto
pessoa.nome = 'Teste freeze'
console.log(pessoa.nome)
