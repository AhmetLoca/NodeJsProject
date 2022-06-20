//verileri düzgün görebilmek için bir tane test.js dosyası oluşturduk
const mongoose = require('mongoose')
const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db',{
  useNewUrlParser : true,
  useUnifiedTopology : true
})


Post.findByIdAndUpdate('62b08277e94009faab19f1bd',{
  title : 'ikinci basligim'
},(error,post)=>{
  console.log(error,post)
})



/*
//Statik verimizi oluşturduk
Post.create({
  title : 'İkinci post basligim',
  content : 'İkinci post içeriği, lorem ipsum text'
}, (error,post)=>{
  console.log(error, post)
})*/