function $(id) {
    return document.getElementById(id);
}

document.getElementById("com-texto").style.display = "none";
document.getElementById("sem-texto").style.display = "block";

$('entrada-texto').addEventListener('click', function () {
    const comTexto = document.getElementById('com-texto');
    const semTexto = document.getElementById('sem-texto');
    if (comTexto.style.display === 'none' && semTexto.style.display == 'block') {
        comTexto.style.display = 'block';
        semTexto.style.display = 'none';
    }
});

function codificar(frase) {
    const novaFrase = frase
        .replace(/[\be\b]/g, 'enter')
        .replace(/[\bi\b]/g, 'imes')
        .replace(/[\ba\b]/g, 'ai')
        .replace(/[\bo\b]/g, 'ober')
        .replace(/[\bu\b]/g, 'ufat');
    return novaFrase;
}
function decodificar(frase) {
    const novaFrase = frase
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');
    return novaFrase;
}

function receberFraseCriptografar() {
    const frase = document.getElementById('entrada-texto').value;
    document.getElementById('saida-texto').innerHTML = codificar(frase.toLowerCase());
}

function receberFraseDescriptografar() {
    const frase = document.getElementById('entrada-texto').value;
    document.getElementById('saida-texto').innerHTML = decodificar(frase.toLowerCase());
}

function copiarFrase() {
    const frase = document.getElementById('saida-texto');
    frase.select();
    navigator.clipboard.writeText(frase.value);
}