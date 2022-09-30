function soBoaNoticia(nota){
    // Se a nota for maior ou igual a 07 o seguinte comando será executado
    if(nota >= 7 ){
        console.log('aprovado com ' + nota);

    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdade(valor){
    if(valor){
        console.log('é verdade....' + valor);
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade('')
seForVerdade(NaN)
seForVerdade(undefined)