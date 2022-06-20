const path = require('path')
const express = require('express')
const exphbs =require('express-handlebars');
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose') 
//mongoDByi indirip projemize require ettik

//MongoDB'e baglanti oluşturduk
mongoose.connect('mongodb://127.0.0.1/nodeblog_db',{
  useNewUrlParser : true,
  useUnifiedTopology : true
})


//middleware 
app.use(express.static('public'))
//index.html 'de herhangi bir statik dosyaya bakmak istiyorsa önce public dosyamızın içerisine gidiyor. Sonra public dosyasının içerisindeki css dosyasına gidiyor. Ve oradaki css dosyalarını çekiyor. 

app.engine('handlebars',exphbs.engine()) 
//exphbs fonksiyonu default olarak layout klasörünün içerisine girip main.handlebars'i alıyor
app.set('view engine','handlebars')



app.get('/',(req,res) => {
  res.render('site/index') //render express'e ait olan bir fonksiyon.
})

app.get('/about',(req,res) => {
  res.render('site/about')
})

app.get('/blog',(req,res) => {
  res.render('site/blog')
})

app.get('/contact',(req,res) => {
  res.render('site/contact')
})

app.get('/login',(req,res) => {
  res.render('site/login')
})

app.get('/register',(req,res) => {
  res.render('site/register')
})


app.listen(port, hostname, ()=> {
  console.log(`Server is running, http://${hostname}:${port}/`)
})