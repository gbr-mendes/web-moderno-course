function maiorOuIgual(num1, num2){
    if(typeof num1 != 'number' || typeof num2 != 'number' ){
        return false
    }else{
        return num1 >= num2
    }
}
console.log(maiorOuIgual(5, 1))
