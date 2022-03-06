const saudacao = 'Opa!!!' // Contexto léxico


function exec(){
    const saudacao = 'Fala!!!' // Contexto lexico 2
    return saudacao
}

// Objetos sao grupos aninhados de chave e valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "rua 1",
        numero: 30
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)