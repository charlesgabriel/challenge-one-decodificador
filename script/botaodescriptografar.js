import { $ } from './buscarPorId.js';
import { descriptografar } from './descriptografar.js';
import { esconderImagem } from './campoimagem.js';

function receberFraseDescriptografar() {
    const frase = $('entrada-texto').value;
    if(frase != "") {
        $('saida-texto').innerHTML = descriptografar(frase);
        esconderImagem();
    }
}

export function botaoDescriptografar() {
    receberFraseDescriptografar();
}