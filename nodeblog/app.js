const http = require('http')
const fs = require('fs')


const hostname = '127.0.0.1'
const port = 3000

const indexPage = fs.readFileSync('index.html') 
/* readFileSync yardımıyla çağırıyoruz. 
readFileSync metodu senkron olarak çalışır. 
readFile metodu da asenkron olarak calısır. 
(callback kullanmadıgımız zaman bir asenkron metotta hata alıyoruz. 
node.js'in asenkron metotları 2.parametre olarak callback fonksiyonu alır.) */
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const errorPage = fs.readFileSync('404.html')


const server = http.createServer((req,res) => { 
  if(req.url === '/'){
    return res.end(indexPage)
  }else if(req.url === '/about'){
    return res.end(aboutPage)
  }else if(req.url ==='/contact'){
    return res.end(contactPage)
  }else {
    res.statusCode = 404
    res.end(errorPage)
  }
})

server.listen(port,hostname,() =>{
  console.log(` Server calisiyor, http://${hostname}:${port}/`)
})