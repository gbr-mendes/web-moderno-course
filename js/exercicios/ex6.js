function applyJurosSimples(cp, tax, time){
    const montante = (cp * tax / 100 * time) + cp
    return montante
}

function applyJurosCompostos(cp, tax, time){
    const montante = cp * (Math.pow((1 + tax / 100), time))
    return montante
}


console.log(applyJurosCompostos(2000,3,4))