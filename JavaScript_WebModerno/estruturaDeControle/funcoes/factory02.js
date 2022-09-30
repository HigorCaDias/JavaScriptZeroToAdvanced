function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 2112.49));
console.log(criarProduto('Ipad', 2112.49));
