const inputTexto1 = document.querySelector(".input-texto-secao1");
const mensagem = document.querySelector(".input-texto-secao2");

function botaoCodificar() {
    const textoCodificado = codificar(inputTexto1.value);
    mensagem.value = textoCodificado;
}

function codificar(stringCodificar) {
    let codigoDesafio = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCodificar = stringCodificar.toLowerCase();

    for (let i = 0; i < codigoDesafio.length; i++) {
        if (stringCodificar.includes(codigoDesafio[i][0])) {
            stringCodificar = stringCodificar.replaceAll(codigoDesafio[i][0], codigoDesafio[i][1]);
        }
    }
    return stringCodificar;
}

function botaoDecodificar() {
    const textoDecodificado = decodificar(inputTexto1.value);
    mensagem.value = textoDecodificado;
}

function decodificar(stringDecodificar) {
    let codigoDesafio = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecodificar = stringDecodificar.toLowerCase();

    for (let i = 0; i < codigoDesafio.length; i++) {
        if (stringDecodificar.includes(codigoDesafio[i][1])) {
            stringDecodificar = stringDecodificar.replaceAll(codigoDesafio[i][1], codigoDesafio[i][0]);
        }
    }
    return stringDecodificar;
}

function copiar() {
    let textoCopiar = document.querySelector(".input-texto-secao2");
    textoCopiar.select();
    document.execCommand("copy");
    alert("Texto copiado!");
}