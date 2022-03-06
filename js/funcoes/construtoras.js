function Carro(velocidadeMax = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    // método publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMax
        }
    }

    // método publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}


const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())