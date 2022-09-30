const notas = [7.7, 5.6, 6.7,9.9,7.7, 5.6, 6.7, 9.9]

// Extraindo notas de dentro de um array sem usar o call back
 

// Criando um array notas baixas vazio 
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
// Adicionando elemntos num array utilizamos o Push 
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Utilizando o CallBack


// Função filter filtra os arrays dentro de um determinado criterio
// Determinado pela pessoa
notasBaixas2 = notas.filter(function(nota){
    return nota > 7
})

console.log(notasBaixas2)