function somarNumeros() {
    let soma = 0;
    // declaraão de let, variavel, let nao sai da pagina var sai da pagina
    let continuar = true;
    // ela pode ter 3 tipos

    while (continuar) {
        let numero = parseFloat(prompt("Digite um número (ou digite '0' para encerrrar):"));
        // parseFloat transforma em real


        if (!isNaN(numero)) {
            // esse sinal ! inverte a variavel
            soma += numero;
            //soma = soma + numero
            
        } else{
            alert("Por favor, digite um número válido")
        }

        continuar = confirm("Deseja adicionar mais números?");
    }

    alert("A soma dos números é: " + soma);
}