// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log(produto)
produto.marca = 'BIC'
console.log('Extensivel:', Object.isExtensible(produto))
console.log(produto)
delete produto.tag
console.log(produto)

// Object.seal(previne deleção e adição, porém permite atualização)

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
delete pessoa.nome
pessoa.sexo = 'feminino'
console.log(pessoa)
pessoa.nome = 'francisca'
console.log(pessoa)

//Object.freeze (selado + inextenviel + valores constantes)