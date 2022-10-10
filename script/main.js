import { $ } from './buscaSeletor.js';
import { mostrarElemento } from './campoImagem.js';
import { botaoCopiar } from './botaoCopiar.js';
import { botaoCriptografar } from './botaoCriptografar.js';
import { botaoDescriptografar } from './botaoDescriptografar.js';

const copiar = $('[data-botao-copiar]');
const criptografia = $('[data-botao-cripto]');
const descriptografia = $('[data-botao-descripto]');

copiar.addEventListener('click', botaoCopiar);
criptografia.addEventListener('click', botaoCriptografar);
descriptografia.addEventListener('click', botaoDescriptografar);

mostrarElemento();