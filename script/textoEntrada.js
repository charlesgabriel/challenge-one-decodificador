import { $ } from "./buscaSeletor.js";

export const textoEntrada = '[data-areatexto-entrada]';

$(textoEntrada).addEventListener('input', function() {
    const regex = /[a-zA-Z\s+]/;
    let caracter = this.value.charAt(this.value.length - 1);
    let resultado = regex.exec(caracter);
    if(resultado !== null) {
        this.value = this.value;
    } else {
        this.value = this.value.replace(this.value.charAt(this.value.length - 1), "");
    }
});

$(textoEntrada).addEventListener('keyup', function() {
    this.value = this.value.toLowerCase();
});