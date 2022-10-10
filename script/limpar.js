import { $ } from './buscaSeletor.js';
import { esconderElemento } from './campoImagem.js';
import { textoEntrada } from './textoEntrada.js';
import { textoSaida } from './textoSaida.js';

export function limpar() {
    $(textoSaida).innerHTML = "";
    $(textoEntrada).value = "";
    $(textoEntrada).focus();
    esconderElemento();
}