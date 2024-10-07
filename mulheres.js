//o uso da biblioteca uuid não é mais necessário pois, após a integração com o banco de dados, quem fica responsável por criar um id é o proprio Db
const porta = 3333
const express = require("express")
const cors = require('cors')
const router = express.Router()
const {v4: uuidv4 } = require('uuid');
const conectaBandoDeDados = require('./bancoDeDados')
const mulher = require('./mulherModel')
conectaBandoDeDados();

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.json()) // requisições, dados que irão trafegar também estão com JSON

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

//GET
async function mostraMulheres (request, response){
    try {
            mulheresVindasDoBancoDeDados = await mulher.find()
            response.json(mulheresVindasDoBancoDeDados)
    } catch (erro){
            console.log(erro)
    }
}
//post (toda função atrelada a uma rota tem os PARAMETROS REQUEST E RESPONSE
//POST -> REALIZA A CIRAÇÃO DE INFORMAÇÕES
async function criaMulher (request, response) 
{
    novaMulher = new mulher ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })
    try{
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    }catch(erro){console.log(erro)}
}
//PATCH
async function corrigeMulher (request, response){
    try{
        const mulherEncontrada = await mulher.findById(request.params.id)
        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome;
        }
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem;
        }
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio;
        }
        if (request.body.citacao){
            mulherEncontrada = request.bpdy.citacao
        }
        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)
    } catch(erro){
        console.log()
    }
}
//DELETE

async function deletaMulher(request, response){
    try {
        await Mulher.findByIdAndDelete(request.params.is)
        response.json({ mensagem: 'Mulher deletada com sucesso!'})
    } catch(erro) {
        console.log(erro)
    }
    const mulheresQueFicam = mulheres.filter(todasMenosEla)
    response.json(mulheresQueFicam)
}


//SOMENTE O GET DA PRA TESTAR NO NAVEGADOR
app.use(router.get('/mulheres', mostraMulheres))
app.use(router.post('/mulheres', criaMulher))//rota post DEVOLUÇÃO DA REQUISIÇÃO
app.use(router.patch('./mulheres/:id', corrigeMulher))
app.listen(porta, mostraPorta)
app.use(router.delete('./mulheres/:id', deletaMulher))
//procurar por git bash para terminal do GIT
//configuração de assinatura -> git config user.name e git config user.email
// subir as mudanças git add.
//git commit -> envia as mudanças ao git de fato
//git banch -> garante que as infos enviadas sejam as mesmas que as locais
// post -> adicionar informação (no caso, atraves de formulario
//neste arquivo contém uma API
//#MétodosHTTPCheck
// login p/ banco de dados: user: limamelissa89 pass: jHX1yzovDseDAmFV
// driver: npm install mongodb / npm install mongoose
//link do cluster: mongodb+srv://limamelissa89:<db_password>@clustermulheres.omvls.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMulheres
// MONGOOSE-> biblioteca pra integrar mongoDb e nodejs
//#ExplorandoBDCheck
//#NovaMulherNoBDCheck