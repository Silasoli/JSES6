//MANIPULAÇÃO DE STRING ES5

var msg = "olá mundo!";

console.log(msg.charAt(0));
console.log(msg[0]);

console.log(msg.charCodeAt(0));

for (let i = 0; i < msg.length; i++) {
    console.log(msg.charCodeAt(i));
}


var msg1 = "olá";
var msg2 = "mundo";
console.log(msg1 + " " + msg2);

//ES6
console.log(`${msg1} ${msg2}`);

//concat
console.log(msg1.concat(" ", msg2));

//REPLACE
console.log(msg.replace("o", 123));
console.log(msg.replace(/o/g, 123));

//split
var csv = "id,nome,idade,sexo";
console.log(csv.split());
console.log(csv.split(""));
console.log(csv.split(","));

console.log(msg.split(" "));

//SLICE
console.log(msg.slice(0,6));
console.log(msg.slice(0,-2));
console.log(msg.slice(-2));

//substring (não pega negativo)
console.log(msg.substring(0,6));
console.log(msg.substring(2,6));

//TOUPPERCASE
console.log(msg.toUpperCase());

//TOLOWERCASE
console.log(msg.toLowerCase());

//valueOf
console.log(msg.valueOf());

//toString
console.log(msg.toString());

//subStr
console.log(msg.substr(2));