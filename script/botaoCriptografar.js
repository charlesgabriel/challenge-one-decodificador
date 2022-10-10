import { $ } from './buscaSeletor.js';
import { criptografar } from './criptografar.js';
import { esconderElemento } from './campoImagem.js';
import { textoEntrada } from './textoEntrada.js';
import { textoSaida } from './textoSaida.js';

function receberFraseCriptografar() {
    const frase = $(textoEntrada).value;
    if(frase != "") {
        $(textoSaida).innerHTML = criptografar(frase);
        esconderElemento();
    }
}

export function botaoCriptografar() {
    receberFraseCriptografar();
}