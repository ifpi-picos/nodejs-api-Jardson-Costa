const express = require('express');
const router = express.Router();
const postagensRoutes = require('./postagensRoutes');

router.get('/', (req, res) => {
    res.send('App Online :)');
});

postagensRoutes.use('./postagens', postagensRoutes);

module.exports = router;