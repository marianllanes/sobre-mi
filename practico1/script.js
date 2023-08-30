document.addEventListener("DOMContentLoaded", function () {
    const operand1Input = document.getElementById("operand1");
    const operand2Input = document.getElementById("operand2");
    const operatorSelect = document.getElementById("operator");
    const calculateButton = document.getElementById("calculate");
    const resultDisplay = document.getElementById("result");
    const errorDisplay = document.getElementById("error");
    const clearButton = document.getElementById("clear");
  
    
    calculateButton.addEventListener("click", () => {
      errorDisplay.textContent = "";
      resultDisplay.textContent = "";
  
      const operand1 = parseFloat(operand1Input.value);
      const operand2 = parseFloat(operand2Input.value);
      const operator = operatorSelect.value;
  // salvar errores y ponerlos en pantalla
      if (isNaN(operand1) || isNaN(operand2)) {
        errorDisplay.textContent = "Ingresa operandos válidos";
        return;
      }
  //switch case para realizar todas las operaciones aritmeticas
  //distingo errores dentro de cada case
      let result;
  
      switch (operator) {
        case "add":
          result = operand1 + operand2;
          break;
        case "subtract":
          result = operand1 - operand2;
          break;
        case "multiply":
          result = operand1 * operand2;
          break;
        case "divide":
          if (operand2 === 0) {
            errorDisplay.textContent = "No se puede dividir por cero";
            return;
          }
          result = operand1 / operand2;
          break;
        default:
          errorDisplay.textContent = "Operador no válido";
          return;
      }
  
      if (!isFinite(result)) {
        errorDisplay.textContent = "Resultado demasiado grande o pequeño";
        return;
      }
  
      resultDisplay.textContent = `Resultado: ${result}`;
    });
  // boton borrar "reinicia" el casillero poniendo un espacio vasio 
    clearButton.addEventListener("click", () => {
      operand1Input.value = "";
      operand2Input.value = "";
      resultDisplay.textContent = "";
      errorDisplay.textContent = "";
    });
  });
  