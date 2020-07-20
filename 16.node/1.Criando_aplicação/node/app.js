const express = require('express');
const app = express();
const mysql = require('mysql')


const bodyparser = require('body-parser')
const  path = require('path')


app.listen('8080',()=>{
    console.log("Servidor rodando...");
});


//Body Parser

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

//conexão com o Banco

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'node'
})

db.connect((err)=>{
    if(err){
        console.log("Não foi possivel conectar no banco de dados")
    }
})

//Rotas
// GET

app.get('/',function(re, res){
    let query = db.query("SELECT * FROM clientes",(err,results)=>{
        res.render('index',{lista:results})
    })
})

app.get('/sobre',function(req, res){
    res.render('sobre',{})
})

app.get('/registrar',(req,res)=>{
    res.render('cadastro',{})
})

// POST

app.post('/registrar',(req,res)=>{
    console.log("Cadastro realizado com sucesso")
    let nome = req.body.nome
    let sobrenome = req.body.sobrenome
    let empresa = req.body.empresa
    db.query("INSERT clientes (nome,sobrenome,empresa) VALUES (?,?,?)",[nome,sobrenome,empresa],(err,results)=>{

    })
    res.render('cadastro',{})
})
