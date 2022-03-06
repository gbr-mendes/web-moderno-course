function tratarErroELancar(erro){
    throw new Error('O seguinte erro ocorreu:' + erro)
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('final!!!!')
    }
}

const obj = {name: "Roberto"}

imprimirNomeGritado(obj)