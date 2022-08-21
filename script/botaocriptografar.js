import { $ } from './buscarPorId.js';
import { criptografar } from './criptografar.js';
import { esconderImagem } from './campoimagem.js';

function receberFraseCriptografar() {
    const frase = $('entrada-texto').value;
    if(frase != "") {
        $('saida-texto').innerHTML = criptografar(frase);
        esconderImagem();
    }
}

export function botaoCriptografar() {
    receberFraseCriptografar();
}