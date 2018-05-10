const app      = require('./custom-express')()
const http     = require('http').Server(app)
const _PORT    = 3001
const _HOST    = 'localhost'

const server = http.listen(_PORT, _HOST, () => {
    const host = server.address().address
    const port = server.address().port

    console.log('servidor executando em %s : %s', host, port)
})
