const produtos = [
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]

const getPreco = produto => produto.preco

const despesasTotais = produtos => produtos.map(getPreco).reduce((soma, valor) => soma + valor)

console.log(despesasTotais(produtos))

console.log(despesasTotais([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
]))