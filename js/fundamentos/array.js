const valores = [7.7, 8.9, 5.2]
console.log(valores[0], valores[2])
valores[15] = 20.65
console.log(valores[15])
console.log(valores)
console.log(valores.length)
valores.push(false, null, 'teste')
console.log(valores)
console.log(valores.pop())
console.log(valores)
delete valores[15]
console.log(typeof valores)