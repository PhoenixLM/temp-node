const mongoose = require('mongoose')

module.exports = (app) => {
    app.get('/imoveis', (req, res) => {
        mongoose.model('imoveis').find((err, imoveis) => {
            //console.log(imoveis)
            res.send(imoveis)
        })
    });
}