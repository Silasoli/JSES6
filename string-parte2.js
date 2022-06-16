//STRING PARTE 2

var msg = "olá mundo!";
console.log(msg);

//ES5
console.log(msg.indexOf("lá"));
console.log(msg.indexOf("o"));

console.log(msg.lastIndexOf("o"));

//se não achar retorna -1
console.log(msg.indexOf("dsadasds"));
console.log(msg.lastIndexOf("dsadsads"));

//NOVOS RECURSOS DO ES6
console.log(msg.search("á"));
console.log(msg.search(/do/));

//HTML
console.log(msg.bold());
console.log(msg.big().sub());
console.log(msg.big().fontsize(12));

//
console.log(msg.startsWith("ol"));
console.log(msg.endsWith("do!"));


console.log(msg.includes("i"));

console.log(msg.includes("olá", 0));
console.log(msg.includes("olá", 1));

//criar recurso

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.substring(1, this.length).toLowerCase();
    console.log(this)
};

console.log(msg.capitalize());
