function Pessoa(nome){
    this.nome = nome

    this.falar = ()=> {
        console.log(`Olá, meu nome ${this.nome}`)
    }
}

p1 = new Pessoa('Gabriel')
p1.falar()