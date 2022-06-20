/*Bu yönlendirmelerin çalışması için express'i import etmem gerek. */
const express = require('express')
const router = express.Router() //bu Router class'i bir middleware. app.js içerisinde middleware kullanarak gerekli olan yönlendirmeleri yapacagız.

router.get('/',(req,res) => {
  res.render('site/index') //render express'e ait olan bir fonksiyon.
})

router.get('/about',(req,res) => {
  res.render('site/about')
})

router.get('/blog',(req,res) => {
  res.render('site/blog')
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