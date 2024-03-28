function somarNumeros(a, b) {
    return a + b;
}

// Função para exibir o resultado da soma na página
function exibirResultado() {
    
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);

    var resultado = somarNumeros(num1, num2);

    // Exibir o resultado na página
    document.getElementById("resultado").innerHTML = "A soma é: " + resultado;
}