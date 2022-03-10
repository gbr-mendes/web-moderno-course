const alunos = [
    {nome: 'João', nota:7.3, bolsita: false},
    {nome: 'Marial', nota:9.2, bolsita: false},
    {nome: 'Pedro', nota:9.8, bolsita: false},
    {nome: 'Ana', nota:8.7, bolsita: false},
]

// todos os alunos são bolsistas?
let resultado = alunos.map(aluno => aluno.bolsita).reduce((acumulador, atual)=>{
    return acumulador && atual
})
console.log(resultado)

//Algum aluno é bolsista?

resultado = alunos.map(aluno => aluno.bolsita).reduce((acumulador, atual)=>acumulador || atual)

console.log(resultado)