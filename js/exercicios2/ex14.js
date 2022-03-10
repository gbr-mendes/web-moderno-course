function objetoParaArray(objeto){
    return Object.entries(objeto)
}
console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }))

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
    }))