const calcBissexto = year =>{
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400){
                return true
            }else return false
        }else return true
    }else return false
}

console.log(calcBissexto(2020))
console.log(calcBissexto(2421))