function getRandInt([min=0, max=0]){
    if(min > max)[min, max] = [max, min]
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let otion = 0

while(otion != -1){
    otion = getRandInt([-1, 10])
    console.log(`A opção escolhida foi ${otion}`)
}
console.log("Até a próxima!")