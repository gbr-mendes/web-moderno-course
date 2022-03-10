function removerPropriedade(obj, propriedade){
    const newObj = Object.assign({}, obj)
    delete newObj[propriedade]
    return newObj
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))
const objeto = {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }

console.log(Object.is(removerPropriedade(objeto, "descricao"), objeto))
