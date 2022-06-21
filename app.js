const express = require('express')
const exphbs =require('express-handlebars');
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose') 
const bodyParser = require('body-parser')
//mongoDByi indirip projemize require ettik
const fileUpload = require('express-fileupload')
const generateDate = require('./helpers/generateDate').generateDate
const expressSession = require('express-session')

//MongoDB'e baglanti oluşturduk
mongoose.connect('mongodb://127.0.0.1/nodeblog_db',{
  useNewUrlParser : true,
  useUnifiedTopology : true
})


app.use(expressSession({
  secret: 'test',
  resave:false,
  saveUninitialized: true,
}));

// Flash - Message Middleware

app.use((req,res,next)=> {
  res.locals.sessionFlash = req.session.sessionFlash
  delete req.session.sessionFlash
  next()
})



app.use(fileUpload())


//middleware 
app.use(express.static('public'))
//index.html 'de herhangi bir statik dosyaya bakmak istiyorsa önce public dosyamızın içerisine gidiyor. Sonra public dosyasının içerisindeki css dosyasına gidiyor. Ve oradaki css dosyalarını çekiyor. 




app.engine('handlebars', exphbs.engine({helpers:{generateDate:generateDate}})) 
//exphbs fonksiyonu default olarak layout klasörünün içerisine girip main.handlebars'i alıyor.

app.set('view engine','handlebars')

//parse application/x-www.-form-urlencoded
app.use(bodyParser.urlencoded({ extended : false }))

//parse application/json
app.use(bodyParser.json())



const main = require('./routes/main')
const posts = require('./routes/posts.js')
const users = require('./routes/users')
app.use('/', main)
app.use('/posts', posts)
app.use('/users', users)


app.listen(port, hostname, ()=> {
  console.log(`Server is running, http://${hostname}:${port}/`)
})