// Notação literal

const obj1 = {}
console.log(obj1)

// Object in js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras


function Produto(nome, preco,desc){
    this.nome = nome
    this.getPrecoDesc = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
console.log(p1)
console.log(p1.nome)
console.log(p1.getPrecoDesc())

// Função factory

function createEmployee(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = createEmployee('João', 7986, 4)
const f2 = createEmployee('Maria', 5689, 3)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Uma função famosa que retorna um objeto
const fromJson = JSON.parse('{"Info": "Sou um json"}')
console.log(fromJson)