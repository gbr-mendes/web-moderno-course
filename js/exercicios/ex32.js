const calcMedia = (array) =>{
    let sum = 0
    for(i in array){
        sum += array[i]
    }
    return sum / array.length
}

console.log(calcMedia([3, 3, 6]))