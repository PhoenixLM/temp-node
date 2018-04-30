const app      = require('./custom-express')()
const http     = require('http').Server(app)
const mongoose = require('mongoose')
const _PORT    = 3001

const server = http.listen(_PORT, () => {
    const host = server.address().address
    const port = server.address().port

    mongoose.connect('mongodb://127.0.0.1:27017')
    mongoose.connection.on('error', console.error.bind(console, 'mongo connection error:'));
    mongoose.connection.once('open', () => {
        console.log('mongo connected')
    });
    console.log('servidor executando em %s %s', host, port)
})
