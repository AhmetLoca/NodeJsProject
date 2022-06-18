let sayName = require('./sayName')
let sayAge= require('./sayAge')

/* index.js sayName ve sayAge'i require ediyor. */

module.exports = {
  sayName,  /* boş obje atıyoruz */
  sayAge
}