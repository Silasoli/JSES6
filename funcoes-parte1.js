//funções parte 1 ES5

function soma1(x, y) {
  console.log(x + y);
}
soma1(10, 6);

//não executa a parte de cima, executa sempre oque vem depois.

function soma2(x,y) {
    return x + y;
}

var result = soma2(5,2);
console.log(result);

//funções anonimas
var soma  = function (x, y) {
    return x + y;
}