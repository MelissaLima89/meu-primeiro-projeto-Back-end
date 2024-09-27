// primeiro servidor
const express = require("express") // constante chama o pacote express
const app = express() // chamando a função express
const porta = 3333 //constante porta
const router = express.Router(); //configura um get para uma rota

function mostraPorta () {
    console.log("Servidor criado e rodando na porta ", porta);
}
function mostraOla(request, response){
    response.send("Olá, mundo!")
}
app.listen(porta, mostraPorta);
app.use(router.get('/ola', mostraOla)) //configura o endereço da rota que será programada e qual valor devolver após a requisição
mostraPorta();
//localhost -> servidor local -> computador próprio
//localhost:3333 -> endereço aonde vamos mandar as requisições