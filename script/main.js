import { $, $qS } from './buscarPorId.js';
import { mostrarImagem } from './campoimagem.js';
import { botaoCopiar } from './botaocopiar.js';
import { botaoCriptografar } from './botaocriptografar.js';
import { botaoDescriptografar } from './botaodescriptografar.js';

$('entrada-texto').addEventListener('input', function() {
    const regex = /[a-zA-Z\s+]/;
    let caracter = this.value.charAt(this.value.length - 1);
    let resultado = regex.exec(caracter);
    if(resultado !== null) {
        this.value = this.value;
    } else {
        this.value = this.value.replace(this.value.charAt(this.value.length - 1), "");
    }
});

$('entrada-texto').addEventListener('keyup', function() {
    this.value = this.value.toLowerCase();
});

const copiar = $qS('[data-botao-copiar]');
const criptografia = $qS('[data-botao-cripto]');
const descriptografia = $qS('[data-botao-descripto]');

copiar.addEventListener('click', botaoCopiar);
criptografia.addEventListener('click', botaoCriptografar);
descriptografia.addEventListener('click', botaoDescriptografar);

mostrarImagem();