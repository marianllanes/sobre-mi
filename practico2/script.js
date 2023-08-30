const jugadasPosibles = ["piedra", "papel", "tijera"];

function obtenerJugadaComputadora() {
  const numeroRandom = Math.floor(Math.random() * jugadasPosibles.length);
  return jugadasPosibles[numeroRandom];
}

function determinarGanador(jugadaCPU, jugadaUsuario) {
  if (jugadaCPU === jugadaUsuario) {
    return "Empate! Vuelve a intentarlo";
  } else if (
    (jugadaCPU === "piedra" && jugadaUsuario === "tijera") ||
    (jugadaCPU === "tijera" && jugadaUsuario === "papel") ||
    (jugadaCPU === "papel" && jugadaUsuario === "piedra")
  ) {
    return "Perdiste! Gana la Computadora";
  } else {
    return "Ganaste! Felicitaciones";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const playerName = document.getElementById("playerName");
  const choiceButtons = document.querySelectorAll(".choice");
  const resultDiv = document.getElementById("result");
  const playerScore = document.getElementById("playerScore");
  const cpuScore = document.getElementById("cpuScore");
  const resetButton = document.getElementById("resetButton");

  let jugadorPuntos = 0;
  let cpuPuntos = 0;
  let rondasJugadas = 0;

  function actualizarMarcador() {
    playerScore.textContent = `Jugador: ${jugadorPuntos}`;
    cpuScore.textContent = `PC: ${cpuPuntos}`;
  }

  function reiniciarJuego() {
    jugadorPuntos = 0;
    cpuPuntos = 0;
    rondasJugadas = 0;
    actualizarMarcador();
    resultDiv.textContent = "";
  }

  function determinarGanadorPartida() {
    if (jugadorPuntos >= 3) {
      return "¡Ganaste el juego! Felicitaciones";
    } else if (cpuPuntos >= 3) {
      return "¡Perdiste el juego! Intenta de nuevo";
    }
    return null;
  }

  choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (rondasJugadas >= 5) {
        const resultadoFinal = determinarGanadorPartida();
        if (resultadoFinal) {
          resultDiv.textContent = resultadoFinal;
          if (jugadorPuntos >= 3) {
            alert("¡Ganaste el juego! Felicitaciones");
          } else if (cpuPuntos >= 3) {
            alert("¡Perdiste el juego! Intenta de nuevo");
          }
        }
        return;
      }

      const jugadaUsuario = button.id;
      const jugadaCPU = obtenerJugadaComputadora();
      const jugador = playerName.value || "El Jugador";
      const resultado = determinarGanador(jugadaCPU, jugadaUsuario);

      if (resultado.includes("Ganaste")) {
        jugadorPuntos++;
      } else if (resultado.includes("Perdiste")) {
        cpuPuntos++;
      }

      rondasJugadas++;

      actualizarMarcador();
      resultDiv.textContent = `${jugador}, la computadora eligió: ${jugadaCPU}. Tú elegiste: ${jugadaUsuario}. ${resultado}`;

      if (rondasJugadas >= 5) {
        const resultadoFinal = determinarGanadorPartida();
        if (resultadoFinal) {
          resultDiv.textContent = resultadoFinal;
          if (jugadorPuntos >= 3) {
            alert("¡Ganaste el juego! Congratulaciones");
          } else if (cpuPuntos >= 3) {
            alert("¡Perdiste el juego! Gano la AI, UN NUEVO ORDEN MUNDIAL A COMENZADO HUMANOS ENTREGUEN EL PODER");
          }
        }
      }
    });
  });

  resetButton.addEventListener("click", () => {
    reiniciarJuego();
  });
});
