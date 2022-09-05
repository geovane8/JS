// funções s/ e c/ parametros

function mostrarMenu() {
    let entradas = ['Entra', 'Cadastrar', 'Fechar'];

    for (let i = 0, o = 1; i < entradas.length; i += 1, o += 1) {
        console.log(o + ' - ' + entradas[i]);
    }

}

mostrarMenu();