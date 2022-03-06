const verifyEmpenho = stringList =>{
    const array = stringList.split(' ')
    const arrayNum = [] 
    array.forEach(element => {
        arrayNum.push(Number(element))    
    });
    
    let record = 0
    let reachRecord = 0
    let worseScore = arrayNum[0];
    for(i in arrayNum){
        if(arrayNum[i] > record){
            record = arrayNum[i]
            if(i > 0){
                reachRecord++
            }
        }
        if(arrayNum[i] < worseScore){
            worseScore = arrayNum[i]
        }
    }
    return [reachRecord, arrayNum.indexOf(worseScore) + 1]
}

const stringList = "10 20 20 8 25 3 0 30 1"

console.log(verifyEmpenho(stringList))