// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido 
// e caso contrário, retorne false, use some.

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const wanted = 'Ana';

const hasName = (arr, name) => arr.some((wantedName) => wantedName === name);

console.log(`Nome requerido: ${wanted} -`, hasName(names, wanted));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se 
// todas tiverem a idade maior ou igual a mínima e caso contrário false , use every.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((person) => person.age >= minimumAge);

console.log(`Idade mínima: 18 -`, verifyAges(people, 18));
