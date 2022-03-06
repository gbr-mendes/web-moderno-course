const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(2, 3)
imprimirResultado(3, 4, soma)
imprimirResultado(4,5, function(x, y){
    return x - y
})