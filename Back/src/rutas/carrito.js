const express = require('express')
const carritoSchema = require('../modelos/carrito')
const router = express.Router()

// obtengo la lista del carrito
router.get('/carrito', (req, res) => { 
    carritoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

//obtengo un producto del carrito
router.get('/carrito/:id', (req, res) =>{ 
    const { id } = req.params

    carritoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

//Agrega un producto al carrito
router.post('/carrito', (req, res) => {
    const carrito = carritoSchema(req.body)
    carrito
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

//Actualizo un producto del carrito
router.put('/carrito/:id', (req, res) => {
    const { id } = req.params //obtengo el id solicitado
    const { nombre, categoria, precio, img } = req.body // obtengo el valor que se va a actualizar
    carritoSchema
        .updateOne({ _id:id }, {$set: {nombre, categoria, precio, img}}) //actualizo los valores
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

//Eliminar un producto del carrito
router.delete('/carrito/:id', (req, res) => {
    const {id} = req.params
    carritoSchema
        .deleteOne({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

module.exports = router

