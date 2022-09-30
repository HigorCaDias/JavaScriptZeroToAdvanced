function falarDepoisDe(segundos, frase ){
    // resolve é passado quando a promessa é realizada
    // Reject quando a promessa é declinada
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, "que legal" )
//podemos chamr quantos Thens foram necessarios 
// e um vai desencadeando o outro dentro do parametro passado na função   
.then(frase.concat('?????'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e) )


// Promisses aceitam somente um parametro
// se quisermos passar varios parametros preciamos utilizar um OBJ