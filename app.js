const express = require('express')
const exphbs =require('express-handlebars');
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose') 
//mongoDByi indirip projemize require ettik
const bodyParser = require('body-parser')

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

//parse application/x-www.-form-urlencoded
app.use(bodyParser.urlencoded({ extended : false }))

//parse application/json
app.use(bodyParser.json())



const main = require('./routes/main')
const posts = require('./routes/posts')
app.use('/', main)
app.use('/posts', posts)

app.listen(port, hostname, ()=> {
  console.log(`Server is running, http://${hostname}:${port}/`)
})