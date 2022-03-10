function converterString(string){
    const valor = Number.parseFloat(string)
    if(valor){
        return valor
    }else{
        return !string
    }
}
const inverso = function(valor){
    switch(typeof valor){
        case 'boolean':
            return !valor
        case 'number':
            return -valor
        case 'string':
            return converterString(valor)
    }
}
console.log(inverso(true))
console.log(inverso(-2000))
console.log(inverso("6"))
console.log(inverso("programação"))