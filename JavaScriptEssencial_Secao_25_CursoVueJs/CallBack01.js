const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// Passando o nome do obj que esta percorrendo e seu indice
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))

// CallBack nada mais é do que passar uma função
// Que aguarda um evento acontecer para ser chamada