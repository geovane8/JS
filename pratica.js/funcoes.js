//criando a 1ª função em js

function divisivelPor(a, b) {
    if (a % b === 0) {
        console.log(a + 'é divisível por' + b);
    } else {
        console.log(a + 'Não é divisível por' + b);
    }
}

divisivelPor(5, 3)

//incluindo outra função

function ehPar(n) {
    divisivelPor(n, 2);
}

ehPar(120)