import { $ } from './buscarPorId.js';
import { mostrarImagem } from './campoimagem.js';

export function limpar() {
    $('saida-texto').innerHTML = "";
    $('entrada-texto').value = "";
    $('entrada-texto').focus();
    mostrarImagem();
}