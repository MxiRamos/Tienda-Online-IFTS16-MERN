//Creacion de coleccion usuarios para la base de datos
const mongoose = require('mongoose')
const usuariosSchema = mongoose.Schema({
    usuario:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model('usuarios', usuariosSchema)