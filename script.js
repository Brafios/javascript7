// filter()
// retorna elementos que passam numa condição
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(n => n % 2 === 0);
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