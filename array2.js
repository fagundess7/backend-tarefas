const alunos = ["Ana", "Bruna", "Carla"];

alunos.push("Diego");
alunos.unshift("Alan"); //Adiciona elemento no final do array
console.log(alunos); //Adiciona elemento no inicio do array

const removido = alunos.pop();
console.log(removido);
console.log(alunos);

console.log(alunos.indexOf("Carla"));
console.log(alunos.indexOf("Pedro"));

console.log(alunos.includes("Ana"));
console.log(alunos.includes("Paula"));