Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let i = 0; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    {nome: 'João', nota:7.3, bolsita: false},
    {nome: 'Marial', nota:9.2, bolsita: false},
    {nome: 'Pedro', nota:9.8, bolsita: false},
    {nome: 'Ana', nota:8.7, bolsita: false},
]

// todos os alunos são bolsistas?
let resultado = alunos.map(aluno => aluno.bolsita).reduce2((acumulador, atual)=>{
    return acumulador && atual
})
console.log(resultado)

//Algum aluno é bolsista?

resultado = alunos.map(aluno => aluno.bolsita).reduce2((acumulador, atual)=>acumulador || atual)

console.log(resultado)
