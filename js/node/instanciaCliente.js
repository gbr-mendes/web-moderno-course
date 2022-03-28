const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
console.log(contadorA.valor)
console.log(contadorB.valor)

contadorC.inc()
console.log(contadorC.valor)
console.log(contadorD.valor)