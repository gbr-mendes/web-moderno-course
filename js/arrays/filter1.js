const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: false},
    {nome: "Copo de plástico", preco: 18.99, fragil: false}
]

console.log(produtos.filter(p => p.preco > 2500))

const bigerThan500 = p => p.preco >= 500
const getFragil = p => p.fragil

const resultado = produtos.filter(bigerThan500).filter(getFragil)
console.log(resultado)