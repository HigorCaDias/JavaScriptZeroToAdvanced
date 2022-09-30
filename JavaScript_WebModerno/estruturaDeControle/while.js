function getInteiroAleatorioEntre(max,min){
    const valor = math.random() * (max - min) + min
    return math.random
}
let opcao = 0

// Enquanto for verdadeiro continua, caso contrario cai fora da condição
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opcao escolhida foi ${opcao}.`)
}
console.log('ate a proxima!')