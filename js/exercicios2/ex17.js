const somarNumeros = array => array.reduce((soma, atual) => soma + atual)

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))