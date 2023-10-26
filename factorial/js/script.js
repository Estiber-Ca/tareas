// Mensaje para personalizar

let nombre = prompt("Hola, dime cómo te llamas:");
//Leer el dom
function calcularFactorial() {
  const numeroInput = document.getElementById("numeroInput");
  const resultadoElement = document.getElementById("resultado");

  const numero = parseFloat(numeroInput.value);
// Validar número
  if (!isNaN(numero)) {
    const factorial = calcularFactorialReal(numero);
    resultadoElement.textContent = nombre + ` el factorial de ${numero} es: ${factorial}`;
  } else {
    resultadoElement.textContent = "Por favor, ingresa un número válido.";
  }
}
// Validar operación con número
function calcularFactorialReal(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorialReal(numero - 1);
  }
}
