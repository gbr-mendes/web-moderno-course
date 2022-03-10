function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDigitos){
    return numeros.filter(numero => numero.toString().length === quantidadeDigitos)
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))
