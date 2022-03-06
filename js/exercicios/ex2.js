function verifyTrinagule(l1, l2, l3){
    if(l1 === l2 && l2 == l3){
        console.log(`Triangulo equilatero`)
        return
    }else if(l1 === l2 || l1 === l3 || l2 === l3){
        console.log(`Triangulo isoceles`)
        return
    }else if(l1 !== l2 && l1 !== l3 && l2 !== l3){
        console.log(`Triangulo escaleno`)
        return
    }else{
        console.log('parametros inválidos')
    }

}

verifyTrinagule(2,3,5)