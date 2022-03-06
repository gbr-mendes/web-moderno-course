// Factory simples
function criarPessoa(nome, idade, peso){
    return {
        nome: nome,
        idade: idade,
        peso: peso
    }
}

const p1 = criarPessoa('Ana', 32, 64)
console.log(p1)