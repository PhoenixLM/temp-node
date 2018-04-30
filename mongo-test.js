const mongoose = require('mongoose')
const Schema   = mongoose.Schema

mongoose.connect('mongodb://localhost/test')
const imoveisSchema = new Schema({
    cep: Number,
    valor: Number,
    tipo: String
})
mongoose.model('imoveis', imoveisSchema)
mongoose.model('imoveis').find((err, imoveis) => {
    console.log(imoveis)
})



