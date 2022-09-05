function divisivelPor5(n) {
    return n % 5 === 0;
}
vetor.find(divisivelPor5); // retorna 5

vetor.findIndex(divisivelPor5); //retorna 2

vetor.indexOf(2); // retorna -1 quando n existe o indice

function menorQue10(n) {
    return n < 10;
}
vetor.every(divisivelPor5); //retorna false
vetor.every(menorQue10); // retorna true

vetor.some(divisivelPor5); //retorna true
vetor.some(menorQue10); //retorna true

function maiorOuIgualA10(n) {
    return !menorQue10(n);
}
vetor.some(maiorOuIgualA10); //retorna false