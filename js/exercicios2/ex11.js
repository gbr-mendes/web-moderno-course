const receberPrimeiroEUltimoElemento = (array) =>{
    const newArray = []
    newArray.push(array[0])
    newArray.push(array[array.length - 1])
    return newArray
}

console.log(receberPrimeiroEUltimoElemento([7,14,"olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))