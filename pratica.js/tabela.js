casa.criarTabela = function(moedas) {
    let tabela = [];

    for (let moeda in moedas) {
        let linha = {
            'Moeda': moedas[moeda].nome + ' (' + moeda[moeda].sigla + ')',
            'Valor de venda': this.proporVenda(moedas[moeda], 1),
            'Valor de compra': this.proporCompra(moedas[moeda], 1)
        };

        tabela.push(linha);

    }
}