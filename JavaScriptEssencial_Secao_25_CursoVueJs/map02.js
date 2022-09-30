const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}',
]

// Funçaõ que transforma um json em um objeto para poder ser trabalhado como array 
const paraObejto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

// primeiro se passa o carrinho como obj 
// ao fim do 1 map teremos um array de 4 obj para serem trabalhados
// depois chamamos o segundo map para extrair somente o preco do obg
const resultado = carrinho.map(paraObejto).map(apenasPreco)

console.log(resultado)







// let Preco = carrinho.map(function(e){
//     return e.carrinho
// })

// console.log(Preco)