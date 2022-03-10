const quaseArray = { 0: "Rafael", 1: "Ana", 2: "Bia" }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    enumerable: false,
    value: function(){return Object.values(this)}
})

console.log(quaseArray.toString())
