const contNegative = (array) =>{
    let cont = 0
    for(i in array){
        if(array[i] < 0){
            cont++
        }
    }
    console.log(`A quantidade de números negatvos é ${cont}`)
}

contNegative([1, 2, 6, -5, -4, 0])