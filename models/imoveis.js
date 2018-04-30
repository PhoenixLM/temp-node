const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const imoveisSchema = new Schema({
    cep: Number,
    valor: Number,
    tipo: String
})

const Imovel = mongoose.model('imoveis', imoveisSchema)
module.exports = {
    Imovel: Imovel
}
