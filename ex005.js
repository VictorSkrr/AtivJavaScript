function transformarNumero() {
    let numero = parseInt(prompt("Digite um número:"));

    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    if (numero % 2 === 0) {
        // Se o número for par, transforme-o em ímpar adicionando 1
        numero += 1;
    } else {
        // Se o número for ímpar, transforme-o em par subtraindo 1
        numero -= 1;
    }

    // Exibir o número transformado em um alerta
    alert("Número transformado: " + numero);
}
