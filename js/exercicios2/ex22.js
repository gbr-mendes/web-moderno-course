function funcaoDaSorte(value) {
    const sorteado = Math.floor((Math.random() * (10 - 1) + 1))
    if (sorteado === value) {
        return `Parabéns! O número sorteado foi o ${sorteado}`
    } else {
        return `Que pena! O número sorteado foi  o ${sorteado}`
    }
}

console.log(funcaoDaSorte(2))