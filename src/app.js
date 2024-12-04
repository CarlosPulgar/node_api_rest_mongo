const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const { config } = require('dotenv');
config();


const bookRoutes = require("./routes/books.routes")

// Usamos express para los middlewares
const app = express();
app.use(bodyParser.json()) // parsea los bodies

// Aca conectaremos la base de datos:
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME});
const db = mongoose.connection;

app.use('/books', bookRoutes)

const port = process.env.PORT || 3200 ;

app.listen(port,()=> {
    console.log(`Escuchando el servidor ${port}`);
    
})
