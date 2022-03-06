function rand({min=0, max=1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {min: 50, max: 35}

console.log(rand(obj))