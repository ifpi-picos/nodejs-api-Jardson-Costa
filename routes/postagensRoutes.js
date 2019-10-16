const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //buscar postagens no banco de dados
    res.send('Lista de postagens...');
});

router.post('/', (req, res) => {
    //enviar para o banco de dados
    res.send('Adicionado com sucesso!')
});

module.exports = router;