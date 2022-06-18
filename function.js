/*function makeFile(){
  console.log('Dosya oluştur')
}

makeFile()*/


function makeFile(callback){
  console.log('Dosya Oluştur.')
  let file = {
    name : 'JSFile'
  }
  callback(file)
}
/* Ana fonksiyonumuz dosya oluşturmaya başladığı anda callback fonksiyonunu da çalıştırıyor. 
Biz callback fonksiyonlarında veri taşıyabiliyoruz.*/
makeFile(function(myFile){
  console.log(` ${myFile.name} Dosya oluşturulmaya başlandi.`);
})
/* Callback fonksiyonlarında veri alışverişi yapabiliriz. */