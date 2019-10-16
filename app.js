const express = require('express');
const routers = require('./routes');
const app = express();

app.use('/', routers);

app.listen(3000, () => console.log('App Online'));

//npm install --save express