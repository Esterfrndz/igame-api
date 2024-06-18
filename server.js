require('dotenv').config();
const connectDB = require('./src/config/dbConfig.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./src/routes/v1/productRoutes.js');


const app = express();
const port = process.env.PORT || 3000;

//Middleware

app.use(bodyParser.json());
app.use(cors());

//Rutas
app.use('/api/v1/products', productRoutes);


//Conexión a Mongodb

connectDB().then(() => { 
    app.listen(port,() =>{
        console.log(`Servidor corriendo en el puerto ${port}`);
    })
});


