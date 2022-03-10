function receberSomenteOsParesDeIndicesPares(array){
    return array.filter(e =>{
        return e % 2 === 0 && array.indexOf(e) % 2 === 0
    })
}
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))