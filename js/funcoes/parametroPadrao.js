// estrategia 1 para gerar o padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
console.log(soma1())
console.log(soma1(3))
console.log(soma1(2, 3, 5))
console.log(soma1(0, 0, 0))

// estratégia 2, 3 e 4
function soma2(a, b, c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(0,0,0))
console.log(soma2(1,0,2))
console.log(soma2())

//es2015

function soma3(a=1, b=2, c=3){
    return a + b + c
}

console.log(2, 3, 6)
console.log(soma3())
console.log(soma3(0,0,0))