const pai = { nome: 'pedro', corCabelo: 'preto'}



// criando um objeto com base no obj pai, herdando a cor do cabelo, e modificando somente o nome 
const filha1 = Object.create(pai)
filha1.nome = 'ana'
console.log(filha1.corCabelo);