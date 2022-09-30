function Pessoa(){
    this.idade = 0

       setInterval(() =>{
        this.idaded++
        console.log(this.idade)
    }, 1000)
}
new Pessoa