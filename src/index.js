// Archivo principal que arranca todo el servicio //
// console.log('Server listening!');

const express = require('express'); // llama al módulo
const app = express(); // devuelve un objeto (servidor)
const path = require('path'); // módulo para trabajar con rutas

// SETTINGS

app.set('port', 3000); // seteamos el puerto de escucha y lo llamamos 'port'
app.set('views', path.join(__dirname, 'views')); // define la ruta a la carpeta views
app.engine('html', require('ejs').renderFile); // para usar la extensión .html en lugar de .ejs (código más entendible)
app.set('view engine', 'ejs'); // seteamos el motor de plantilla a 'ejs'

// MIDDLEWARES

// ROUTES
app.use(require('./routes/index'));


// STATIC FILES
app.use(express.static(path.join(__dirname, 'public'))); // publica esta carpeta desde el navegador

// LISTENING THE SERVER

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})