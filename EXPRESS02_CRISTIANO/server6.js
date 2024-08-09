//incorporar respostas a partir de outros arquivos
const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log("Servidor no ar mano!!!")
})

//criar arquivo functions

//importar funções
const funcoes = require('./functions')

app.get('/',(req,res)=>{
    res.send("Teste com arquivos externos");
})

//rota para a função add
app.get('/add/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt (req.params.b);

    const resultado = funcoes.add(a,b);

    res.send(`A soma de ${a} com ${b} é ${resultado}`);
})

//criar a rota para sub (com hífen)
app.get('/sub/:a-:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt (req.params.b);

    const resultado = funcoes.sub(a,b);

    res.send(`A subtração de ${a} com ${b} é ${resultado}`);
})

//rota com divisão
app.get('/div/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt (req.params.b);

    const resultado = funcoes.div(a,b);

    res.send(`A divisão de ${a} com ${b} é ${resultado}`);
})


//rota com multiplicação
app.get('/mul/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt (req.params.b);

    const resultado = funcoes.mul(a,b);

    res.send(`A multiplicação de ${a} com ${b} é ${resultado}`);
})