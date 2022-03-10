Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.72}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const getPreco = produto => produto.preco
const toObject = json => JSON.parse(json)

const resultado = carrinho.map2(toObject).map2(getPreco)
console.log(resultado)