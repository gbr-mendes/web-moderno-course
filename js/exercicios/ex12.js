const fat = function(num){
    let fat = 1
    while(num > 0){
        fat *= num
        num--
    }
    return fat
}

console.log(fat(5))