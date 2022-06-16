//declarando vetores / array
var v = [];
var e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var t = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(v);
console.log(e);
console.log(t);

v[0] = 12;
v[4] = 5;
console.log(v);

//adicionar item ao array
v.push(10);
console.log(v);
v[1] = 777;
console.log(v);


var nomes =  ['joão', 'pedro','maria'];

var x,y,z;

// x = nomes[0];
// y = nomes[1];
// z = nomes[2];
//console.log(x,y,z);

var [x,y,z] = nomes;
console.log(x,y,z);

