let nome = "Gabriel"
let idade = 23
let formado: boolean = false

//Enum
enum Semestre{
    Primeiro = 1,
    Segundo,
    Terceiro,
    Quarto,
    Quinto,
    Sexto,
    Setimo,
    Oitavo,

}

const app  = document.getElementById("app")
const info = document.createElement("div")

const p = document.createElement("p")
const spanIdade = document.createElement("span")
spanIdade.textContent = `tenho ${idade} anos.`
p.textContent = `Meu nome é ${nome}, `
p.append(spanIdade)

const p2 = document.createElement("p")
p2.textContent = formado ? "Sou formado em " : "Sou estudante de "
p2.textContent += `Sistemas de informação na UFC, ${!formado && `estou no ${Semestre.Sexto}º semestre.`}`

info?.appendChild(p)
info?.appendChild(p2)
app?.append(info)

const h1 = document.getElementsByTagName("h1")[0]
h1.textContent = "Seja bem-vindo"

//array tipado
let hobbies: string[] = ["Jogar Valorant","Estudar tecnologias novas","Tocar violão", "Viajar", "Sair com a namorada"]
const ul = document.createElement("ul")

hobbies.map((hobbie) =>{
    const li = document.createElement("li")
    li.textContent = hobbie
    ul.appendChild(li)
})

info?.appendChild(ul)

//tupla
let celular: [string, number,number] = ["Operadora Oi", 88,988128765]
const p3 = document.createElement("p")
p3.textContent = `Telefone para contato: (${celular[1]}) ${celular[2].toString().slice(0,5)}-${celular[2].toString().slice(5)}`
info?.appendChild(p3)

//funções
function alterarIdade(age :number){
    spanIdade.textContent = `tenho ${age} anos.`
    p.append(spanIdade)
}

let inputIdade = document.createElement("input")
inputIdade.setAttribute("type","number")
app?.appendChild(inputIdade)

let btnIdade = document.createElement("button")
btnIdade.onclick = () => alterarIdade(inputIdade.value ? parseInt(inputIdade.value) : idade)
btnIdade.textContent = "Alterar idade"
app?.appendChild(btnIdade)


//Objetos
let usuario: {nome: string, idade: number,} = {
    nome,
    idade
}
console.log(usuario)

app?.append(document.createElement("br"))
app?.append(document.createElement("br"))

//Desafio Objetos
let divFunc = document.createElement("div")
let infoFunc = document.createElement("h2")
infoFunc.textContent = "Supervisores: "


const pontoFunc = document.createElement("p")
pontoFunc.textContent = "Status: "

let funcionario: {
    supervisores: string[],
    baterPonto: (horas: number) => string
    } = {
    supervisores: ["Ygor","Regis"],
    baterPonto(hora){
        if(hora > 8){
            pontoFunc.textContent = "Status: Fora do horário"
            return "Fora do horario"
        }else{
            pontoFunc.textContent = "Status: Ponto normal"
            return "Ponto normal"
        }
         
    }
}

const listaSupervisores = document.createElement("ul")
funcionario.supervisores.map((supervisor) =>{
    const li = document.createElement("li")
    li.textContent = supervisor
    listaSupervisores.appendChild(li)
})

divFunc?.appendChild(infoFunc)
divFunc?.appendChild(listaSupervisores)
divFunc?.appendChild(pontoFunc)

app?.appendChild(divFunc)


let inputPonto = document.createElement("input")
inputPonto.setAttribute("type","number")
app?.appendChild(inputPonto)

let btnPonto = document.createElement("button")
btnPonto.onclick = () => funcionario.baterPonto(inputPonto.value ? parseInt(inputPonto.value) : 0)
btnPonto.textContent = "Bater ponto"
app?.appendChild(btnPonto)

// interface Endereco{
//     rua: string,
//     numero: number,
//     complemento: string
// }
// let endereco: Endereco = {rua: "Rua mais bonita", numero: 3092, complemento: "Apto 204"}
// console.log(endereco)



