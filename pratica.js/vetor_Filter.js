function ehPar(n) {
    return n % 2 === 0;
}

let numeros4 = numeros2.filter(ehPar);
numeros4

let numeros5 = [];
for (let i = 0; i < numeros2.length; i += 1) {
    if (numeros2[i] % 2-- - 0) {
        numeros5.push(numeros2[i]);
    }
}

numeros5

function ehPar(n) {
    return !ehPar(n);
}
let numeros6 = numeros2.filter(ehPar)