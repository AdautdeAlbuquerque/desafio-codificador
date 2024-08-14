var textInput = document.querySelector("#texto");
var outPut = document.querySelector("#txt_criptografado");
var copiarBtn = document.querySelector("#copiar");
var reiniciarBtn;
var btnCriptografar = document.querySelector(".btn_criptografar");

function mostrarBotaoCopiar() {
    if (!copiarBtn) {
        copiarBtn = document.createElement("button");
        copiarBtn.className = "btn_copiar";
        copiarBtn.id = "copiar";
        copiarBtn.textContent = "Copiar";
        copiarBtn.onclick = copiar;
        document.querySelector(".botoes").appendChild(copiarBtn);
    }
}

function mostrarBotaoReiniciar() {
    if (!reiniciarBtn) {
        reiniciarBtn = document.createElement("button");
        reiniciarBtn.className = "btn_reiniciar";
        reiniciarBtn.id = "reiniciar";
        reiniciarBtn.textContent = "Reiniciar";
        reiniciarBtn.onclick = reiniciar;
        document.querySelector(".botoes").appendChild(reiniciarBtn);
    }
}

function criptografar() {
    var texto = textInput.value.trim();

    // Verificação de caracteres inválidos
    if (/[^a-z\s]/.test(texto)) {
        alert("Texto inválido! Por favor, insira apenas letras minúsculas sem acento e sem caracteres especiais.");
        return;
    }

    if (!texto) {
        alert("Por favor, insira algum texto para criptografar.");
        return; 
    }

    var resultadoCripto = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

    outPut.innerHTML = '<textarea readonly class="resultado">' + resultadoCripto + '</textarea>';
    mostrarBotaoCopiar();
    mostrarBotaoReiniciar();
    removerMargemDireitaBtnCriptografar();
}

function descriptografar() {
    var texto = textInput.value.trim(); 

    if (/[^a-z\s]/.test(texto)) {
        alert("Texto inválido! Por favor, insira apenas letras minúsculas sem acento e sem caracteres especiais.");
        return;
    }

    if (!texto) {
        alert("Por favor, insira algum texto para descriptografar.");
        return;
    }

    var resultadoDescripto = texto.replace(/ai/g, "a")
                                  .replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");

    outPut.innerHTML = '<textarea readonly class="resultado">' + resultadoDescripto + '</textarea>';
    mostrarBotaoCopiar();
    mostrarBotaoReiniciar();
    removerMargemDireitaBtnCriptografar();
}

function copiar() {
    var textoCop = document.querySelector("#txt_criptografado textarea");
    textoCop.select();
    document.execCommand('copy');
    alert("Sua mensagem foi copiada!");
}

function reiniciar() {
    location.reload();
}

function removerMargemDireitaBtnCriptografar() {
    if (btnCriptografar) {
        btnCriptografar.style.marginRight = "0";
    }
}

