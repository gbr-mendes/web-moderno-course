const validateValue = value => {
    const updatedValue = `R$ ${value.toFixed(2).replace('.', ',')}`
    return updatedValue
}

console.log(validateValue(0.1 + 0.2))

