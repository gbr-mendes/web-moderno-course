// recurso es2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        lodradouro: "Rua 1",
        numero: 10
    }

}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa

console.log(n, i)

const {sobrenome, bemHumorada = false} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco:{lodradouro, numero, cep=null}} = pessoa
console.log(lodradouro, numero, cep)