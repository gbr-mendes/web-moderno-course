const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['um', 'dois', 'tres', 'quatro']
const vetorDouble = [1.0, 2.0, 3.0, 4.0]

console.log(vetorInteiro.concat(vetorString).concat(vetorDouble))
console.log(vetorString.concat(vetorDouble).concat(vetorInteiro))