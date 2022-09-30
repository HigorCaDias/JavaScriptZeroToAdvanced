const alunos = [
    {nome: "joao", nota: 6.5, bolsista:false},
    {nome: "Maria", nota: 5, bolsista:true},
    {nome: "Pedro", nota: 9.5, bolsista:false},
    {nome: "Ana", nota: 8.7, bolsista:true},
]
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)