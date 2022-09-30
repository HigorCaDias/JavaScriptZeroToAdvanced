function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        this.idaded++
        console.log(this.idade)
    }.bind(this), 1000)
}
new Pessoa