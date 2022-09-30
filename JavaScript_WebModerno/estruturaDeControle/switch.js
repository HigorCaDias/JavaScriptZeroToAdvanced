const imprimirResultado = function(nota){
// expressao do switch nao retorna verdadeiro ou falso
// e sim um valor 
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('quadro de honra')
            // para sair de uma funcao precisamos utilizar o break
        break
        case 8: case 7:
            console.log('aprovado');
        break 
        case 6: case 5:
            console.log('recuperacao');
            //  Default seria a mesma coisa do else dentro de  um if
        default:
            console.log('nota invalida');
    }
}