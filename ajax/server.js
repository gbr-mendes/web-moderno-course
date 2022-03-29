const PORT = 8080
const bodyParser = require('body-parser')
const express = require('express')
const utils = require('./js/utils')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './uploads')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('file')
app.post('/upload', (req, res)=> {
    upload(req, res, err => {
        if(err) {
            return res.end(`An error has ocurred`)
        }
        res.end('Finished successfuly')
    })
})

app.post('/form', (req, res)=> {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res)=> {
    const num = req.query.number
    const resultado = utils.parOuImpar(num)
    res.send({resultado})
})


/* app.get('/test', (req, res) => {
    res.send('Ok!')
}) */

app.listen(PORT, ()=> console.log(`Runing at http://localhost:${PORT}`))