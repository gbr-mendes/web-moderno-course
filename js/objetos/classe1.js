class Lancamento{
    constructor(nome, valor){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFincanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamento(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaLuz = new Lancamento('Luz', -220)

const contas = new CicloFincanceiro(6, 2018)
contas.addLancamento(salario, contaLuz)

console.log(contas.sumario())