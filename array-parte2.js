var nomes = ["Pedro","Maria","João","Sabrina","Breno","Ana"];
var numeros = [1,2,3,4,5,6];

console.log(nomes.join());
console.log(nomes.join(",  "));
console.log(nomes.join(" - "));
console.log([1,2,'3',"ewsew"].join(" - "));
console.log(numeros.join(" - "));

console.log(nomes.concat(numeros));
console.log(numeros.concat(nomes));

console.log(nomes.indexOf("Breno"));
console.log(nomes.indexOf("Brenoo"));

console.log(nomes.slice(1,3));
console.log(nomes.slice(1,4));
console.log(nomes.slice(2,4));
console.log(nomes.slice(-2));
console.log(nomes.slice(1));
console.log(nomes.slice(0));

//manipulação
//push add item  no final do array
console.log(nomes);
nomes.push("Silas");
console.log(nomes);
//unshift
console.log(nomes);
nomes.unshift("Silas2");
console.log(nomes);
//remover último POP
console.log(nomes);
nomes.pop();
console.log(nomes);
//remover no inicio SHIFT
console.log(nomes);
nomes.shift();
console.log(nomes);


//SPLICE
var n1 = nomes.splice(2, 0, "Sylas");
console.log(n1,nomes);
var n2 = nomes.splice(2, 1, "Sylas");
console.log(n2,nomes);
//splice remover o primeiro
var n3 = nomes.splice(0,1);
console.log(n3,nomes);
var n4 = nomes.splice(nomes.length -1,1);
console.log(n4,nomes);


console.log(nomes.toString());

