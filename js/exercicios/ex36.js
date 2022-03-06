const multplyArray = (array, number) =>{
    let newArray = []
    for(i in array){
        newArray.push(array[i] * number)
    }
    return newArray
}

const multplyArrayConditional = (array, number) =>{
    let newArray = []
    for(i in array){
        if(number > 5){
            newArray.push(array[i] * number)
        }
    }
    return newArray
}

console.log(multplyArray([1, 2, 6, 5],2))
console.log(multplyArrayConditional([1, 2, 6, 5],6))