//Este evento é acionado quando o cursor do mouse é movido sobre um elemento.
function mouseSobre() {
    document.getElementById("mensagem").textContent = "Você passou o mouse sobre o campo de nome.";
}

//Este evento é acionado quando um elemento recebe o foco
function campoFocado() {
    document.getElementById("mensagem").textContent = "O campo de nome recebeu o foco.";
}

//Este evento é acionado quando o valor de um elemento é alterado
function valorAlterado() {
    var nome = document.getElementById("nome").value;
    document.getElementById("mensagem").textContent = "O valor do campo de nome foi alterado para '" + nome + "'.";
}