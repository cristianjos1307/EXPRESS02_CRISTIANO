//rotas com pontos e hífens
const express = require('express')
const app = express();

app.listen(3000,()=>{
    console.log('Servidor no ar!!');
})

//rota base
app.get('/', (req,res) =>{
    res.send('Teste com parâmetros');
})

//rota com hífen
app.get('/distancia/:pontoA-:pontoB',(req,res)=>{
    const pontoA = req.parms.pontoA;
    const pontoB = req.parms.pontoB;
    const distancia = pontoB - pontoA;
    res.send (`A distância, usando hífen entre ${pontoA} e ${pontoB} é ${distancia}`);
})

//rota com ponto
app.get('/distancia/:pontoA/:pontoB',(req,res)=>{
    const pontoA = req.parms.pontoA;
    const pontoB = req.parms.pontoB;
    const distancia = pontoB - pontoA;
    res.send (`A distância, usando ponto entre ${pontoA} e ${pontoB} é ${distancia}`)
})