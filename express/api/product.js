module.exports = (app, text) => {
    function save(req, res) {
        res.send(`Save product ${text}`)
    }
    function retrive(req, res) {
        res.send(`Retrive product ${text}`)
    }

    app.get('/product', retrive)
    app.post('/product', save)
}