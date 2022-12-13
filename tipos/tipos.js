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
p.textContent = `Meu nome é ${nome}, tenho ${idade} anos.`;
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
// interface Endereco{
//     rua: string,
//     numero: number,
//     complemento: string
// }
// let endereco: Endereco = {rua: "Rua mais bonita", numero: 3092, complemento: "Apto 204"}
// console.log(endereco)
