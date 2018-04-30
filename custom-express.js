const express  = require('express')
const load     = require('express-load')

module.exports = () => {
    const app = express()

    app.use(express.static('./public'))
    app.set('view engine', 'ejs')
    load('controllers')
        .then('models')
        .into(app)
    
    return app
}