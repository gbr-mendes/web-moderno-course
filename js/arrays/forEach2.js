Array.prototype.paraCada = function(callback){
    for(let i=0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.paraCada((nome, indice)=>console.log(`${indice + 1}) ${nome}`))