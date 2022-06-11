function mostrarImagem() {
    $('com-texto').classList.add('esconder-elemento');
    $('com-imagem').classList.remove('esconder-elemento');
}

function esconderImagem() {
    $('com-texto').classList.remove('esconder-elemento');
    $('com-imagem').classList.add('esconder-elemento');
}

mostrarImagem();