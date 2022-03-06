const reachValue = value =>{
    const banknotes = [1, 5, 10, 50]
    let bigBankNoteToReachValue = 0
    let sum = 0
    let rest = value - sum
    let quantNotes = 0
    let noteAndQuantity = []

    while(rest > 0){
        for(let i = banknotes.length - 1; i>=0; i--){
            bigBankNoteToReachValue = banknotes[i]
            quantNotes = Math.floor(rest / bigBankNoteToReachValue)
            sum += quantNotes * bigBankNoteToReachValue
            if(quantNotes > 0){
                noteAndQuantity.push(quantNotes)
                noteAndQuantity.push(banknotes[i])
            }
            rest = value - sum
        }
    }
    while(noteAndQuantity.length){
        let temp = noteAndQuantity.splice(0,2)
        console.log(`${temp[0]} nota(s) de ${temp[1]}`)
    }}

reachValue(1843)