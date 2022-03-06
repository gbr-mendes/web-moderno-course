const car = 'caminhonete'

switch(car){
    case 'hatch':
        console.log('COMPRA EFETUADA COM SUCESSO')
        break
    case 'sedan': case 'motocicleta': case 'caminhonete':
        console.log("Tem certezeza que não prefere esse modelo?")
        break
    default:
        console.log("Não trabalhamos com esse tipo de automóvel aqui")

}