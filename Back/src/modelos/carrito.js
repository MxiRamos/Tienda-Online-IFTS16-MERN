const mongoose = require('mongoose')
const carritoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Carrito', carritoSchema)