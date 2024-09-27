const express = require("express") 
const app = express() 
const porta = 3333
const router = express.Router(); //configura um get para uma rota

function mostraPorta () {
    console.log("Servidor criado e rodando na porta ", porta);
}
function mostraOla(request, response){
    response.send("Olá, mundo!");
}
app.listen(porta, mostraPorta);
app.use(router.get('/ola', mostraOla));//configura o endereço da rota que será programada e qual valor devolver após a requisição
mostraPorta();
//localhost -> servidor local -> computador próprio
//localhost:3333 -> endereço aonde vamos mandar as requisições

//criação de objetos
//{
  //  nome: 'Simara Conceição' ,
    //imagem: 'https://bit.ly/3LJIyOF' ,
    //minibio: 'Desenvolvedora e instrutora'
    
//}