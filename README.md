# programacionFrontEnd

# Calculadora Simple

Calculadora web simple creada con html, js y css.


## Introducción

Esta es una calculadora web simple que te permite realizar operaciones matemáticas básicas, como suma, resta, multiplicación y división. La calculadora cuenta con una interfaz fácil de usar y te proporciona resultados instantáneos.

## Cómo usar la calculadora

1. Ingresa un número en el campo "Operando 1".

2. Selecciona un operador (suma, resta, multiplicación o división) en el menú desplegable.

3. Ingresa otro número en el campo "Operando 2".

4. Haz clic en el botón "Calcular" para obtener el resultado de la operación.
   La calculadora validará automáticamente que los operandos sean números válidos antes de realizar la operación. Si ingresas valores no numéricos o dejas los campos en blanco, se mostrará un mensaje de error.
   Si intentas realizar una división por cero, la calculadora también te mostrará un mensaje de error.
   Si el resultado de la operación es extremadamente grande o pequeño para mostrarse en la interfaz, recibirás un mensaje de error indicando que el resultado es demasiado grande o pequeño.

## Implementación Detallada

- La estructura básica del documento HTML se encuentra en el archivo `index.html`.
- Los estilos visuales y de diseño se definen en el archivo `<style>`.
- La funcionalidad de la calculadora se implementa utilizando JavaScript, que se encuentra en el archivo `<script>`

### Parte 1: Estructura básica HTML y estilos CSS

Se crea una estructura de página básica con campos de texto para ingresar operandos, un menú desplegable para seleccionar el operador y un botón para calcular. Se aplican estilos CSS para mejorar el aspecto visual de la calculadora.

### Parte 2: Implementación de las operaciones (JavaScript)

Se utiliza JavaScript para realizar las operaciones de suma, resta, multiplicación y división. La función `calculate()` toma los valores ingresados, elige el operador seleccionado y muestra el resultado en la interfaz.

### Parte 3: Validación de los operandos (JavaScript)

Se valida que los operandos ingresados sean números válidos antes de realizar la operación. Si se ingresan valores no numéricos o se dejan campos en blanco, se muestra un mensaje de error.

### Parte 4: Manejo de errores (JavaScript)

La calculadora maneja errores como la división por cero y resultados extremadamente grandes o pequeños. Se muestran mensajes de error apropiados para cada caso.




