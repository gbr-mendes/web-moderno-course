function save(req, res) {
    res.send('User > save')
}

function retrive(req, res) {
    res.send('User > retrive')
}

module.exports = {save, retrive}