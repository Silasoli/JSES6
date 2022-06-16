var x = 100;
var y = 5;

console.log(x);
x += y;
console.log(x);
x -= y;
console.log(x);
x *= y;
console.log(x);
x /= y;
console.log(x);

console.log(-x);//inverte o valor de X

//ES5
//var msg;
//var nome = "Pedro";
// var msg = "olá " + nome + "!";
// console.log(msg);

//ES6
var msg;
var nome = "Paulo";
var texto = `Olá
${nome}
!`
console.log(texto);
