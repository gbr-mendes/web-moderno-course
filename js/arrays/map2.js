const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.72}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const getPreco = produto => produto.preco
const toObject = json => JSON.parse(json)

const resultado = carrinho.map(toObject).map(getPreco)
console.log(resultado)