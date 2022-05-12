function $(id) {
    return document.getElementById(id);
}

function limpar() {
    $('saida-texto').innerHTML = "";
    $('entrada-texto').value = "";
    $('entrada-texto').focus();
}

$('com-texto').style.display = "none";
$('sem-texto').style.display = "block";
$('entrada-texto').addEventListener('click', function() {
    const comTexto = $('com-texto');
    const semTexto = $('sem-texto');
    if (comTexto.style.display === 'none' && semTexto.style.display == 'block') {
        comTexto.style.display = 'block';
        semTexto.style.display = 'none';
    }
});

$('entrada-texto').addEventListener('input', function() {
    const regex = /[a-z\s+]/;
    let caracter = this.value.charAt(this.value.length - 1);
    let resultado = regex.exec(caracter);
    if(resultado !== null) {
        this.value = this.value;
    } else {
        this.value = this.value.replace(this.value.charAt(this.value.length - 1), "");
    }
});

$('entrada-texto').addEventListener('keyup', function() {
    this.value = this.value.toLowerCase();
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
    const frase = $('entrada-texto').value;
    $('saida-texto').innerHTML = codificar(frase);
}

function receberFraseDescriptografar() {
    const frase = $('entrada-texto').value;
    $('saida-texto').innerHTML = decodificar(frase);
}

function copiarFrase() {
    const frase = $('saida-texto');
    frase.select();
    navigator.clipboard.writeText(frase.value);
    limpar();
}