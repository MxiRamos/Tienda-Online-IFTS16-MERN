const express = require('express')
const productosSchema = require('../modelos/producto')
const router = express.Router()

// obtengo la lista de los productos
router.get('/productos', (req, res) => { 
    productosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

//obtengo un producto por el id
router.get('/productos/:id', (req, res) =>{ 
    const { id } = req.params

    productosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

//Agrega un producto
router.post('/productos', (req, res) => {
    const producto = productosSchema(req.body)
    producto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

//Actualizar un producto
router.put('/productos/:id', (req, res) => {
    const { id } = req.params //obtengo el id solicitado
    const { nombre, categoria, precio, img } = req.body // obtengo el valor que se va a actualizar
    productosSchema
        .updateOne({ _id:id }, {$set: {nombre, categoria, precio, img}}) //actualizo los valores
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

//Eliminar un producto
router.delete('/productos/:id', (req, res) => {
    const {id} = req.params
    productosSchema
        .deleteOne({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

module.exports = router