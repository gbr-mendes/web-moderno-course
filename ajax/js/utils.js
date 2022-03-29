function parOuImpar(number) {
    number = Number.parseInt(number)
    if(number) {
        if(Number.parseInt(number) % 2 === 0) {
            return 'PAR'
        }else{
            return 'IMPAR'
        }
    }else {
        return 'Informe um valor válido'
    }
    
}

module.exports = {
    parOuImpar
}