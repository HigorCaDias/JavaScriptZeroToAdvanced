function area(largura, altura){
    const area = largura * altura
    if (area > 20 ) {
        console.log('valor acima do permitido: ${area}m2.' )
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4, 4, 5, 6))
console.log(area(5, 5))

// todo codigo java acontece dentro de uma classe
// e podemos criar objetos com base nessa classe