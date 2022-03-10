const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro(remove ultimo elemento)
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos) //remove o primeiro elemento

pilotos.unshift('Hamilton') // Adiciona elemento ao inicio do array
console.log(pilotos)

// splice pode adicionar e remover elemento do array

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array (pega todos o elemento a partir do indice definido)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // ingnor o element com o indice final do range, no caso o 4
console.log(pilotos)

