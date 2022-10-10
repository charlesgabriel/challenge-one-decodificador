import { $ } from './buscaSeletor.js';
import { descriptografar } from './descriptografar.js';
import { esconderElemento } from './campoImagem.js';
import { textoEntrada } from './textoEntrada.js';
import { textoSaida } from './textoSaida.js';

function receberFraseDescriptografar() {
    const frase = $(textoEntrada).value;
    if(frase != "") {
        $(textoSaida).innerHTML = descriptografar(frase);
        esconderElemento();
    }
}

export function botaoDescriptografar() {
    receberFraseDescriptografar();
}