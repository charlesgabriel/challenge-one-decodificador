function receberFraseDescriptografar() {
    const frase = $('entrada-texto').value;
    if(frase != "") {
        $('saida-texto').innerHTML = descriptografar(frase);
        esconderImagem();
    }
}

function botaoDescriptografar() {
    receberFraseDescriptografar();
}