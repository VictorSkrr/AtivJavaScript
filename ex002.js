function iniciarContagemRegressiva(segundos) {
    const intervalo = setInterval(() => {
        if (segundos === 0) {
            console.log("Lançamento!");
            clearInterval(intervalo);
        } else {
            console.log(segundos + "...");
            segundos--;
        }
    }, 1000);
}


iniciarContagemRegressiva(10);
