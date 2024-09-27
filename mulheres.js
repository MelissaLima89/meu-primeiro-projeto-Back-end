const porta = 3333
const express = require("express")
const router = express.Router()

const app = express()
const mulheres = [
    {
        nome: 'Melissa Lima',
        imagem: "",
        minibio: 'Desenvolvedora Front-end'
    },
    {
        nome: 'Iana Chan',
        imagem: "",
        minibio: 'Fundadora do Programaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: "",
        minibio: 'Hacker antirracista'
    }
]
function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

function mostraMulheres (request, response){
    response.json(mulheres)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
//procurar por git bash para terminal do GIT
//configuração de assinatura -> git config user.name e git config user.email