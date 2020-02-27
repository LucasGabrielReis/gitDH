let numerosPares = [2,4,6,8,10]

// map
console.log("------ MAP ----------")
numerosPares.map( (valor) =>{
    console.log(valor * 5)
})

let dobro = numerosPares.map( (valor) =>{
    return valor * 2
})

console.log(dobro)

// filter
console.log("")
console.log("------ FILTER ----------")

let numerosFiltrados = numerosPares.filter( (filtro) => {
    return filtro < 6
})

console.log(numerosFiltrados);

// reduce
console.log("")
console.log("------ REDUCE ----------")

let soma = numerosPares.reduce((acumulador, numeroAtual) =>{
    return acumulador + numeroAtual
})

console.log(soma)

console.log("")
console.log("------ FOR EACH ----------")

numerosPares.forEach( (valor, indice) =>{
    console.log(`O indice ${indice} tem o valor ${valor}`)
})