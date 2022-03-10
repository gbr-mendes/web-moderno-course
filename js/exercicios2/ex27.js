function inverter(obj){
    const newObj = {}
    Object.entries(obj).forEach(item =>{
        Object.defineProperty(newObj, item[1], {value: item[0], enumerable: true})
    })
    return newObj
}
console.log(inverter({ a: 1, b: 2, c: 3}))