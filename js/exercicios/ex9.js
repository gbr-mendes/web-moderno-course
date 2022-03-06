const nextMultiple5 = value =>{
    while(value % 5 !== 0){
        value++
    }
    return value
}


const fixeGrade = nota =>{
    if (nota >=38){
        const nextMultiple = nextMultiple5(nota)
        if((nextMultiple - nota) < 3){
            nota = nextMultiple
        }
        return nota
    }else{
        return 'Reprovado!'
    }
    
}

console.log(fixeGrade(38))