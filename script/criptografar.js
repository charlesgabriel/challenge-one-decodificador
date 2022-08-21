export function criptografar(frase) {
    const novaFrase = frase
        .replace(/[\be\b]/g, 'enter')
        .replace(/[\bi\b]/g, 'imes')
        .replace(/[\ba\b]/g, 'ai')
        .replace(/[\bo\b]/g, 'ober')
        .replace(/[\bu\b]/g, 'ufat');
    return novaFrase;
}