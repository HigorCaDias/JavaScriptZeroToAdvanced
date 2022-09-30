// Exemlpo de callback no browser

// Pegando Uma tag HTML dentro da web
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('o Eveneto ocorreu!')
}