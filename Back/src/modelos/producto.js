//Creacion de coleccion productos para la base de datos
const mongoose = require('mongoose')
const productosSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Productos', productosSchema)