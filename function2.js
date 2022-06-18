//Arrow functions

/* let sum = function(x,y){
   return x + y;
}*/
let sum = (x,y) => x +y
console.log(sum(5,6))


/* let squared = function(x){
   return x*x;
}*/

let sqaured = x => x*x
console.log(sqaured(5));

/* let sayName = function(name){
   return `Benim adim ${name}`
}*/

let sayName = name => `Benim adim ${name}`
console.log(sayName('ahmet'));

/*
let sum2 = function(a,b){
  result = a + b;
  return result
}*/

let sum2 = (a,b) => {
  result = a + b;
  return result
}
console.log(sum2(4,5));