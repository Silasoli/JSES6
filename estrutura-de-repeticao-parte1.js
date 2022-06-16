//while e do while

var contador = 0;
var contador2 = 11;

// while (contador <= 10) {
//   console.log(`contador${contador}`);
//   contador++;
// }

//executa no minimo 1x
do {
  console.log(contador2);
  contador2++;
} while (contador2 <= 10);
console.log(contador2);

do {
  console.log(contador);
  contador++;
  if (contador == 2) {
    break;
  }
} while (contador <= 10);
console.log(contador);

do {
  if (contador % 2 == 0) {
    contador++;
    continue;
  }
  console.log(contador);
  contador++;
} while (contador <= 10);
