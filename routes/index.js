const express = require('express');

// Crear nuevo objecto de tipo Router
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index');
});

module.exports = router;