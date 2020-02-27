let frutas = ["morango", "maca", "banana"]
let frutas2 = ["jaca", "pera", "uva"]

let frutasFull = [...frutas, ...frutas2]

console.log(frutasFull)

let pessoa = {
    nome:"Lucas",
    idade: 24
}

let info = {
    ...pessoa,
    curso: "SI",
    tel: "123456789",
}

let cadastro = {
    ...info,
    endereco: "Travessa do Tranco"
}

console.log(cadastro)

const funcaoSpread = (...valores) => console.log(valores)

funcaoSpread(1,"7",8,10)