const notas = [7.7, 4.1, 8.5, 9.2, 3.6, 7.7, 6.6]


// sem callback
const notasBaixas1 = []
for(let i=0; i< notas.length; i++){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com callback

const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)