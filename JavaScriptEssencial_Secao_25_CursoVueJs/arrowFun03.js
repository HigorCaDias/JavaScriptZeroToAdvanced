let comparaComThis = function(param) {
    //Chmando o Thsi dentro de uma funçaõ assim 
    //  estamos alterando o param global dele  
    console.log(this === param)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow()
