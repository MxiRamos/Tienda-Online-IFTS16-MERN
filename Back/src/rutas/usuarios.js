const express = require('express')
const usuariosSchema = require('../modelos/usuarios')
const router = express.Router()
const bcrypt = require('bcrypt')

//Obtener usuarios
router.get('/usuarios', (req, res) => {
    usuariosSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err))
})

//Obtener usuario por id
router.get('/usuarios/:id', (req, res) => {
    const { id } = req.params

    usuariosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json(err))
})

//Agregar Usuario
router.post('/usuarios', (req, res) => {
    const { usuario, email, password } = req.body

    usuariosSchema.findOne({ email: email}) // busca si el email es igual al de la base de datos
        .then( usuarioExistente => {
            if(usuarioExistente){ // si el usuario esta en la base de datos no se puede guardar en la base datos
                res.send('Usuario existente, no se puede registrar el mismo usuario')
            }else if(!usuarioExistente){ // si no, es nuevo
                bcrypt.hash(password,10) // encripto la contraseña que se va almacenar en la base de datos
                .then((hash) => {
                    const nuevoUsuario = new usuariosSchema({
                        email,
                        usuario,
                        password: hash
                    })
                    nuevoUsuario // guardo el usuario en la base de datos 
                    .save()
                    .then((data) => res.json(data))
                    .catch((error) => res.json({ message: error }))
                })

                
            }
        })
        .catch((err) => res.json({ message: err }))
})

//Actualizar un usuario
router.put('/usuarios/:id', (req, res) => {
    const { id } = req.params //obtengo el id solicitado
    const { usuario, email, password } = req.body // obtengo el valor que se va a actualizar
    usuariosSchema
        .updateOne({ _id:id }, {$set: {usuario, email, password}}) //actualizo los valores
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

//Eliminar un usuario
router.delete('/usuarios/:id', (req, res) => {
    const {id} = req.params
    usuariosSchema
        .deleteOne({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

module.exports = router
