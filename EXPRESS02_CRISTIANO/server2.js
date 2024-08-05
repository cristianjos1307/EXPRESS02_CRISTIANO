const express = require ('express')
const morgan = require('morgan')

const server2 = express()


server2.list(3000)

//criando um middleware para gerar os logs
//server2.use(morgam('tiny'))
//server2.use(morgam(':method :url :status'))
server2.use(morgam('Método = :method | Status = :status | url = :url'))


server2.get('/',(req,res)=>{
    res.send('teste de conexão com o server2')
})