let numeros = [10, 20, 30, 40, 50];

numeros.push(60); // add elemento ao vetor
numeros.shift(); // remove o 1º elemento do vetor
numeros.unshift();
numeros.pop(); // remove o ultimo elemento do vetor
numeros.splice // remove ou parte de todos os elementos de um vetor
numeros.length

numeros[0];

let functionarios = ['fabricio', 'hector'];
let functionarios_2 = ['Guilerme', 'Yago'];

functionarios
functionarios_2

let todosFuncionarios = functionarios.concat(functionarios_2) //concat junta cocatena os vetores

todosFuncionarios;


// função dentro de funcção - usandando map

function multiplicarPor10(n) {
    return n * 10;

}
let numeros3 = numeros.map(multiplicarPor10);
numeros3