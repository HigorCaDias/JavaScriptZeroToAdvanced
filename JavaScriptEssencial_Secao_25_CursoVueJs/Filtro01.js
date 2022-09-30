const produtos = [
    {nome: 'notebook', preco: 2599, fragil: true},
    {nome: 'ipad pro', preco: 4199, fragil: true},
    {nome: 'CopoDeVidro', preco: 9.9, fragil: true},
    {nome: 'CopoDePlastico', preco: 2599, fragil: false},
]

console.log(produtos.filter(function(p){
    return false

}))

// Criando duas contatntes para analisar se determinado produto é caro e fragil
const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil == true

// passando os dois filtros para somente os objs caros e fragils sejam exibidos do array
console.log(produtos.filter(caro).filter(fragil))