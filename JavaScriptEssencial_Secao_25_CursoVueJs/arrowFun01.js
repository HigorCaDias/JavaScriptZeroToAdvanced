let dobro = function(a) {
    return 2 * a
}

// A função arrow sempre é uma função anonima
dobro = (a) => {
    return 2 * a
}

// Essa funçaõ deixa o retorno implicito
dobro = a => 2 * a
console.log(dobro(Math.PI))


let ola = function() {
    return 'ola'
}

ola = () => 'ola'

// Função de um unico parametro 
ola = _=> 'ola'

console.log(ola())