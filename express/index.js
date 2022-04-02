const express = require('express');
const saudacao = require('./saudacaoMid')
const bodyParser = require('body-parser')
const userApi = require('./api/user')


const PORT = 8080

const app = express()

require('./api/product')(app,'Abacaxi')

app.get('/user', userApi.retrive)
app.post('/user', userApi.save)
app.use(bodyParser.text())

app.use(saudacao('Gabriel'))

app.use('/hi',(req, res, next)=> {
    console.log('antes...')
    next()
})
app.get('/clients/reports', (req, res)=> {
    res.send(`Clients reports: complet=${req.query.complet}, year=${req.query.year}`)
})

app.post('/body', (req, res)=> {
    // let body = ''
    // req.on('data', party=>{
    //     body+=party
    // })
    // req.on('end', ()=> {
    //     res.send(body)
    // })
    res.send(req.body)
})

app.get('/clients/:id', (req, res, next)=> {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/hi',(req, res, next)=> {
    console.log('durante...')
    // res.send("I'm <b>fine!</b>")
    /* res.json({
        open: true
    }) */
    res.json({
        data:[
            {id:7, nome:'ana'},
            {id:8, nome:'joão'},
            {id:9, nome:'maria'},
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    next()
})
app.use('/hi',(req, res)=> {
    console.log('depois...')
})

app.listen(PORT, ()=> console.log(`Listining port ${PORT}...`))
