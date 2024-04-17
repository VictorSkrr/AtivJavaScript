// Função para verificar se uma letra é vogal ou consoante
function verificarLetra(letra) {
    // Converter a letra para minúscula para simplificar a comparação
    letra = letra.toLowerCase();

    // Verificar se a letra é uma vogal
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        return "vogal";
    } else {
        // Se não for uma vogal, é uma consoante
        return "consoante";
    }
}

// Solicitar ao usuário para inserir uma letra
let letra = prompt("Digite uma letra:");

// Verificar se a letra é uma vogal ou consoante
let tipoLetra = verificarLetra(letra);

// Exibir o resultado
alert("A letra '" + letra + "' é uma " + tipoLetra + ".");
