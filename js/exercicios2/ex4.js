const nomeDoMes = mes =>{
    switch(mes){
        case 1:
            console.log(`Janeiro`)
            break
        case 2:
            console.log(`Fevereiro`)
            break
        case 3:
            console.log(`Março`)
            break
        case 4:
            console.log(`Abril`)
            break
        case 5:
            console.log(`Maio`)
            break
        case 6:
            console.log(`Junho`)
            break
        case 7:
            console.log(`Julho`)
            break
        case 8:
            console.log(`Agosto`)
            break
        case 9:
            console.log(`Setembo`)
            break
        case 10:
            console.log(`Outubro`)
            break
        case 11:
            console.log('Novembro')
            break
        case 12:
            console.log('Dezembro')
        default:
            console.log('Mês inválido')
    }
}

nomeDoMes(2)