function criarProduto(nome, preco, desconto=0.1){
    return{
        nome,
        preco,
        desconto
    }
}

const p1 = criarProduto('iPhone', 12000)
console.log(p1)