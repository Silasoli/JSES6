var nomes = ["Pedro", "Maria", "João", "Sabrina", "Breno", "Ana"];
var idades = [12, 42, 19, 23, 25, 31, 53, 72];

//array ES6

nomes.forEach(function (v, i) {
  console.log(i, v);
});

idades.forEach(function (v, i) {
  console.log(i, v);
});

// for (const key in nomes) {
//     console.log(key, nomes[key]);
// }

var idade = idades.every(function (v, i, array) {
  return v >= 12;
});
console.log(idade);

var nome = nomes.every(function (v, i, array) {
  return typeof v === "string";
});
console.log(nome);

var n = idades.filter(function (v, i, array) {
  return v > 30;
});
console.log(n);

var s = [1, 2, 3, 4];

var total = s.reduce(function (a, b, i, array) {
    return a + b;
});
console.log(total);

var sreduce = [1,1,1,4];

var total1 = sreduce.reduceRight(function (a,b) {
    return a - b;
})
console.log(total1);

var t =  idades.some(function (v, i) {
    return v < 12;    
})
console.log(t);
//some x every
//some: se um satifaz a condição = true
//every todos tem que satisfazer para ser true