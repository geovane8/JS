// usando o for tradicional (normal)
let vetor = [3, 4, 5, 6, 7];

/*for (let i = 0; i < vetor.length; i += 1) {
    console.log(vetor[i]);
}
//usando o for in
for (let i in vetor) { // o 'in' faz a função de invremetar 
    console.log(vetor[i]);
}*/
//usando o For of
for (let elem of vetor) {
    console.log(elem);
}