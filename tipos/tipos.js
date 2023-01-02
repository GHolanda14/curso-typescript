"use strict";
let nome = "Gabriel";
let idade = 23;
let formado = false;
//Enum
var Semestre;
(function (Semestre) {
    Semestre[Semestre["Primeiro"] = 1] = "Primeiro";
    Semestre[Semestre["Segundo"] = 2] = "Segundo";
    Semestre[Semestre["Terceiro"] = 3] = "Terceiro";
    Semestre[Semestre["Quarto"] = 4] = "Quarto";
    Semestre[Semestre["Quinto"] = 5] = "Quinto";
    Semestre[Semestre["Sexto"] = 6] = "Sexto";
    Semestre[Semestre["Setimo"] = 7] = "Setimo";
    Semestre[Semestre["Oitavo"] = 8] = "Oitavo";
})(Semestre || (Semestre = {}));
const app = document.getElementById("app");
const info = document.createElement("div");
const p = document.createElement("p");
const spanIdade = document.createElement("span");
spanIdade.textContent = `tenho ${idade} anos.`;
p.textContent = `Meu nome é ${nome}, `;
p.append(spanIdade);
const p2 = document.createElement("p");
p2.textContent = formado ? "Sou formado em " : "Sou estudante de ";
p2.textContent += `Sistemas de informação na UFC, ${!formado && `estou no ${Semestre.Sexto}º semestre.`}`;
info === null || info === void 0 ? void 0 : info.appendChild(p);
info === null || info === void 0 ? void 0 : info.appendChild(p2);
app === null || app === void 0 ? void 0 : app.append(info);
const h1 = document.getElementsByTagName("h1")[0];
h1.textContent = "Seja bem-vindo";
//array tipado
let hobbies = ["Jogar Valorant", "Estudar tecnologias novas", "Tocar violão", "Viajar", "Sair com a namorada"];
const ul = document.createElement("ul");
hobbies.map((hobbie) => {
    const li = document.createElement("li");
    li.textContent = hobbie;
    ul.appendChild(li);
});
info === null || info === void 0 ? void 0 : info.appendChild(ul);
//tupla
let celular = ["Operadora Oi", 88, 988128765];
const p3 = document.createElement("p");
p3.textContent = `Telefone para contato: (${celular[1]}) ${celular[2].toString().slice(0, 5)}-${celular[2].toString().slice(5)}`;
info === null || info === void 0 ? void 0 : info.appendChild(p3);
//funções
function alterarIdade(age) {
    spanIdade.textContent = `tenho ${age} anos.`;
    p.append(spanIdade);
}
let inputIdade = document.createElement("input");
inputIdade.setAttribute("type", "number");
app === null || app === void 0 ? void 0 : app.appendChild(inputIdade);
let btnIdade = document.createElement("button");
btnIdade.onclick = () => alterarIdade(inputIdade.value ? parseInt(inputIdade.value) : idade);
btnIdade.textContent = "Alterar idade";
app === null || app === void 0 ? void 0 : app.appendChild(btnIdade);
//Objetos
let usuario = {
    nome,
    idade
};
console.log(usuario);
app === null || app === void 0 ? void 0 : app.append(document.createElement("br"));
app === null || app === void 0 ? void 0 : app.append(document.createElement("br"));
//Desafio Objetos
let divFunc = document.createElement("div");
let infoFunc = document.createElement("h2");
infoFunc.textContent = "Supervisores: ";
const pontoFunc = document.createElement("p");
pontoFunc.textContent = "Status: ";
let funcionario = {
    supervisores: ["Ygor", "Regis"],
    baterPonto(hora) {
        if (hora > 8) {
            pontoFunc.textContent = "Status: Fora do horário";
            return "Fora do horario";
        }
        else {
            pontoFunc.textContent = "Status: Ponto normal";
            return "Ponto normal";
        }
    }
};
const listaSupervisores = document.createElement("ul");
funcionario.supervisores.map((supervisor) => {
    const li = document.createElement("li");
    li.textContent = supervisor;
    listaSupervisores.appendChild(li);
});
divFunc === null || divFunc === void 0 ? void 0 : divFunc.appendChild(infoFunc);
divFunc === null || divFunc === void 0 ? void 0 : divFunc.appendChild(listaSupervisores);
divFunc === null || divFunc === void 0 ? void 0 : divFunc.appendChild(pontoFunc);
app === null || app === void 0 ? void 0 : app.appendChild(divFunc);
let inputPonto = document.createElement("input");
inputPonto.setAttribute("type", "number");
app === null || app === void 0 ? void 0 : app.appendChild(inputPonto);
let btnPonto = document.createElement("button");
btnPonto.onclick = () => funcionario.baterPonto(inputPonto.value ? parseInt(inputPonto.value) : 0);
btnPonto.textContent = "Bater ponto";
app === null || app === void 0 ? void 0 : app.appendChild(btnPonto);
//Union types
let nota = 10; //Pode ser number ou string
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
//Chegando tipos
if (typeof nota === "number") {
    console.log("É number");
}
else {
    console.log(typeof nota);
}
//Tipo Never, nunca chegará ao fim corretamente
function erro(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Detergente",
    preco: -10,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            erro("O produto precisa de um nome");
        }
        if (this.preco <= 0) {
            erro("O preço do produto é inválido");
        }
    }
};
produto.validarProduto();
const contato = {
    nome: "Beltrano",
    tel1: "988127384",
    tel2: null
};
console.log(contato);
let algo = null; //O tipo null é considerado como any
algo = 12; //funciona
algo = "haha"; //também funciona
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
// interface Endereco{
//     rua: string,
//     numero: number,
//     complemento: string
// }
// let endereco: Endereco = {rua: "Rua mais bonita", numero: 3092, complemento: "Apto 204"}
// console.log(endereco)
