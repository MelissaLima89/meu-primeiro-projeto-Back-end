const mongoose = require("mongoose");
require('dotenv').config()
//async: javascript assíncrono
 async function conectaBandoDeDados () {
    try {console.log("Conexão com o banco de dados iniciou");

    await mongoose.connect(process.env.MONGO_URL)

    console.log("Conexão com banco de Dados feita com sucesso");
 } catch(erro){
    console.log(erro);
 }
}
module.exports = conectaBandoDeDados