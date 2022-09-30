const valor = 'global'

function minhaFuncao(){
    console.log(valor);
}

function exec(valor){
    const valor = 'local'
    minhaFuncao()
}

exec()