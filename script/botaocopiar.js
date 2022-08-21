import { $ } from './buscarPorId.js';
import { limpar } from './limpar.js';

function copiarFrase() {
    const frase = $('saida-texto');
    frase.select();
    navigator.clipboard.writeText(frase.value);
    limpar();
}

export function botaoCopiar() {
    copiarFrase();
}