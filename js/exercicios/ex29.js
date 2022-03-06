const checkRange = (array) =>{
    let [inRange, outRange] = [0, 0]
    for(i in array){
        array[i] >= 10 && array[i] <= 20 ? inRange++ : outRange++
    }
    console.log(`Existem ${inRange} numeros no itervalo e ${outRange} numeros fora`)
}

checkRange([2,47,32,5,15,12,21])