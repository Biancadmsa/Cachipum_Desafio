let solicitarJugar = parseInt(prompt("Bienvenido a Cachipum, ¿cuántas veces quieres jugar continuamente del 1 al 10?"));
let victoriasUsuario = 0;
let victoriasMaquina = 0;

if (solicitarJugar >= 1 && solicitarJugar <= 10) {
    for (let i = 0; i < solicitarJugar; i++) {
        let respuestaUsuario = prompt("Escribe una opción: Piedra 🪨, Papel 📄 o Tijera ✂️").toLowerCase();

        let jugadas = ["piedra", "papel", "tijera"];
        let respuestaMaquina = jugadas[Math.floor(Math.random() * jugadas.length)];

        switch (respuestaUsuario) {
            case "piedra":
                alert("¡Has elegido Piedra! ¡Buena Suerte!");
                break;
            case "papel":
                alert("¡Has elegido Papel! ¡Buena Suerte!");
                break;
            case "tijera":
                alert("¡Has elegido Tijera! ¡Genial!");
                break;
            default:
                alert("Respuesta no válida.");
                i--; // Si la respuesta no es válida, se disminuye el contador para repetir el turno.
                continue; // Continuar con la siguiente iteración del bucle.
        }

        // Determinar el ganador
        if (respuestaUsuario === respuestaMaquina) {
            alert("Empate! 😒");
        } else if ((respuestaUsuario === "piedra" && respuestaMaquina === "tijera") ||
                   (respuestaUsuario === "papel" && respuestaMaquina === "piedra") ||
                   (respuestaUsuario === "tijera" && respuestaMaquina === "papel")) {
            alert("¡Muy bien! ganastes!🎉");
            victoriasUsuario++;
        } else {
            alert("Oh no!! perdiste! 😢");
            victoriasMaquina++;
        }
    }
    // Mostrar resultados
    alert(`Resultados:
    Victorias del usuario: ${victoriasUsuario}
    Victorias de la máquina: ${victoriasMaquina}`);
    
    if (victoriasUsuario > victoriasMaquina) {
        alert("¡Felicidades! ¡Eres el Ganador! 🎉");
    } else if (victoriasUsuario < victoriasMaquina) {
        alert("¡Perdiste, La máquina te ha Ganado! 😢");
    } else {
        alert("¡Hay un Empate! 😒");
    }
} else {
    alert("Número no válido. Introduce un valor entre 1 y 10.");
}
