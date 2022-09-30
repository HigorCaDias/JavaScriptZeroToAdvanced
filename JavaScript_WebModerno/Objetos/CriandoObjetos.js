// usando a notação literal 
const obj1 = {}


// object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);


// funçoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}
const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('lapiseira', 8.99, 0.20)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());  

// funcao factory
function criarFuncionario (nome, salarioBase, Faltas){
    return{
        nome,
        salarioBase,
        Faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - Faltas)
        }
    }
}
const f1 = criarFuncionario('Marcelo', 7800, 4)
console.log(f1.getSalario());