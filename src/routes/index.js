const express = require('express'); // para usar el módulo Router
const router = express.Router(); // para crear múltiples rutas y mantenerlas en archivos separado
const title = "nintai dojo"

// home page
router.get('/', (req, res) => {
    // envía el archivo
    // res.sendFile(path.join(__dirname + '/views/index.html')); // ruta
    res.render('index.html', { title: title, page: "Home"} );
});

// contact page
router.get('/contact', (req, res) => {
    res.render('contact.html', { title: title, page: "Contact"} );
});

// exporta la ruta
module.exports = router;