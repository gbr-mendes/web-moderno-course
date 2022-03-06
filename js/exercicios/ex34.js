const verifyString = (string1, string2) => {
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()
    for(i in string1){
        if(string2.indexOf(string1[i]) === -1){
            return false
        }
    }
    for(i in string2){
        if(string1.indexOf(string2[i]) === -1){
            return false
        }
    }
    return true
}

console.log(verifyString('pao', 'opta'))