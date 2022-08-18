// Importar o express
const express = require('express');

// Criar o roteador
const router = express.Router();

//importar controller
const pessoasController = require("./controllers/pessoasController")


// Definir/criar as rotas no roteador
router.get('/', pessoasController.listarPessoas);

router.get('/:id', )

// Exportar esse roteador
module.exports = router;