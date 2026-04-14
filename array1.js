//Lista de frutas - ARRAY

const frutas = ["Maçã", "Banana", "Abacate", "Manga" ];
//ÌNDICE frutas    0        1         2         3

console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas.length);
frutas[1] = "Morango"; //Altera o valor do elemento
frutas.push("Pessego");
frutas.push("Melão");
frutas.unshift("Pera");
console.log(frutas)
console.log(frutas.length);