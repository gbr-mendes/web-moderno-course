//forma literal
function fun1(){

}

//armazenar em váriavel

const fun2 = function(){}

// armazenar em um array
const array = [function(a, b){return a + b}, fun1, fun2]

console.log(array[0](2, 3))

// Armazenar em atributo de objeto (método)

const obj = {}
obj.falar = function(){
    return 'Opa'
}

console.log(obj.falar())

//passar função como parâmetro

function run(fun){
    console.log(fun())
}

run(function(){return 'In a function'})

// função pode retornar/conter outra função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)