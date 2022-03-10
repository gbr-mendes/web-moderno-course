const menorNumero = (array) => array.reduce((menor, e) => {
    if(e < menor){
        return e
    }else{
        return menor
    }
})

console.log(menorNumero([10, 5, 35, 65]))

console.log(menorNumero([5, -15, 50, 3]))