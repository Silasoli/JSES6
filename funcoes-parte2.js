//ES5
var mostraMensagem = function (x) {
  console.log(x);
};

mostraMensagem("olá mundo!");

//ES6 função lambda
var showMessage = (x) => {
  console.log(x);
};

showMessage("Olá mundo!, arrow function");

//var showMessage2 = x => console.log(x);
//showMessage2("Olá mundo!, arrow function 2");

var showMessage3 = (x) => {
  console.log(x);
};
showMessage3("Olá mundo!, arrow function 3");

//funções encapsuladas
(function (x, y) {
  console.log(x, y);
})(10, 5);

//reduzida

var resultSum = ((...params) => {
  var s = 0;
  for (let index = 0; index < params.length; index++) {
    const element = params[index];
    s += element;
  }
  return s;
})(10, 6);
console.log(resultSum);