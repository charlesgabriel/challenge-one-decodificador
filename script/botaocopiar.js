function copiarFrase() {
    const frase = $('saida-texto');
    frase.select();
    navigator.clipboard.writeText(frase.value);
    limpar();
}

function botaoCopiar() {
    copiarFrase();
}