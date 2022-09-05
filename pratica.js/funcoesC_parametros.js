//c/ parametros
function mostrarMenu_2(entradas) {
    for (let i = 0, o = 1; i < entradas.length; i += 1, o += 1) {
        console.log(o + ' - ' + entradas[i]);
    }
}
mostrarMenu_2(['Ver perfil', 'Editar menu', 'Configuraões', 'Sair', 'Fechar']);