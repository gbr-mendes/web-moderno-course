const segundoMaior = array =>{
    const maiorNumero = array.reduce((maior, numero) => numero > maior ? numero : maior)
    const indexMaior = array.indexOf(maiorNumero)
    array.splice(indexMaior, 1)
    const segundoMaior = array.reduce((segundo, numero) => numero > segundo ? numero : segundo)
    return segundoMaior
}
console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))