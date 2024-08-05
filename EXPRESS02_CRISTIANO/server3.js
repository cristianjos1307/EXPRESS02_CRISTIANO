const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log("Servidor em execução")
})

//rotas com parametro
app.get('/',(req,res)=>{
    res.send('Olá mundo')
})

//rota com 1 parametro
app.get('/ola/:nome',(req,res)=>{
    console.log(req.params.nome)
    res.send("Olá"+req.params.nome)
})

//rota com 2 parametros
app.get('/ola/:nome/:empresa',(req,res)=>{
    res.send("Olá"+req.params.nome+ ' da empresa '+req.params.empresa)
})

//rota com soma de dois parametros
app.get('/soma/:a/:b', (req,res)=>{
    res.send('O resultado da soma de :'+req.params.a +' e '+req.params.b+ 'é :'+(parseInt(rec.params.a)+parseInt(recparams.b)))

})