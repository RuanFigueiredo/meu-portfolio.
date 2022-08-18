// 1- importar o express
const express = require('express');

// 2- criar uma aplicação express (const app)
const app = express();

// 3- importar e usar o roteador...
const router = require('./src/roteador')
app.use('/pessoas', router);


// 4- rodar a aplicação express  (app.listen)
app.listen(3000,()=>{console.log("servidor rodando na porta 3000...")})