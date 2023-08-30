# Juego de Piedra, Papel o Tijera

Este es un juego simple de Piedra, Papel o Tijera implementado utilizando HTML, CSS y JavaScript. En este juego, los usuarios pueden jugar contra la computadora eligiendo una de las tres opciones: piedra, papel o tijera. El objetivo es ganar la mayoría de las partidas en un total de 5 rondas para convertirse en el ganador.

## Cómo jugar

1. Abre el archivo `index.html` en tu navegador para comenzar el juego.

2. Ingresa tu nombre en el campo provisto para identificarte como jugador.

3. Haz clic en una de las imágenes de "piedra", "papel" o "tijera" para hacer tu elección.

4. Después de cada ronda, el juego mostrará el resultado de la partida y actualizará el marcador.

5. El juego continúa hasta que uno de los jugadores (jugador o computadora) alcance 3 victorias.

## Implementación

El juego está implementado utilizando HTML, CSS y JavaScript. Aquí hay una descripción de las características implementadas:

- **Interfaz de Usuario:** Se proporciona una interfaz de usuario con la opción de ingresar un nombre de jugador y botones de imágenes para elegir entre las opciones.

- **Elección de la Computadora:** La computadora selecciona aleatoriamente una de las opciones (piedra, papel o tijera) para jugar contra el jugador.

- **Marcador:** El juego lleva un seguimiento del marcador, mostrando la cantidad de victorias para el jugador y la computadora.

- **Juego al Mejor de 5:** El juego se juega al mejor de 5 rondas. El jugador o la computadora que gane 3 partidas primero será el ganador del juego.

- **Reinicio:** Hay un botón de reinicio que permite al jugador reiniciar el juego y restablecer los marcadores.

- **Anuncio del Ganador:** Cuando un jugador alcanza 3 victorias, se muestra un mensaje emergente en Google Chrome anunciando al ganador.

## Requisitos

Para jugar al juego, solo necesitas un navegador web moderno que admita HTML5, CSS3 y JavaScript.

## Dificultades

El primer desafio fue modificar el archivo .js donde tenia el juego piedra, papel o tijera y enlazar con el codigo HTML. 
A continuacion tuve inconvenientes para capturar el nombre del jugador y que se muestre en un mensaje, para ello agregue la linea "const jugador = playerName.value || "El Jugador";" declarando la variante. 
Por ultimo, y si bien no es una dificultad, queda pendiente mejorar (con practica y mas practica) el codigo CSS para hacer mas atractiva y dinamica la presentacion del proyecto.

## Créditos

Este juego ha sido creado por Mariano Llanes, como respuesta al Trabajo Practico n2 del Curso de Programacion Web Front-End.