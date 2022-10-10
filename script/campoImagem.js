import { $ } from './buscaSeletor.js';
var imagem = '.resultado__imagem';
var texto = '.resultado__texto';

export function mostrarElemento() {
    $(texto).classList.add('esconder-elemento');
    $(imagem).classList.remove('esconder-elemento');
}

export function esconderElemento() {
    $(imagem).classList.add('esconder-elemento');
    $(texto).classList.remove('esconder-elemento');
}