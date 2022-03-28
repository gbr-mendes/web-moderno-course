const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.00,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo')
})