
/*const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const indexPage = fs.readFileSync('index.html') 
*/

/* readFileSync yardımıyla çağırıyoruz. 
readFileSync metodu senkron olarak çalışır. 
readFile metodu da asenkron olarak calısır. 
(callback kullanmadıgımız zaman bir asenkron metotta hata alıyoruz. 
node.js'in asenkron metotları 2.parametre olarak callback fonksiyonu alır.) */

/*
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')*/
//const errorPage = fs.readFileSync('404.html')

/*
const server = http.createServer((req,res) => { 
  if(req.url === '/'){
    return res.end(indexPage)
  }else if(req.url === '/about'){
    return res.end(aboutPage)
  }else if(req.url ==='/contact'){
    return res.end(contactPage)
  }else {
    res.statusCode = 404
    res.end("errorPage")
  }
})

server.listen(port,hostname,() =>{
  console.log(` Server calisiyor, http://${hostname}:${port}/`)
})*/


const path = require('path')
const express = require('express')
const app = express() 
//express'in bir tane instance'ini oluşturuyoruz denebilir.
const port =3000
const hostname = '127.0.0.1'


app.get('/', (req,res) =>{
  res.sendFile(path.resolve(__dirname,'index.html'))
})

app.get('/about', (req,res) =>{
  res.sendFile(path.resolve(__dirname,'about.html'))
})

app.get('/contact', (req,res) =>{
  res.sendFile(path.resolve(__dirname,'contact.html'))
})

//path
app.get('/users/:userID/movies/:moviesID', (req,res) =>{
  res.send(
    `<h1> Kullanici Adi: ${req.params.userID}</h1>
     <h1> Film Adi: ${req.params.moviesID}</h1>
    `
  )
})

app.listen(port,hostname, ()=> {
  console.log(`Server calisiyor, http://${hostname}:${port}/`)
})