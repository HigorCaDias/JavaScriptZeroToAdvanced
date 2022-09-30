// metodo Getter le os valores de uma varivel 
// set muda o valor de uma variavel 


const sequencia = {
    _valor: 1, //convenção (mostrando que a variavle é pretendidade ser acessada internamente dentro da funcao )
    get valor() {
        return this._valor++
    },
    set valor(valor){
        this._valor = valor
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000