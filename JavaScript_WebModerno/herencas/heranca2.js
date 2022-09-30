// cadeia de prototipos (prorortpe chain)
Object.prototype.attr0 = '0' // não faça isso 

const avo = { attr1: 'a'}
const pai = {__proto__: avp, attr2: 'b', attr3:'3'}
const filho = {__proto__: pai, attr3: 'c'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 335 //shadowing -> açaõ que sobre poe outra informação (no caso a vel max passada anteriomente)
}

const volvo = {
    modelo: 'f40',
    status(){
        // o This referencia o modelo dentro da constante e o super referencia o prototype dentro da const carro 
        return `${this.modelo}: ${super.status()}`
    }
}

// Realiza a conversa entre ferrari e seu prototype (carro), assim habilitnado os atributos passados a cim
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)


