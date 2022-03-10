function Aluno(nome='Anônimo', media=0){
    this.nome = nome
    this.media = media
}

const students = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}

const calcMedia = notas => notas.reduce((soma, nota) => soma + nota) / notas.length
const getAlunoENotas = obj => Object.entries(obj)

const getMelhorAluno = students => getAlunoENotas(students).reduce((melhorAluno,student) =>{
    const media = calcMedia(student[1])
    if(media > melhorAluno.media) {
        return new Aluno(student[0], media)
    }else{
        return melhorAluno
    }
}, new Aluno())

console.log(getMelhorAluno(students))