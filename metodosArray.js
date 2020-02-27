let pessoa = ["Lucas"]
console.log(`Array inicial: ${pessoa}`)

//push
console.log("")
console.log("------- push ----------")
pessoa.push(24)
console.log(pessoa)

//pop
console.log("")
console.log("------- pop ----------")
let excluido = pessoa.pop();
console.log(pessoa)
console.log(excluido)

//unshift
console.log("")
console.log("------- unshift ----------")
pessoa.unshift(24)
console.log(pessoa)

//shift
console.log("")
console.log("------- shift ----------")
pessoa.shift()
console.log(pessoa)

//indexOf
console.log("")
console.log("------- indexOf ----------")
let pessoa2 = ["Matheus", 1.74,"Esquerda", 27, "Matheus"]
console.log(pessoa2.indexOf("Esquerda"))

//lastIndexOf
console.log("")
console.log("------- lastIndexOf ----------")
console.log(pessoa2.lastIndexOf("Matheus"))

//join
console.log("")
console.log("------- join ----------")
console.log(pessoa2.join(" / "))