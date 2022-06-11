function receberFraseCriptografar() {
    const frase = $('entrada-texto').value;
    if(frase != "") {
        $('saida-texto').innerHTML = criptografar(frase);
        esconderImagem();
    }
}

function botaoCriptografar() {
    receberFraseCriptografar();
}