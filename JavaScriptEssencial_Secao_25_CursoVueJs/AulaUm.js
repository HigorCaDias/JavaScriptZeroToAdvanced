// Função em JS é First-class object (Citizens)
// Higjer-ordedr Functions

// Criando função de forma literal

function fun1(){
    // Funções em JS podem ou nao retornar algo
}

// Podemos armazenar uma função em variavel
const fun2 = function (){}

// Podemos armezanar uma funçaõ dentro de um array
const array = [function (a,b) {return a + b }, fun1, fun2]
console.log(array[0] (2, 3))


// armezenar uma função dentro de um atributo de um obg
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

// Podemos passar uma função como parametro 
function run(fun){
    fun()
}

// Uma função pode retornar e conter outra função 
function soma(a,b){
    return function(c){
        console.log(a + b + c )
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4);