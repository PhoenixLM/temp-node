const mongoose = require('mongoose')

module.exports = (app) => {
    app.get('/vendas', (req, res) => {
        mongoose.model('imoveis').find((err, imoveis) => {
            res.render('vendas', {lista: imoveis})
        })
    })
}