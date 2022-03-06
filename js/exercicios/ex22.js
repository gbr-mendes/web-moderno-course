const calcAnuidade = (mes, anuidadeValue) => {
    const juros = 0.05 //5 porcento
    const totalToPay = anuidadeValue * Math.pow((1 + juros), mes - 1)
    return totalToPay
}
console.log(calcAnuidade(3, 1000))