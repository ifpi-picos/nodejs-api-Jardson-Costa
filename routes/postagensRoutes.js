const express = require('express');
const postagensController = require('../controllers/postagens');
const router = express.Router();

router.get('/', async (req, res) => {
    //buscar postagens no banco de dados
    const postagens = await postagensController.get();
    res.send(postagens);
});

router.post('/', async (req, res) => {
    //enviar para o banco de dados
    await postagensController.create(req.body);
    res.send('Adicionado com sucesso!')
});

module.exports = router;