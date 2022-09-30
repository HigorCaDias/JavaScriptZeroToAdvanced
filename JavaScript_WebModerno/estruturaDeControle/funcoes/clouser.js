// clousure é o escopo criado quando uma funcao é declarada
// esse escopo permite a função acessar e manipular variaveis externas á função 

// contexto lexico em açao

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncap());