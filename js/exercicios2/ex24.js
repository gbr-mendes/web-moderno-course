const contarCaractere = (caracter, string) => string.split('').filter(e => e === caracter).length
console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))