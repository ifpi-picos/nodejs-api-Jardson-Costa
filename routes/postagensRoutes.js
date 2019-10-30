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

//get postagem por ID
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const postagem = await postagensController.getPorId(id);
    res.send(postagem);
});

//update postagem por ID
router.put('/:id', async (req,res) => {
    const id = req.params.id;
    await postagensController.update(id, req.body);
    res.send('Alterado com sucesso!');
});

//delete postagem por ID
router.delete('/:id', async (req, res)=> {
    const id = req.params.id;
    await postagensController.delete(id);
    res.send('Deletado com sucesso!');
});

module.exports = router;
