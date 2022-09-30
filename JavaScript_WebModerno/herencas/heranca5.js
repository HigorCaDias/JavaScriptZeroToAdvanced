// utilizando operador New

function Aula(nome, videoId){
    this.nome = nome
    this.videoId = videoID
}

const aula1 = new Aula('bem vindo', 123)
const aula2 = new Aula('Até breve', 321)
console.log(aula1, aula2);


// simulando o new
function novo(f,...param){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,param)
    return obj
}

const aula3 = novo(Aula, 'bem vindo',123)
const aula4 = novo(Aula, 'bem vindo',123)
