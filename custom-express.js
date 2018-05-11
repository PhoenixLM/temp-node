const express  = require('express')
const load     = require('express-load')
const favicon  = require('serve-favicon')

module.exports = () => {
    const app = express()

    app.use(express.static('./public'))
    app.use('/favicon.ico', express.static('/public/img/favicon.ico'));
    app.set('view engine', 'ejs')
    load('controllers')
        .then('models')
        .into(app)
    
    return app
}