const express = require('express') //Tequerimos express
const app = express() 
app.use(express.static('public'))


app.listen(3030,()=>{
    console.log('Servidor funcionando')
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + ('/views/home.html'))
})


