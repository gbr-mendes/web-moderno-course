const removerVogais = (string) =>{
    const vogais = ['a', 'e', 'i', 'o', 'u']
    vogais.forEach(vogal => string = string.replace(vogal, ""))
    return string
}
console.log(removerVogais("Cod3r"))