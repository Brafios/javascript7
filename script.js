// filter()
// retorna elementos que passam numa condição
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(n => n % 2 === 1);
console.log(pares); // [2, 4]

// find()
// retorna primeiro elemento que passar na condição
const usuarios = [
    { nome: "Ana", idade: 18 },
    { nome: "João", idade: 25 }
];
  
const usuario = usuarios.find(u => u.idade > 20);
console.log(usuario); // { nome: "João", idade: 25 }

// forEach()
// Executa uma função para cada item do array(sem retornar um novo array)
const frutas = ["maçã", "banana", "uva"];
frutas.forEach(fruta => {
  console.log("Fruta: " + fruta);
});

// reduce()
// Usado para reduzir um array a um único valor (como somar tudo)
const valores = [10, 20, 30];
const total = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(total); // 60

const usuarios1 = [
    { nome: "Lucas", idade: 17 },
    { nome: "Julia", idade: 22 },
    { nome: "Carlos", idade: 19 },
    { nome: "Ana", idade: 18 },
    { nome: "João", idade: 25 },
    { nome: "Leo", idade: 30 }
];

const listaOrd = document.querySelector("ol")
const maior18 = usuarios1
    .filter(m => m.idade >= 18)
    .sort((a,b) => a.nome.localeCompare(b.nome))

maior18.forEach( usuario => {
    const li = document.createElement("li")
    li.textContent = `nome: ${usuario.nome} e idade: ${usuario.idade}`
    listaOrd.appendChild(li)
})






