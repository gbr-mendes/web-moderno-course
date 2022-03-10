Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: false},
    {nome: "Copo de plástico", preco: 18.99, fragil: false}
]

const bigerThan500 = p => p.preco >= 500
const getFragil = p => p.fragil

const resultado = produtos.filter2(bigerThan500).filter2(getFragil)
console.log(resultado)