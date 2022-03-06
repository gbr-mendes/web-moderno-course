const getHigherAndLower = (array) =>{
    let [higher, lower] = [array[0], array[0]]
    for(i in array){
        if(array[i] > higher){
            higher = array[i]
        }
        if(array[i] < lower){
            lower = array[i]
        }
    }
    return `O maior valor do array é ${higher} e o menor é ${lower}`
}

console.log(getHigherAndLower([2,6,12,3]))