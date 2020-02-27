let pessoa = {
    nome: "Lucas",
    idade: 24,
    altura: 1.79
}

let {nome, idade, altura} = pessoa;

console.log(`${nome} ${idade} ${altura}`)

let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [, bariloche, , china ,] = destinosIncriveis

console.log(bariloche, china)