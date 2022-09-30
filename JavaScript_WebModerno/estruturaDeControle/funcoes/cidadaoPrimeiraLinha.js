function fun01(){

}
function fun02(){

}

// armazenar funcao em um array
const array = [ function(a,b) {return a + b }, fun01, fun02]
console.log(array[0](2,3));

// Aremezenar em um atributo de objeto
const obj = {}
obj.falar = function(){
    return 'opa'
}
console.log(obj.falar());

// passar funcao como param
function run(fun){
    fun()
}

run(function(){console.log('executando...')})


// uma funcao pode retornar/conter outra funcao
function soma(a,b){
    return function(c){
        console.log(a + b + c);
    }
}
soma(2,3)(4)
