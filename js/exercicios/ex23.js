(function(alunoCode, nota1, nota2, nota3){
    let largeNote = 0
    let notasBaixas = []
    let sum = 0
    if(nota1 > nota2 && nota1 > nota3){
        largeNote = nota1
        notasBaixas.push(nota2)
        notasBaixas.push(nota3)
    }else if(nota2 > nota1 && nota2 > nota3){
        largeNote = nota2
        notasBaixas.push(nota1)
        notasBaixas.push(nota3)
    }else{
        largeNote = nota3
        notasBaixas.push(nota1)
        notasBaixas.push(nota2)
    }
    for(i in notasBaixas){
        sum += notasBaixas[i] * 3
    }
    sum+=largeNote * 4
    media = sum / 10

    console.log(`Aluno ${alunoCode}`)
    media >= 5 ? console.log('APROVADO') : console.log('REPROVADO')
})(230, 5, 6, 7)