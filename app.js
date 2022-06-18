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
app.set('view engine','handlebars')



app.get('/',(req,res) => {
  res.render('site2/index')
})

app.get('/about',(req,res) => {
  res.sendFile(path.resolve(__dirname, 'site/about.html'))
})

app.get('/blog',(req,res) => {
  res.sendFile(path.resolve(__dirname, 'site/blog.html'))
})

app.listen(port, hostname, ()=> {
  console.log(`Server is running, http://${hostname}:${port}/`)
})