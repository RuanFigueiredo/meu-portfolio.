const pessoasController = {
    listarPessoas :(req, res)=>{

        // Capturar o id pedido pelo cliente (req.params)
        const id = req.params.id;
        
        // Levantar a pessoa que tem o id pedido
        const pessoas = require('./database/pessoas.json');
        const pessoa = pessoas.find(p => p.id == id);
    
        // Retornar/enviar a pessoa encontrada ou uma mensagem: "Pessoa inexistente"
        if(pessoa == undefined){
            res.send("Pessoa inexistente");
        } else {
            res.send(pessoa);
        }
    }

}

module.exports = pessoasController;