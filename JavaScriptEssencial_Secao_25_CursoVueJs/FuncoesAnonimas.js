const soma = function(x, y) {
    return x + y
}

const ImprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

// Um parametro
ImprimirResultado(3, 4)
// Dois Parametros
ImprimirResultado(3, 4, soma)
// passando uma funcao anonima na chamada de outra função 
ImprimirResultado(3, 4, function(x, y){
    return x - y
} )
// Funao anonima com arrow ( => )
ImprimirResultado(3, 4, (x,y) => x * y)

const pessoa = {
    // Passando atrihbutos para uma função
    falar: function(){
        console.log('opa')
    }
}
// Acessando funçaõ anonuma dentro de um atributo do Objeto
pessoa.falar()