const notas = [6.7, 9.8, 8.1, 7.7]

for(let i in notas){
    console.log(`Nota com indice ${i} = ${notas[i]}`)
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
}

for(let attr in pessoa){
    console.log(`${attr}: ${pessoa[attr]}`)
}