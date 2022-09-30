const pessoa = {
    nome: 'rebeca',
    idade: 12,
    peso: 10 
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`);
})

Object.defineProperties(pessoa, ' data de nasciimento ')

  