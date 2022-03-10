const multiplicar = (num1, num2)=>{
    if(num1 >= 0 && num2 >= 0){
        let total = 0
        for(let i=0; i < num1; i++){
            total += num2
        }
        return total
    }else{
        return `Informe números maiores ou iguais a zero`
    }
}
console.log(multiplicar(8,0))