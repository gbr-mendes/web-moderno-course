const valor = 'Global'

function fun(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    fun()
}

exec()