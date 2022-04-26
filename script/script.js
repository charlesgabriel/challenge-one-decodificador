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