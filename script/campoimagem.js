import { $ } from './buscarPorId.js';

export function mostrarImagem() {
    $('com-texto').classList.add('esconder-elemento');
    $('com-imagem').classList.remove('esconder-elemento');
}

export function esconderImagem() {
    $('com-texto').classList.remove('esconder-elemento');
    $('com-imagem').classList.add('esconder-elemento');
}