function filtrarNumeros(array){
    return array.filter(e=>typeof e === 'number')
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))