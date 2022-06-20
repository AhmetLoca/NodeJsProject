const path = require('path')
const express = require('express')
const exphbs =require('express-handlebars');
const app = express()
const port = 3000
const hostname = '127.0.0.1'

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

app.listen(port, hostname, ()=> {
  console.log(`Server is running, http://${hostname}:${port}/`)
})