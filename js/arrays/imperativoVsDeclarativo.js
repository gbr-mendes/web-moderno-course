const alunos = [
    {nome: 'João', nota:7.3},
    {nome: 'Marial', nota:9.2},
    {nome: 'Pedro', nota:9.8},
    {nome: 'Ana', nota:8.7},
]


//imperativo
let resultado1 = 0
for(let i=0; i < alunos.length; i++){
    resultado1 += alunos[i].nota
}
console.log(resultado1 / alunos.length)

// declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const resultado2 = alunos.map(getNota).reduce(soma)
console.log(resultado2 / alunos.length)
