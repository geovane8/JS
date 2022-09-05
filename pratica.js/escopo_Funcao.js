/*definir as variavel local dentro das funções usando o *let*
caso não seja usado o let a variavel se torna global*/

function multiplicar(x, y) {
    let resultado = x * y;
    return resultado;
}

multiplicar(10, 15);