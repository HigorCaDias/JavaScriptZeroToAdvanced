// ESB: Object.values/Object.entries
const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias na notação Literal 
const nome = 'carla'
const pessoa = {
    nome,
    nome(){
     return 'oi gente'   
    }
}
console.log(pessoa.nome, pessoa.ola())

// class

class animal {}
class Cachorro extends animal{
    falar(){
        return 'au au'
    }
}
console.log(new Cachorro().falar())