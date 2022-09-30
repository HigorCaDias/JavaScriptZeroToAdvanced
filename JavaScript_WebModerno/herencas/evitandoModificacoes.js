// object.preventExtensions - não permite que obj seja extendido (podemos excluir atributos mas nao podemos incluir)

const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promocao'
})

console.log('extensicel:', Object.preventExtensions(produto));


// Prevents the modification of attributes of existing properties, and prevents the addition of new properties
Object.seal


