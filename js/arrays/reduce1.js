const alunos = [
    {nome: 'João', nota:7.3, bolsita: false},
    {nome: 'Marial', nota:9.2, bolsita: true},
    {nome: 'Pedro', nota:9.8, bolsita: false},
    {nome: 'Ana', nota:8.7, bolsita: false},
]

const resultado = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)