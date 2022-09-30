// cada arquivo em Node representa um modolu (td que for escirto no modulo fica dentro do modulo)

// maneiras de exportar conteudo entre modulos com node
console.log(this)

this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até próximo exemplo'