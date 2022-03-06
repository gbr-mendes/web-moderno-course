const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
console.log(concatenacao)

const template = `Olá ${nome}. Como você está?`

const up = text => text.toUpperCase()
console.log(up(`Olá ${nome}`))