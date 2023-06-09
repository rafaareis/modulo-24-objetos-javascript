// const carroDoJoao = {
//     modelo: 'Fiesta',
//     fabricante: 'Ford',
//     anoDeModelo: 2020,
//     anoDeFabricacao: 2019,
//     acelerar: function() {
//         console.log("vruum");
//     }
// }

// const carroDaMaria = {
//     modelo: 'Ka',
//     fabricante: 'Ford',
//     anoDeModelo: 2021,
//     anoDeFabricacao: 2020,
//     acelerar: function() {
//         console.log("vrum");
//     }
// }

// function Carro(modelo, fabricante, anoDeModelo, anoDeFabricacao) {
//     this.modelo = modelo;
//     this.fabricante = fabricante;
//     this.anoDeModelo = anoDeModelo;
//     this.anoDeFabricacao = anoDeFabricacao;
//     this.acelerar = function() {
//         console.log("acelerar");
//     }
// }

// const carroDoJoao2 = new Carro('Fiesta', 'Ford', 2020, 2019);
// const carroDaMaria2 = new Carro('Ka', 'Ford', 2021, 2020);

// console.log(carroDoJoao2);
// console.log(carroDaMaria2);



// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof ehMaiorDeIdade);
// console.log(typeof conhecimentos);
// console.log(typeof carroDaMaria2);
// console.log('----');
// console.log(conhecimentos instanceof Array);
// console.log(carroDaMaria2 instanceof Carro);

const nome = "Courtney";
const idade = 32;
const ehMaiorDeIdade = true;
const conhecimentos = ["vocais limpos", "vocais guturais"];

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
};


function exibeAtributo(nomeAtributo){
    console.log(pessoa[nomeAtributo]);
}

exibeAtributo('nome');

console.log(pessoa.nome);
console.log(pessoa['nome']);

pessoa.sobrenome = 'LaPlante';
pessoa.sobrenome2 = null;

if(pessoa.sobrenome) {
    console.log("a pessoa tem um sobrenome");
}

if(pessoa.sobrenome2) {
    console.log("a pessoa tem um sobrenome");
}

if('sobrenome2' in pessoa) {
    console.log("a pessoa tem um sobrenome");
}

if('sobrenome' in pessoa) {
    console.log("a pessoa tem um sobrenome");
}

Object.freeze(pessoa);

pessoa.nome = "Tatiana"

console.log(pessoa.nome);
console.log(pessoa['nome']);

console.log(Object.keys(pessoa));
console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));
