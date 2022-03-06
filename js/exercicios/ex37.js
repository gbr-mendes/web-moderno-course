const pa = (n, a1, r) =>{
    let paTerms = []
    for(let i=0; i < n; i++){
        paTerms.push(a1)
        a1 += r
    }
    return paTerms
}

console.log(pa(5, 7, 4))

const pg = (n, a1, r) =>{
    let pgTerms = []
    for(let i=0; i < n; i++){
        pgTerms.push(a1)
        a1 = a1 * r
    }
    return pgTerms
}
console.log(pg(5, 7, 4))