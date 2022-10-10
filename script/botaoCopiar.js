import { $ } from './buscaSeletor.js';
import { limpar } from './limpar.js';
import { textoSaida } from './textoSaida.js';

function copiarFrase() {
    const frase = $(textoSaida);
    frase.select();
    navigator.clipboard.writeText(frase.value);
    limpar();
}

export function botaoCopiar() {
    copiarFrase();
}