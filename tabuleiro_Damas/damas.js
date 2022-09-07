function criarTabuleiro() {
    return ('#,p,#,p,#,p,#,p,' +
        'p,#,p,#,p,#,p,#,' +
        '#,p,#,p,#,p,#,p,' +
        ' ,#, ,#, ,#, ,#,' +
        '#, ,#, ,#, ,#, ,' +
        'b,#,b,#,b,#,b,#,' +
        '#,b,#,b,#,b,#,b,' +
        'b,#,b,#,b,#,b,#,').split(',');

}

function imprimirTabuleiro(tabuleiro) {
    let tabela = [];

    for (let i = 0; i < 64; i += 8) {
        tabela.push(tabuleiro.slice(i, i + 8));
    }

    console.table(tabela);
}