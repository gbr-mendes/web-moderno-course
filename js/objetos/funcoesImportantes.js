const pessoa = {
    nome:'Rebeca',
    idade: 12,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '02/03/1964'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ES15)
const dest = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a: 5}
const finalObj = Object.assign(dest, obj1, obj2)
console.log(finalObj)

Object.freeze(finalObj)
finalObj.c = 1234
console.log(finalObj)