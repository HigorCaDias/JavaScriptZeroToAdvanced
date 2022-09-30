const ferrari = {
    modelo: 'f40',
    velmax: 324,
}

const volvo = {
    modelo: 'v40',
    valmax: 240
}


// atraves do __proto__ acessa o obj pai (Prototipo) se encontrar algum resultado ele será retornado
console.log(ferrari.__proto__)

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype);