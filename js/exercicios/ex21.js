const fixedValue = 100
const custumerAge = 10
let total = fixedValue

if(custumerAge < 10){
    total += 80
}else if(custumerAge >=10 && custumerAge <= 30){
    total += 50
}else if(custumerAge > 30 && custumerAge <=60){
    total += 95
}else if(custumerAge > 60){
    total += 130
}

console.log(`O total a pagar é ${total}`)