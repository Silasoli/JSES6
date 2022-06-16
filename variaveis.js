//variaveis ES5
var x, y;

x = 5;
y = 6;
var soma = x + y;

//variaveis ES6
//let e const

//const
//depois de definir o valor da constante ele não pode ser mudado
const PI = 3.14;

//let
//variavel de escopo

const array = [1, 2, 3, 4, 5, 6, 7, 8];

// for (var index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
// }
// console.log("valor: " + index);

//Se a variavel "index" for VAR todo o código terá acesso a ela e o console.log vai funcionar.


//Se a variavel "index" for let, ela só vai existir dentro do espoco da função ou do for, melhor dizendo, dentro do espoco das {};
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}
console.log("valor: " + index);
//console.log acima não vai funcionar
