const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MedicionSchema = new Schema({
    fecha: {
        type: Date,
        default: Date.now()
    },
    peso: Number,
    cintura: Number,
    vientre: Number,

})

model = mongoose.model('mediciones', MedicionSchema)
module.exports = model