const calc = (num1, num2, opr) => {
    switch(opr){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Operação inválida'
    }
}

console.log(calc(2, 3, '-'))