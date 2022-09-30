const notas = [6.7, 5.8, 1.5, 3.8]
for(let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: '55'
}

// percorrendo o objeto com o FOR
for( let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`);
}