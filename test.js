//verileri düzgün görebilmek için bir tane test.js dosyası oluşturduk

const mongoose = require('mongoose')
const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db',{
  useNewUrlParser : true,
  useUnifiedTopology : true
})


//Statik verimizi oluşturduk
Post.create({
  title : 'Benim ilk post basligim',
  content : 'Post içeriği, lorem ipsum text'
}, (error,post)=>{
  console.log(error, post)
})