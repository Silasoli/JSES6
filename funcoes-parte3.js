//ES6 FUNÇÕES GERADORAS

function* arcoires() {
    yield "azul";
    yield "amarelo";
    yield "vermelho";
}

for (let iterator of arcoires()) {
    console.log(iterator)
}

function* perguntas() {
    const nome = yield "Qual seu nome?";
    const idade = yield "Qual sua idade?";
    return `Nome: ${nome}, idade: ${idade}`;
}

const it = perguntas();
console.log(it.next());
console.log(it.next('Sabrina'));
console.log(it.next(17));
