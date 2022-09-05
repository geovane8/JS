function criarMoeda(nome, sigla, valor) {
    return { nome, sigla, valor };
}

let moedas = {
    usd: criarMoeda('Dolar', 'USD', 5.56810),
    eur: criarMoeda('Euro', 'EUR', 6.63457),
    gbp: criarMoeda('Libra', 'GBP', 7.64738),
    jpy: criarMoeda('Iene', 'JPY', 0.05093),
    ars: criarMoeda('peso', 'ARS', 0.06033),

}

let casa = {
    taxa: 0.10
}

casa.proporCompra = function(moeda, quantidade) {
    let valorAjustado = moeda.valor - (moeda.valor * this.taxa);
    return valorAjustado * quantidade;
}

casa.proporVenda = function(moeda, quantidade) {
    let valorAjustado = moeda.valor * (1 + this.taxa);
    return valorAjustado * quantidade;
}

casa.porporTroca = function(moeda1, qtd1, moeda2, qtd2) {
    let valorCompra = this.proporCompra(moeda1, qtd1),
        valorVenda = this.proporVenda(moeda2, qtd2);

    return valorVenda - valorCompra;
}

casa.criarTabela = function(moedas) {
    let tabela = [];

    for (let moeda in moedas) {
        tabela.push({
            'Moeda': moedas[moeda].nome + ' (' + moedas[moeda].sigla + ')',
            'Valor de venda': this.proporVenda(moedas[moeda], 1),
            'Valor de compra': this.proporCompra(moedas[moeda], 1)

        });

    }

    return tabela;

}

console.table(casa.criarTabela(moedas));