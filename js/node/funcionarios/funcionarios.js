const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const getLowerSallaryPerson = function(array) {
    return array.reduce((poorPerson, person) => {
        if(poorPerson.salario > person.salario) {
            return person
        }else{
            return poorPerson
        }
    },array[0])
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const chineseWomen = funcionarios
    .filter(person => person.genero === 'F')
    .filter(woman => woman.pais === 'China')
    const poorPerson = getLowerSallaryPerson(chineseWomen)
    console.log(poorPerson)  
})