function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 !== trabalho2
    const manterSaudavel = !comprarSorvete

    return {
        comprarSorvete, comprarTv32, comprarTv50, manterSaudavel
    }
}

console.log(compras(false, false))