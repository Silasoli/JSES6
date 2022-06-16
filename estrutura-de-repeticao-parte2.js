var nomes = ["MARIA", "JOAO", "PEDRO"];

for (let i = 0; i < nomes.length; i++) {
  const element = nomes[i];
  console.log(element);
}

var pessoa = {
  nome: "Filipe",
  idade: 12,
  sexo: "M",
};
for (const i in pessoa) {
  if (pessoa.hasOwnProperty(i)) {
    const element = pessoa[i];
    console.log(element);
  }
}

var endereco = {
  endereco: "Rua do campo",
  bairro: "Campo Sujo",
  cep: "44033-000",
};

for (const i in endereco) {
  const element = endereco[i];
  console.log(i, element);
}

for (const i in nomes) {
  const element = nomes[i];
  console.log(i, element);
}

var map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

for (const iterator of map) {
  console.log(iterator);
}

for (let [key, value] of map) {
  console.log(key, value);
}
