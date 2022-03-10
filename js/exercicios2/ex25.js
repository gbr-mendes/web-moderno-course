function compareArrays(a1, a2) {
    return a1.length === a2.length && a1.every((value, index) => value === a2[index]);
}

/* const buscarPalavrasSemelhantes = (query, array) => {
    const chars = query.split('')
    const arrayString = array.map(string => string.split(''))
    return arrayString.filter(e => {
        return compareArrays(e.slice(0, chars.length), chars)
    }).map(stringSplited => stringSplited.toString().replace(/,/g, ""))
} */

const buscarPalavrasSemelhantes = (query, palavras) =>{
    return palavras.filter(palavra => palavra.includes(query))
}
console.log(buscarPalavrasSemelhantes("m", ["programação", "mobile", "profissional"]))
