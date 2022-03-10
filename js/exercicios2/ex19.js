const calcularMedia = valores => valores.reduce((soma, valor) => soma + valor) / valores.length
console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))