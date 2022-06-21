const express = require('express') /*Bu yönlendirmelerin çalışması için express'i import etmem gerek. */
const router = express.Router() //bu Router class'i bir MiddleWare. app.js içerisinde middleware kullanarak gerekli olan yönlendirmeleri yapacagız.
const Post = require('../models/Post')


router.get('/',(req,res) => {
  res.render('site/index') //render express'e ait olan bir fonksiyon.
})

router.get('/about',(req,res) => {
  res.render('site/about')
})

router.get('/blog',(req,res) => {
  /*Veritabanindaki tüm postlari bul. Sonrasında Posts olarak bu postslari site/blog içerisine gönder. */
  Post.find({}).lean().then(posts => {
    res.render('site/blog', {posts:posts})
  })
})

router.get('/contact',(req,res) => {
  res.render('site/contact')
})

router.get('/login',(req,res) => {
  res.render('site/login')
})

router.get('/register',(req,res) => {
  res.render('site/register')
})


module.exports = router