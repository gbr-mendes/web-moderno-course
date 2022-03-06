const integers = [2, 3, 7, 14, 36, 99, 33, 75, 12]

const returnQuantParImpar = (integers) => {
    let [impar, par] = [0,0]
    
    for(i in integers){
        (integers[i] % 2 === 0) ? par++ : impar++
    }
    console.log(`A quantidade de pares é ${par} e a de impares é ${impar}`)
}

returnQuantParImpar(integers)