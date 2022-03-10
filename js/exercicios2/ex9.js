const repetir = (elemento, fator) =>{
    const array = []
    for(let i = 0; i < fator; i++){
        array.push(elemento)
    }
    return array
}
console.log(repetir("código", 2))