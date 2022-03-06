let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)

let comparaComThisArrow = param => console.log(this === param, 'arrow')

comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow = comparaComThisArrow.bind(global)
comparaComThisArrow(module.exports)