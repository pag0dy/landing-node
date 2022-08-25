// Importar express y path
const express = require('express');
const router = require('./routes/index');
const path = require('path');
// Puerto a utilizar
const PORT = 3000;

// Instanciamos la app de express
const app = express();

// Donde estarán mis vistas
app.set("views", path.resolve(__dirname, "views"));
// Indica el motor de plantillas a utilizar
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(router)

app.listen(PORT, () => {
    console.log('Server running on port')
})
