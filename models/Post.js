const mongoose = require('mongoose')

//MongoDB'ye ilgili model dosyasını oluşturduk. Model dosyasını nasıl oluşturduk? Olmasını istediğimiz dokümanın nasıl olmasını istiyorsak ona göre oluşturduk

const PostSchema = new mongoose.Schema({
  title : { type: String, required: true },
  content : { type: String, required: true },
  date : { type: Date, default: Date.now },
  post_image : { type: String, required: true }

})

module.exports = mongoose.model('Post', PostSchema)
//Schema'nin bir instance'ini oluşturduk.