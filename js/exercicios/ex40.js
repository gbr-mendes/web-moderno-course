const validateGrade = (arrayNotas) =>{
    for(i in arrayNotas){
        if(arrayNotas[i]>=0 && arrayNotas[i] < 5){
            console.log(`Nota ${arrayNotas[i]} - conceito D`)
        }else if(arrayNotas[i] >= 5 && arrayNotas[i] < 7){
            console.log(`Nota ${arrayNotas[i]} - conceito C`)
        }else if(arrayNotas[i] >=7 && arrayNotas[i] < 9){
            console.log(`Nota ${arrayNotas[i]} - conceito B`)
        }else if(arrayNotas[i] >= 9 && arrayNotas[i] <= 10){
            console.log(`Nota ${arrayNotas[i]} - conceito A`)
        }else{
            console.log(`Nota inválida`)
        }
    }
}

validateGrade([10, 4.5, 6, 7.8, 11, 9, 5, 3])