const express = require('express')
const app = express() // asigno a app express
const mongoose = require('mongoose') // llamo a mongoose para la conexion con la base de datos
require('dotenv').config() // llama a la variable de entorno para la conexion a la base de datos
const productosRoutes = require('./rutas/producto')

//Middlewares
app.use(express.json()) // para que se pueda leer en formato json
app.use('/api', productosRoutes)

//Rutas
app.get('/',(req, res) => { //muestro un mensaje en el inicio 
    res.send('Bienvenido a mi APP')
})

//Conexion a MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conexion exitosa a la base de datos'))
    .catch((error) => console.log(error))

//Port
const PUERTO = process.env.PORT || 5000 //establezco el puerto
app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
})